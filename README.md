# Recetario Express API

### Endpoints:

#### **Register**

```
fetch("https://recetarioexpress-api.onrender.com/auth/register", {
    method: 'POST',
    body: {
        username: String,
        password: String
    }
})
```

#### **Login**

```
fetch("https://recetarioexpress-api.onrender.com/auth/login", {
    method: 'POST',
    body: JSON.stringify({
        username: String,
        password: String
    })
})
```

---

#### **Get all recipes**

```
fetch("https://recetarioexpress-api.onrender.com/api/recipes")
```

#### **Get a single recipe**

```
fetch("https://recetarioexpress-api.onrender.com/api/recipes/:id")
```

#### **Create a recipe**

```
fetch("https://recetarioexpress-api.onrender.com/api/recipes", {
    method: 'POST',
    body: JSON.stringify({
        name: String,
        veggie: Boolean,
        ingredients: String[],
        instructions: String[],
        image: String,
        cookingTime: Number,
        createdBy: mongoose.Schema.Types.ObjectId
    })
})
```

#### **Update a recipe**

```
fetch("https://recetarioexpress-api.onrender.com/api/recipes/:id", {
    method: 'PATCH',
    body: JSON.stringify({
        name?: String,
        veggie?: Boolean,
        ingredients?: String[],
        instructions?: String[],
        image?: String,
        cookingTime?: Number,
    })
})
```

#### **Delete a recipe**

```
fetch("https://recetarioexpress-api.onrender.com/api/recipes/:id", {
    method: 'DELETE'
})
```

#### **Save a recipe**

```
fetch("https://recetarioexpress-api.onrender.com/api/recipes", {
    method: 'PATCH',
        body: JSON.stringify({
        recipeID: mongoose.Schema.Types.ObjectId,
        userID: mongoose.Schema.Types.ObjectId
    })
})
```
