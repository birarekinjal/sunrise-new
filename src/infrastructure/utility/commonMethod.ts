export const saveToken = async (token : string) => {
  try {
    await localStorage.setItem('TOKEN', token);
  } catch (e) {
    return e;
  }
};

export const getBaseURL = () => {
  switch (true) {
    case !process.env.REACT_APP_ENV:
      return process.env.REACT_APP_LOCAL_URL;
    case process.env.REACT_APP_ENV === 'staging':
      return process.env.REACT_APP_STAGING_URL;
    case process.env.REACT_APP_ENV === 'production':
      return process.env.REACT_APP_PRODUCTION_URL;
    default: {
      return;
    }
  }
};

export const getToken = async () => {
  try {
    const token = await localStorage.getItem('TOKEN');
    if (token !== null) {
      return token;
    }
  } catch (e) {
    return e;
  }
};
