import '/css/style.css'
import * as React from 'react';

function App() {
  return (
    <>
    <header className='header'>
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
            <button type="submit"><a>Найти</a></button>
          </div>
          <a className='create-animal-link'>
            <img src="./createanimal.svg" alt="" className='' />
          </a>
          <a className='articles-link-pic'>
            <img src="./articles.svg" alt="" className='' />
          </a>
          <a className='messages-link-pic'>
            <img src="./message.svg" alt="" className='' />
          </a>
          <a className='profile-link-pic'>
            <img src="./profile.svg" alt="" className='' />
          </a>
        </div>
      </div>
    </header>

    <main className="main">
      <section className="intro">
        <div className='waveheader'>
          
        </div>
      </section>
    </main>
    </>
  )
}

export default App
