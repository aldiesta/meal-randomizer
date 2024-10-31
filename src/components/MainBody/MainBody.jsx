import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import MealCard from '../MealCard/MealCard';
import './MainBody.scss';
import initialMeals from './mealData';

const MainBody = () => {

    const [meals, setMeals] = useState(initialMeals);
  const [selectedMeal, setSelectedMeal] = useState(null); // State for the selected random meal

  const shuffleMeals = () => {
    const shuffledMeals = shuffleArray([...meals]);
    setMeals(shuffledMeals);

    // Select a random meal from the shuffled array
    const randomMeal = shuffledMeals[Math.floor(Math.random() * shuffledMeals.length)];
    setSelectedMeal(randomMeal);
  };

  const resetMeals = () => {
    setMeals(initialMeals);
    setSelectedMeal(null); // Clear the selected meal on reset
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

    return (
        <Box
            data-testid="main-body"
            className="main-box"
            minHeight="100vh"
            width="100"
            display="flex"
            flexDirection="column"
            alignItems="center"
            // justifyContent={'center'}
            gap={4}
            p={2}
            sx={{ 
                background: 'radial-gradient(592px at 48.2% 50%, rgba(255, 255, 249, 0.6) 0%, rgb(160, 199, 254) 74.6%)'
            }}
        >
            <div className="button-section">
                <Button
                    id="reset" 
                    variant="contained"
                    onClick={resetMeals}
                >
                    Reset
                </Button>
                <Button 
                    id="randomize"
                    variant="contained"
                    onClick={shuffleMeals}
                >
                    Randomize
                </Button>
            </div>
            {selectedMeal && (
            <div className="selected-meal">
                <h2>Randomly Selected Meal</h2>
                <MealCard
                    image={selectedMeal.image}
                    title={selectedMeal.title}
                    description={selectedMeal.description}
                />
            </div>
            )}
            <div className="meal-section">
                {meals.map((meal, index) => (
                    <MealCard
                        key={index}
                        image={meal.image}
                        title={meal.title}
                        description={meal.description}
                    />
                ))}
            </div>
            

        </Box>
    )
}

export default MainBody;