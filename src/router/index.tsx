import { Route, Routes } from 'react-router';
import DefaultLayout from '../layouts/defaultLayout';
import LoginPage from '../pages/auth/loginPage';
import MyPage from '../pages/myPage/myPage';

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='*' />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/mypage' element={<MyPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default Router;
