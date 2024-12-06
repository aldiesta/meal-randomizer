import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import './MealCard.scss';

const MealCard = ({ image, title, description, onDelete }) => {
  return (
    <div className="meal-card">
      <Card className="card">
        <CardMedia
          className="card-media"
          image={image}
          title={title}
        />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <div className="description-and-delete">
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <IconButton 
              onClick={onDelete} 
              aria-label="delete"
              className="delete-button"
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

MealCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MealCard;
