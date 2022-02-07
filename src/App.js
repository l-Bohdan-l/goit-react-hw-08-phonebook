import './App.scss';
import React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from './components/Header/Header';
import { getCurrentUser } from '../src/redux/auth/auth-operations';
import { PrivateRoute } from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const LoginForm = lazy(() => import('./components/LoginForm/LoginForm'));
const RegisterForm = lazy(() =>
  import('./components/RegisterForm/RegisterForm'),
);
const Contacts = lazy(() => import('./components/Contacts/Contacts'));
const HomePage = lazy(() => import('./components/HomePage/HomePage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="App-header">
          <section>
            <Suspense fallback={<h2>Loading ...</h2>}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <PublicRoute redirectTo={'/'}>
                      <HomePage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PublicRoute redirectTo={'/contacts'} restricted>
                      <LoginForm />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <PublicRoute redirectTo={'/contacts'} restricted>
                      <RegisterForm />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute redirectTo={'/login'}>
                      <Contacts />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
