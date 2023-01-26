import '/css/style.css'
import '/css/allstyles.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Home }  from "./Home";
import { AnimalList }  from "./animalList";
import { Articles } from './Articles';
import { AnimalArticle } from './AnimalArticle';
import { NotFound } from './NotFound';
import { AnimalDescription } from './AnimalDescription';
import { AccountPage } from './AccountPage';


function App() {
  
  return (
    <>
    <header className='header header-background'>
        <div className="wrapper">
          <div className="header__wrapper">
            <div className="header__logo">
              <a href="/" className="header__logo-link">
                <img src="./logo.svg" alt="" className='header__logo-pic' />
              </a>
            </div>
            <div className='search-bar'>
              <div className='search-icon'>
                <img src="./microdog.svg" alt="" className='search__pic' />
                </div>
              <input type="text" placeholder="Гипоаллергенные собаки"/>
              <button type="submit"><Link to="./animalList" className='NavLink'>Найти</Link></button>
            </div>
            <a href="/" className='create-animal-link'>
              <img src="./createanimal.svg" alt="" className='' />
            </a>
            <Link to={"./Articles"} className='articles-link-pic'>
              <img src="./articles.svg" alt="" className='' />
            </Link>
            <a href="/" className='messages-link-pic'>
              <img src="./message.svg" alt="" className='' />
            </a>
            <Link to={"./AccountPage"} className='profile-link-pic'>
              <img src="./profile.svg" alt="" className='' />
            </Link>
          </div>
        </div>
      </header>
  

    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/animalList" element = {<AnimalList />} />
      <Route path="/animalList/AnimalDescription" element = {<AnimalDescription />} />
      <Route path="/Articles" element = {<Articles />} />
      <Route path="Articles/AnimalArticle" element = {<AnimalArticle />} />
      <Route path="AccountPage" element = {<AccountPage />} />
      <Route path="*" element = {<NotFound />} />
    </Routes>
    </>
    
  )
}

export default App
