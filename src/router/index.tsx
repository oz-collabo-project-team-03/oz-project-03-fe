import { Route, Routes } from 'react-router';
import DefaultLayout from '../layouts/defaultLayout';
import LoginPage from '../pages/auth/loginPage';

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='*' />
          <Route path='/login' element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default Router;
