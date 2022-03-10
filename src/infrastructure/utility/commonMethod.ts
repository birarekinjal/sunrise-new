/* eslint-disable @typescript-eslint/no-shadow */
import { Reducer, useEffect, useReducer, useRef } from 'react';
import toast from 'react-hot-toast';

export const saveToken = async (token : string) => {
  try {
    await localStorage.setItem('TOKEN', token);
    // await localStorage.setItem('TOKEN', token);
  } catch (e) {
    return e;
  }
};

export const getBaseURL = () => {
  if (!process.env.REACT_APP_ENV) {
    return process.env.REACT_APP_LOCAL_URL;
  } else if (process.env.REACT_APP_ENV === 'staging') {
    return process.env.REACT_APP_STAGING_URL;
  } else if (process.env.NODE_ENV === 'production') {
    return process.env.REACT_APP_PRODUCTION_URL;
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

export function useStateCallback<S>(initialState: S) {
  const [state, setState] = useReducer<Reducer<S, Partial<S>>>(
    (state, newState) => ({ ...state, ...newState }),
    initialState,
  );
  const cbRef = useRef<((state: S) => void) | null>(null);

  function setStateCallback(state: Partial<S>, cb: (state: S) => void) {
    cbRef.current = cb;
    setState(state);
  }

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null;
    }
  }, [state]);

  return [state, setStateCallback] as const;
}

export const showToast = (message : string) => {
  toast.remove();
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  message && toast(message, { style: { background: '#333', color: '#fff' } });
};

