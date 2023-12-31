import { createSlice } from '@reduxjs/toolkit';
import type { AuthState } from '../../../types/auth';
import {
  thunkCheckAuth,
  thunkConfirm,
  thunkLogin,
  thunkLogout,
  thunkRefreshToken,
  thunkSignup,
  thunkUpdateUser,
} from './createAsyncThunks';

const initialState: AuthState = {
  accessToken: '',
  user: {
    status: 'pending',
  },
  addUserModalIsOpen: false,
  errorMessage: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.addUserModalIsOpen = !state.addUserModalIsOpen;
    },
    toggleError: (state) => {
      state.errorMessage = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(thunkCheckAuth.fulfilled, (state, action) => action.payload);
    builder.addCase(thunkCheckAuth.rejected, (state) => {
      state.user.status = 'guest';
    });
    builder.addCase(thunkRefreshToken.fulfilled, (state, action) => {
      state.user.status = 'authenticated';
      state.accessToken = action.payload;
    });
    builder.addCase(thunkLogin.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = { ...action.payload.user, status: 'authenticated' };
    });

    builder.addCase(thunkLogin.rejected, (state, action) => {
      state.user = { ...action.payload.user, status: 'authenticated' };
    });
    builder.addCase(thunkSignup.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = { ...action.payload.user, status: 'authenticated' };
    });
    builder.addCase(thunkConfirm.rejected, (state, action) => {
      console.log('бульдер', action.payload);
      state.errorMessage = action.payload
    });
    builder.addCase(thunkLogout.fulfilled, (state) => {
      state.user.status = 'guest';
    });
    builder.addCase(thunkUpdateUser.fulfilled, (state, action) => {
      state.user = { ...action.payload, status: 'authenticated' };
    });
  },
});

export const { toggleModal, toggleError } = authSlice.actions;

export default authSlice.reducer;
