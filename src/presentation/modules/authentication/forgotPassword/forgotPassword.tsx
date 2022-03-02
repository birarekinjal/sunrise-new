import React from 'react';
import { useSetForgotPassword } from './hook/useSetForgotPassword';
import ForgotPasswordForm from './forgotPasswordForm';
import { KeyboardBackspace } from '@material-ui/icons';
import { constants } from '../../../../application/constants/constant';
import Grid from '@mui/material/Grid';
import { authenticationBottomSvg } from '../../../../application/constants/svgConstants';
import { authenticationTopSvg } from '../../../../application/constants/svgConstants';
import logo from '../../../../application/images/sunrise-diamond-logo.webp';
import Link from '@mui/material/Link';
import '../authentication.scss';

const ForgotPassword = () => {
  const { handleOnSubmit } = useSetForgotPassword();
  const { backToLogin, heading, title } = constants.forgotPassword;
  return (
    <section className='authentication'>
      <main>
        <article>
          <Grid container spacing={2} className="main-content">
            <Grid item xs={12} md={6} className="left-content">
              <Link href="#"><img src={logo} alt="Sunrise Diamond" /></Link>
            </Grid>
            <Grid item xs={12} md={6} className="right-content">
              <div className='go-back'>
                <Link href='/' id='link' rel='nofollow'>
                  <KeyboardBackspace/>
                  <span>{backToLogin}</span>
                </Link> 
              </div>
              <h1>{heading}</h1>
              <p>{title}</p>
              <ForgotPasswordForm handleOnSubmit={handleOnSubmit} />
            </Grid>
          </Grid>
        </article>
        {authenticationTopSvg}
        {authenticationBottomSvg}
      </main>
    </section>
  );
};

export default ForgotPassword;
