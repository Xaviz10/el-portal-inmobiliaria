import React, { useEffect } from 'react';
import axios from 'axios';
import useGeneralHooks from '../../controllers/generalHooks';
import useComponents from '../../views/components';
import useTypes from '../../strings/types';

const useInterceptor = (store: { getState: Function }) => {
  const { useToast } = useGeneralHooks();
  const { error } = useToast();
  const { Toast } = useComponents();

  const handleRequestSuccess = (request: any) => {
    const { getState } = store;
    const { session } = getState();

    if (session.accessToken && session.tokenType) {
      request.headers.authorization = `${session.tokenType} ${session.accessToken}`;
    }
    request.headers['Content-Type'] = 'application/json';
    request.headers['accept'] = 'application/json';
    return request;
  };

  const handleRequestError = (error: any) => {
    console.error(`REQUEST ERROR! => ${error}`);
    return error;
  };

  const handleResponseSuccess = (response: any) => {
    return response;
  };

  const handleResponseError = (errorRequest: {
    response: { status: number; data: { message: string } };
  }) => {
    switch (errorRequest.response.status) {
      case 400:
      case 422:
        error(
          <Toast
            text={errorRequest?.response?.data?.message}
            state={'error'}
          />,
          {
            position: 'top-right',
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            toastId: Math.random(),
          }
        );
        break;
      case 500:
        error(
          <Toast
            text={errorRequest?.response?.data?.message}
            listOfErrors={[]}
            state={'error'}
          />,
          {
            position: 'top-right',
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            toastId: Math.random(),
          }
        );
        break;
      default:
        console.error(error);
    }
    throw error;
  };

  // useEffect(() => {
  //   axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
  //   axios.defaults.params = {};
  //   axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
  //   axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
  // }, []);
};

export default useInterceptor;
