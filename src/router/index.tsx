import { Route, Routes } from 'react-router';
import DefaultLayout from '../layouts/defaultLayout';
import LoginPage from '../pages/auth/loginPage';
import RoleSelect from '../pages/auth/roleSelect';
import TermsOfService from '../pages/auth/termsOfServicePage';
import MyPage from '../pages/myPage/myPage';

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='*' />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/member-agree' element={<TermsOfService />} />
          <Route path='/role-selection' element={<RoleSelect />} />
          <Route path='/signup' element={<RoleSelect />} />
        </Route>
      </Routes>
    </>
  );
};
export default Router;
