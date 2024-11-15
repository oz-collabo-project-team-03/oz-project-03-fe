import { Route, Routes } from 'react-router';
import DefaultLayout from '../layouts/defaultLayout';
import LoginPage from '../pages/auth/loginPage';
import RoleSelect from '../pages/auth/roleSelectPage';
import SignupCompletePage from '../pages/auth/signupCompletePage';
import SignupPage from '../pages/auth/signupPage';
import TermsOfServicePage from '../pages/auth/termsOfServicePage';
import MyPage from '../pages/myPage/myPage';
import EditProfile from '../pages/editProfile/editProfile';

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='*' />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/my-page' element={<MyPage />} />
          <Route path='/edit-profile' element={<EditProfile />} />
          <Route path='/member-agree' element={<TermsOfServicePage />} />
          <Route path='/role-selection' element={<RoleSelect />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/signup-complete' element={<SignupCompletePage />} />
        </Route>
      </Routes>
    </>
  );
};
export default Router;
