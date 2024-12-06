import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import MealCard from '../MealCard/MealCard';
import './MainBody.scss';
import initialMeals from './mealData';
import BasicModal from '../Modal/Modal';

const MainBody = () => {
  const [meals, setMeals] = useState(initialMeals);
  const [deletedMeals, setDeletedMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shuffleMeals = () => {
    const shuffledMeals = shuffleArray([...meals]);
    setMeals(shuffledMeals);

    // Select a random meal from the shuffled array
    const randomMeal = shuffledMeals[Math.floor(Math.random() * shuffledMeals.length)];
    setSelectedMeal(randomMeal);
    setIsModalOpen(true);
  };

  const resetMeals = () => {
    setMeals(initialMeals);
    setDeletedMeals([]);
    setSelectedMeal(null);
    setIsModalOpen(false);
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleDeleteMeal = (mealToDelete) => {
    setDeletedMeals([...deletedMeals, mealToDelete]);
    setMeals(meals.filter(meal => meal !== mealToDelete));
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
        <BasicModal open={isModalOpen} handleClose={handleCloseModal}>
          <h2>Randomly Selected Meal</h2>
          <MealCard
            image={selectedMeal.image}
            title={selectedMeal.title}
            description={selectedMeal.description}
          />
        </BasicModal>
      )}
      <div className="meal-section">
        {meals.map((meal, index) => (
          <MealCard
            key={index}
            image={meal.image}
            title={meal.title}
            description={meal.description}
            onDelete={() => handleDeleteMeal(meal)}
          />
        ))}
      </div>
    </Box>
  );
};

export default MainBody;
