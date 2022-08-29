import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import useConfig from './config';
import useRoutes from './routes';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  // Hooks
  // const { useApp } = useScreenHooks();
  // const { handleOnAction, handleOnActive, handleOnIdle } = useApp();

  // Config
  const { useStoreConfig, useInterceptor } = useConfig();
  const { store, persistor } = useStoreConfig();
  useInterceptor(store);

  // Routes
  const { Routing } = useRoutes();

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ToastContainer
            className={'rounded'}
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            limit={3}
            pauseOnHover
          />
          <Router>
            <Routing />
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
