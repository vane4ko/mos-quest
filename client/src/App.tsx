import React, { useEffect } from 'react';
import '@fontsource/inter';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import NavBar from './components/ui/NavBar';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import QuestPage from './components/pages/QuestPage';
import 'react-toastify/dist/ReactToastify.css';
import ThemePage from './components/pages/ThemePage';
import PrivateRouter from './components/HOC/PrivateRouter';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import LocationsPage from './components/pages/LocationsPage';
import LocationPage from './components/pages/LocationPage';
import MainPage from './components/pages/MainPage';
import AccountPage from './components/pages/AccountPage';
import {
  thunkGetCommentsOfLocation,
  thunkGetLocations,
} from './redux/slices/locations/locationAsyncThunks';
import { thunkGetQuests, thunkGetProgress } from './redux/slices/questThunks/questAsyncThunks';
import { thunkCheckAuth } from './redux/slices/auth/createAsyncThunks';
import AccPage from './components/pages/AccPage';
import thunkGetAchieves from './redux/slices/achievesAsyncThunk';
import useAxiosInterceptors from './components/customHook/useAxiosInterceptors';
import { authInstance } from './services/authService';
import { locationInstance } from './services/locationService';
import { achieveInstance } from './services/achieveService';
import { questInstance } from './services/questService';

function App(): JSX.Element {
  const user = useAppSelector((state) => state.authSlice.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(thunkCheckAuth());
    void dispatch(thunkGetLocations());
    void dispatch(thunkGetCommentsOfLocation());
    void dispatch(thunkGetQuests());
    void dispatch(thunkGetAchieves());;
    void dispatch(thunkCheckAuth()).then(() => {
      if (user.status === 'authenticated') {
        void dispatch(thunkGetProgress(user.id)); ////ПАМАГИТИ
      }
    });
  }, [user.status]);

  useAxiosInterceptors(authInstance);
  useAxiosInterceptors(locationInstance);
  useAxiosInterceptors(achieveInstance);
  useAxiosInterceptors(questInstance);
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/quest/:questId" element={<QuestPage />} />
        <Route path="/location/:id" element={<LocationPage />} />{' '}
        <Route path="/account" element={<AccountPage />} />
        <Route path="/" element={<MainPage />} />
        <Route element={<PrivateRouter isAllowed={user.status === 'authenticated'} />} />
        <Route path="/themepage" element={<ThemePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/acc" element={<AccPage />} />
      </Routes>
    </Container>
  );
}

export default App;
