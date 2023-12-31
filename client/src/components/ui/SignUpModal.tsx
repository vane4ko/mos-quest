import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { thunkSignup } from '../../redux/slices/auth/createAsyncThunks';
import { TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SingupModal({changeHandler, inputValue, show, setShow }) {
 

  const dispatch = useAppDispatch();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={show}
        onClose={() => setShow(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={show}>
          <Box style={{borderRadius: '20px'}} sx={style}>
            <div className='modalBox'>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Вам на почту был отправден код
            </Typography>
            <form onSubmit={(e)=>{
          e.preventDefault();
          dispatch(thunkSignup(inputValue))
        }}>
          <TextField
            onChange={changeHandler}
            required
            // label="Повторите пароль"
            placeholder="Введите код из почты"
            color="secondary"
            error={false && 'Invalid confirmCode'}
            name="confirmCode"
            type="number"
            value={inputValue.confirmCode}
            className="modalTextField"
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            color="secondary"
            className="buttonReg submitBtn"
          >
            Отправить
          </Button>
        </form>
        </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}