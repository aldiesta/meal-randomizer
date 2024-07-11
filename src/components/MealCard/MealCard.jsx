import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MealCard = () => {
	return (
		<div className="meal-card">
			<Card sx={{ maxWidth: 300 }}>
				<CardMedia
					sx={{ height: 100 }}
					image="src/assets/images/chicken-parmesan.jpg"
					title="Chicken Parmesan"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
					Chicken Parmesan
					</Typography>
					<Typography variant="body2" color="text.secondary">
					Italian Dish - Breaded chicken covered in melted cheese and red sauce
					</Typography>
				</CardContent>
				<CardActions>
					<Button 
						size="small"
						onClick={() => {
							alert('Show Recipe')
						}}
					>
						Show Recipe
					</Button>
				</CardActions>
			</Card>
		</div>
	)
}
 
export default MealCard;