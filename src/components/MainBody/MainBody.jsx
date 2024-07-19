import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import MealCard from '../MealCard/MealCard';
import './MainBody.scss';

const meals = [
	{
		image: 'src/assets/images/chicken-parmesan.jpg',
		title: 'Chicken Parmesan',
		description: 'Italian',
	},
	{
		image: 'src/assets/images/sushi.jpg',
		title: 'Sushi',
		description: 'Japanese',
	},
	{
		image: 'src/assets/images/chili.jpg',
		title: 'Chili',
		description: 'American',
	},
	{
		image: 'src/assets/images/pot-roast.jpg',
		title: 'Pot Roast',
		description: 'American',
	},
	{
		image: 'src/assets/images/fried-rice.jpg',
		title: 'Fried Rice',
		description: 'Chinese',
	},
	{
		image: 'src/assets/images/fajitas.jpg',
		title: 'Fajitas',
		description: 'Mexican',
	},
	{
		image: 'src/assets/images/tacos.jpg',
		title: 'Tacos',
		description: 'Mexican',
	},
	{
		image: 'src/assets/images/stir-fry.jpg',
		title: 'Stir Fry',
		description: 'Chinese',
	},
	{
		image: 'src/assets/images/spaghetti.jpg',
		title: 'Spaghetti',
		description: 'Italian',
	},
	{
		image: 'src/assets/images/carbonara.jpg',
		title: 'Carbonara',
		description: 'Italian',
	},
	{
		image: 'src/assets/images/brats.jpg',
		title: 'Brats',
		description: 'American',
	},
	{
		image: 'src/assets/images/burgers.jpg',
		title: 'Burgers',
		description: 'American',
	},
	{
		image: 'src/assets/images/bbq-ribs.jpg',
		title: 'BBQ Ribs',
		description: 'American',
	},
	{
		image: 'src/assets/images/pulled-pork.jpg',
		title: 'Pulled Pork',
		description: 'American',
	},
	{
		image: 'src/assets/images/mac-and-cheese.jpg',
		title: 'Mac and Cheese',
		description: 'American',
	},
	{
		image: 'src/assets/images/pizza.jpg',
		title: 'Pizza',
		description: 'Italian',
	},
	{
		image: 'src/assets/images/pho.jpg',
		title: 'Pho',
		description: 'Vietnamese',
	},
	{
		image: 'src/assets/images/bahn-mi.jpg',
		title: 'Bahn Mi',
		description: 'Vietnamese',
	},
	{
		image: 'src/assets/images/french-onion-soup.jpg',
		title: 'French Onion Soup',
		description: 'French',
	},
	{
		image: 'src/assets/images/paella.jpg',
		title: 'Paella',
		description: 'Spanish',
	},
];

const MainBody = () => {
	return (
		<Box
			className="main-box"
			height={1000}
			width="100vw"
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent={'center'}
			gap={4}
			p={2}
			sx={{ 
				background: 'radial-gradient(592px at 48.2% 50%, rgba(255, 255, 249, 0.6) 0%, rgb(160, 199, 254) 74.6%)'
			}}
		>
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
			<div className="button-section">
				<Button
					id="reset" 
					variant="contained"
					onClick={() => {
						alert('Resetting');
					}}
				>
					Reset
				</Button>
				<Button 
					id="randomize"
					variant="contained"
					onClick={() => {
						alert('Randomizing');
					}}
				>
					Randomize
				</Button>
			</div>
		</Box>
	)
}

export default MainBody;