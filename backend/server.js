// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let meals = [
    { image: 'src/assets/images/chicken-parmesan.jpg', title: 'Chicken Parmesan', description: 'Italian' },
    { image: 'src/assets/images/sushi.jpg', title: 'Sushi', description: 'Japanese' },
    { image: 'src/assets/images/chili.jpg', title: 'Chili', description: 'American' },
    { image: 'src/assets/images/pot-roast.jpg', title: 'Pot Roast', description: 'American' },
    { image: 'src/assets/images/fried-rice.jpg', title: 'Fried Rice', description: 'Chinese' },
    { image: 'src/assets/images/fajitas.jpg', title: 'Fajitas', description: 'Mexican' },
    { image: 'src/assets/images/tacos.jpg', title: 'Tacos', description: 'Mexican' },
    { image: 'src/assets/images/stir-fry.jpg', title: 'Stir Fry', description: 'Chinese' },
    { image: 'src/assets/images/spaghetti.jpg', title: 'Spaghetti', description: 'Italian' },
    { image: 'src/assets/images/carbonara.jpg', title: 'Carbonara', description: 'Italian' },
    { image: 'src/assets/images/brats.jpg', title: 'Brats', description: 'American' },
    { image: 'src/assets/images/burgers.jpg', title: 'Burgers', description: 'American' },
    { image: 'src/assets/images/bbq-ribs.jpg', title: 'BBQ Ribs', description: 'American' },
    { image: 'src/assets/images/pulled-pork.jpg', title: 'Pulled Pork', description: 'American' },
    { image: 'src/assets/images/mac-and-cheese.jpg', title: 'Mac and Cheese', description: 'American' },
    { image: 'src/assets/images/pizza.jpg', title: 'Pizza', description: 'Italian' },
    { image: 'src/assets/images/pho.jpg', title: 'Pho', description: 'Vietnamese' },
    { image: 'src/assets/images/bahn-mi.jpg', title: 'Bahn Mi', description: 'Vietnamese' },
    { image: 'src/assets/images/paella.jpg', title: 'Paella', description: 'Spanish' },
    { image: 'src/assets/images/alfredo.jpg', title: 'Fettucine Alfredo', description: 'Italian' },
    { image: 'src/assets/images/ramen.jpg', title: 'Ramen', description: 'Japanese' }
];

app.get('/api/meals', (req, res) => {
    res.json(meals);
});

app.post('/api/meals', (req, res) => {
    const newMeal = req.body;
    meals.push(newMeal);
    res.status(201).json(newMeal);
});

app.put('/api/meals/:title', (req, res) => {
    const { title } = req.params;
    const updatedMeal = req.body;
    meals = meals.map(meal => meal.title === title ? updatedMeal : meal);
    res.json(updatedMeal);
});

app.delete('/api/meals/:title', (req, res) => {
    const { title } = req.params;
    meals = meals.filter(meal => meal.title !== title);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});