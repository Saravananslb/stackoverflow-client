import React from 'react';
import { Home } from './pages/home/Home';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import './App.css';
// import { Restaurant } from './pages/restaurant/Restaurant';
// import { Search } from './pages/search/Search';
import { Questions } from './pages/questions/Questions';
import { SignIn } from './pages/signin/SignIn';
import { SignUp } from './pages/signup/SignUp';
import { Reducer } from './reducer/Reducer';
import { Context } from './Context';
import { useState } from 'react';
import { useReducer } from 'react';
import { Header } from './components/header/Header';
// import { SideSearchBar } from './components/sideSearchBar/SideSearchBar';
import { cookie, validateUser } from './apiCall';
import { useContext } from 'react';
import { AUTHENTICATE } from './actions/ActionType';
import { useEffect } from 'react';
import { QuestionsAsk } from './pages/questionsAsk/QuestionsAsk';

function App() {
  const [initialState, setInitialState] = useState({
    signInUpEnabled: false,
    signInUpAction: 'LOGIN',
    searchEnabled: false,
    isAuthenticated: false
  });

  useEffect(() => {
    validateAuth();
  }, [])

  const validateAuth = () => {
    validateUser().then(res => {
      if (res.data && res.data.status) {
        cookie.set('Authorization', res.data.authToken);
        dispatch({
          type: AUTHENTICATE,
          payload: {
            isAuthenticated: true
          }
        })
      }
      // else {
      //   cookie.remove('Authorization');
      // }
    })
  }

  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={{state, dispatch}}>
    <div className='App'>
      
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/users/signup' element={<SignUp />} ></Route>
        <Route path='/users/login' element={<SignIn />} ></Route>
        <Route path='/questions/:questionId/:questionText' element={<Questions />} ></Route>
        <Route path='/questions/ask' element={<QuestionsAsk />} ></Route>
        {/* <Route path='/restaurants/:restaurantId' element={<RestaurantMenu />} ></Route> */}
      </Routes>
    </BrowserRouter>
    </div>
    </Context.Provider>
  );
}

export default App;
