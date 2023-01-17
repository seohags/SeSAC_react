import './App.css';
import logo from './logo.svg'
import InlineCss from './components/InlineCss';
import TestCss from './components/TestCss';
import TestStyled from './components/TestStyled';
import UseEffectFetch from './components/UseEffectFetch';
import StyledApp from './components/StyledApp';
import Image from './components/Image';
import FancyBorder from './components/FancyBorder';
import Profile from './components/Profile';
import Board from './components/Board';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';

function App() {
  return (
  <div className="App">
    {/* <Routes>
    <Route path='/' element={<Header/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/board' element={<Board/>} />
    <Route path='board/:boardId' element={<BoardDetail/>} />  
    <Route path='/*' element={<NotFound/>}/>
    </Routes> */}
    <StyledApp/>
  </div>
  );
  }
  export default App;