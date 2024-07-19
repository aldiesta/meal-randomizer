import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MealCard = ({ image, title, description }) => {
	return (
		<div className="meal-card">
			<Card className='card' sx={{ maxWidth: 300 }}>
				<CardMedia className='card-media'
					sx={{ height: 100 }}
					image={image}
					title={title} 
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button 
						size="small"
						onClick={() => {
							alert('Show Recipe');
						}}
					>
						Show Recipe
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}

MealCard.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default MealCard;