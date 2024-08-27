
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const TopBar = () => {
	return (
		<div className="top-bar" data-testid="top-bar">
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar 
						variant="dense"
						sx={{ justifyContent: 'center' }}
						>
					<Typography variant="h6" color="inherit" component="div">
						Meal Randomizer
					</Typography>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	)
}
 
export default TopBar;