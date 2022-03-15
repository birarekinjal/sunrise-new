import React from 'react';
import { useSetUserData } from './hook/useSetUserData';
import LoginForm from './loginForm';
import Grid from '@mui/material/Grid';
import { authenticationBottomSvg } from '../../../../application/constants/svgConstants';
import { authenticationTopSvg } from '../../../../application/constants/svgConstants';
import logo from '../../../../application/images/sunrise-diamond-logo.webp';
import Link from '@mui/material/Link';
import '../authentication.scss';
import { constants } from '../../../../application/constants/constant';

const Login = () => {

  const { handleOnSubmit, isLoading } = useSetUserData();

  const { welcomeMessage, information } = constants.loginPage;
 
  return (
    <section className='authentication'>
      <main>
        <article>
          <Grid container spacing={2} className="main-content">
            <Grid item xs={12} md={6} className="left-content">
              <Link href="#"><img src={logo} alt="Sunrise Diamond" /></Link>
            </Grid>
            <Grid item xs={12} md={6} className="right-content">
              <h1>{welcomeMessage}<span className='color-cerulean'>:)</span></h1>
              <p>{information}</p>
              <LoginForm handleOnSubmit={handleOnSubmit} loading={isLoading} />
            </Grid>
          </Grid>
        </article>
        {authenticationTopSvg}
        {authenticationBottomSvg}
      </main>
    </section>
  );
};

export default Login;