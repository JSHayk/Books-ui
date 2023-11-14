import {Routes, Route} from 'react-router-dom';
import { ROUTER } from './router';
import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={ROUTER.REGISTER_PAGE_ROUTE} element={<SignupPage />} />
      <Route path={ROUTER.LOGIN_PAGE_ROUTE} element={<LoginPage />} />
    </Routes>
  )
}

export default AppRoutes
