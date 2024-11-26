import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Modal.scss';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#807979',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

export default function BasicModal({ open, handleClose, children }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={style}>
            <button 
                    onClick={handleClose} 
                    style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                    }}
                    aria-label="Close"
                >
                    <img 
                        src="https://designsystem.kohls.com/assets/3.42.0/kdk/icons/kdk-cross-bold.svg" 
                        alt="Close"
                        style={{ width: '24px', height: '24px' }}
                    />
                </button>
                {children}
            </Box>
        </Modal>
    );
}
