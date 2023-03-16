const userModel = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username: username }).exec();

    if (user) {
      return res.json({ response: 'Este usuario ya se encuentra registrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({ username: username, password: hashedPassword });

    res.status(200).json({ response: 'Usuario registrado exitosamente!', user: newUser });
  } catch (error) {
    res.json(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username: username }).exec();

    if (!user) {
      return res.json({ response: 'Usuario inexistente.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.json({ response: 'Usuario o contraseña incorrectos.' });
    }

    const token = jwt.sign({ id: user._id }, 'secretodelogeo');

    res.status(200).json({ token, userID: user._id });
  } catch (error) {
    res.json(error);
  }
};

module.exports = { registerUser, loginUser };
