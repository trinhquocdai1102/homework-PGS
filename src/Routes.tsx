import React, { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ROUTES } from './configs/routes';
import ProtectedRoute from './modules/common/components/ProtectedRoute';

const HomePage = lazy(() => import('./modules/home/pages/HomePage'));
const ContactPage = lazy(() => import('./modules/home/pages/ContactPage'));
const LoginPage = lazy(() => import('./modules/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('./modules/auth/pages/RegisterPage'));
const ListItemPage = lazy(() => import('./modules/listItem/pages/ListItemPage'));

// interface Props {
//     props: Props;
// }
// const [visible, setVisible] = useState(false);

// const toggleVisible = () => {
//   const scrolled = document.documentElement.scrollTop;
//   if (scrolled > 300) {
//     setVisible(true);
//   } else if (scrolled <= 300) {
//     setVisible(false);
//   }
// };

// const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// };
// window.addEventListener('scroll', toggleVisible);

export const Routes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Switch location={location}>
        <Route path={ROUTES.login} component={LoginPage} />
        <Route path={ROUTES.register} component={RegisterPage} />
        <Route path={ROUTES.listItem} component={ListItemPage} />
        <ProtectedRoute path={ROUTES.home} component={HomePage} />
        <Route path={ROUTES.contact} component={ContactPage} />

        <Route path="/" component={LoginPage} />
      </Switch>
    </Suspense>
  );
};
