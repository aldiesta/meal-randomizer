import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import MealCard from '../MealCard/MealCard';
import './MainBody.scss'

const MainBody = () => {
	return (
		<Box
			className="main-box"
			height={1000}
			width={visualViewport}
			display="flex"
			alignItems="center"
			justifyContent={'center'}
			gap={4}
			p={2}
			sx={{ 
				background: 'radial-gradient(592px at 48.2% 50%, rgba(255, 255, 249, 0.6) 0%, rgb(160, 199, 254) 74.6%)'
			}}
		>
			<div className="meal-section">
				<MealCard />
			</div>
			<div className="button-section">
			<Button
					id="reset" 
					variant="contained"
					onClick={() => {
						alert('Resetting')
					}}
				>
					Reset
				</Button>
				<Button 
					id="randomize"
					variant="contained"
					onClick={() => {
						alert('Randomizing')
					}}
				>
					Randomize
				</Button>
			</div>
		</Box>
	)
}

export default MainBody