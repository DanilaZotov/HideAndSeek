import '/css/style.css'
import '/css/allstyles.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import * as React from 'react';
import { Link } from 'react-router-dom';

import kruzhopel from '/public/kruzhopel.svg'

export function Home() {
  
    return (
      <>
      
      <main className="main">
        <section className="intro">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={1}>
              </Grid>
              <Grid item xs={6}>
                <div className='waveheader'>
                  Найти питомца
                </div>
                <div className='search-bar-intro'>
                  <div className='search-icon'>
                    <img src="./microdog.svg" alt="" className='search__pic' />
                  </div>
                  <input type="text" placeholder="Гипоаллергенные собаки"/>
                  <button type="submit"><a>Найти</a></button>
                </div>
                <div className='lookForShelter'>
                  <Link to="./animalList" className='lookForShelter_text'>Ищу приют питомцу</Link>
                  <a href="/"><img src='./arrow.svg' className='arrowRight'></img></a>
                </div>
                <Grid container spacing={1}>
                  <Grid item xs={4}></Grid>
                  <Grid item xs={4}>
                    <div className='linkToAnimalList'>
                      <Link to="./animalList" className='NavLink'>
                        Смотреть объявления
                      </Link>
                      <a href='/' className='arrowImg'>
                        <img src='./arrowDown.svg'></img>
                      </a>
                    </div>
                    
                  </Grid>
                  <Grid item xs={4}>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <div className='girlWithDogImg'>
                  <img src="./introdog.svg" className=''></img>
                </div>
              </Grid>
              <Grid item xs={1}>
              </Grid>
            </Grid>
          </Box>
        </section>
        <section className='quickFilterOnMain'>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={1}>
              </Grid>
              <Grid item xs={10}>
                <div className='wavheader_quickFilter'>
                  В активном поиске нового дома
                </div>
                <Grid container spacing={3}>
                  <Grid item xs={4}><a href="/" className='activeSearchImage_Dog'><img src="sobaka_activesearch.svg" width = "380" height = "380"></img></a></Grid>
                  <Grid item xs={4}><a href="/" className='activeSearchImage_Cat'><img src="koshki_activesearch.svg" width = "380" height = "380"></img></a></Grid>
                  <Grid item xs={4}><a href="/" className='activeSearchImage_Other'><img src="other_activesearch.svg" width = "380" height = "380"></img></a></Grid>
                </Grid>
                <Grid  className='allAnimals' container spacing={3}>
                  <Grid item xs={4}></Grid>
                  <Grid item xs={4}><Link to="./animalList" className='NavLink'><img src="Основная кнопка с иконкой.svg"></img></Link></Grid>
                  <Grid item xs={4}></Grid>
                </Grid>
              </Grid>
              <Grid item xs={1}>
              </Grid>
            </Grid>
          </Box>
        </section>
        <section className='popularArticles'>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={1}>
              </Grid>
              <Grid item xs={6}>
                <div className='popularArticle_topLeft'>
                  <img src='popularArticle_topLeft.svg' className='popularArticle_topLeft_img'></img>
                  <p className='popularArticle_heading'>Как садовая улитка может убить вашу собаку</p>
                  <p className='popularArticle_paragraph'>Некоторые владельцы не видят опасности в том, что их собаки время от времени едят улиток. Дескать, питомец...</p>
                  <div className='LikesContainer'>
                    <p className='popularArticle_likes'>14 <img src='Ei-like.svg' className='like_svg'></img></p>
                  </div>
                  
                </div>
                <div className='popularArticle_bottomLeft'>
                  <img src='popularArticle_bottomLeft.svg' className='popularArticle_bottomLeft_img'></img>
                  <p className='popularArticle_heading'>Как назвать собаку девочку маленькой породы: имена, клички</p>
                  <p className='popularArticle_paragraph'>Если вы определенно решили приобрести маленькую собаку девочку, то наверняка остро стоит...</p>
                  <div className='LikesContainer'>
                    <p className='popularArticle_likes'>14 <img src='Ei-like.svg' className='like_svg'></img></p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
              <div className='popularArticle_right'>
                <img src='popularArticle_right.svg' width={460}  className='popularArticle_right_img'></img>
                <p className='popularArticle_heading'>Как назвать собаку девочку маленькой породы: имена, клички</p>
                <p className='popularArticle_paragraph_right'>Если вы определенно решили приобрести маленькую собаку девочку, то наверняка остро стоит...</p>
                <div className='LikesContainer'>
                  <p className='popularArticle_likes'>14 <img src='Ei-like.svg' className='like_svg'></img></p>
                </div>
              </div>
              
              </Grid>
              <Grid item xs={1}>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid className='allArticlesButton' container spacing={3}>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                <Link to="./Articles" className='NavLink'>
                  <button className='blackActionButtonArticles'>
                        Все статьи
                  </button>
                </Link>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </Box>
        </section>
        <section className='animalFormLoad'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                  <div className='wavheader_animalForm'>
                    Найти своему питомцу новый дом
                  </div>
                  <Grid container spacing={3}>
                    <Grid item xs={5}>
                      <div>
                        <h1 className='animalForm_h1'>Тип животного</h1>
                        <input className='animalForm_inputType' placeholder="Собака"></input>
                      </div>
                      <div>
                        <h1 className='animalForm_h1'>Порода</h1>
                        <input className='animalForm_inputType' placeholder="Корги"></input>
                      </div>
                      <div>
                        <h1 className='animalForm_h1'>Возраст</h1>
                        <select className='animalForm_selectAge' id='yearSelect'>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                        </select>
                        <label className='selectLabel' htmlFor='yearSelect' >Лет</label> 
                        <select className='animalForm_selectAge' id='monthSelect'>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                        </select>
                        <label className='selectLabel' htmlFor='monthSelect'>Месяцев</label>
                      </div>
                      
                    </Grid>
                    <Grid item xs={7}>
                      <div className='animalPhoto'>
                        <h1 className='animalForm_h1'>Фото питомца</h1>
                        <img src='animalPhoto.svg'></img>
                        <img src='animalPhoto.svg'></img>
                        <img src='animalPhoto.svg'></img>
                        <img src='animalPhoto.svg'></img>
                        <img src='animalPhoto.svg'></img>
                        <img src='animalPhoto.svg'></img>
                        <img src='animalPhoto.svg'></img>
                        <img src='animalPhoto.svg'></img>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={1}>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                  <h1 className='animalForm_h1'>Фото питомца</h1>
                  <textarea className='animalForm_inputDescription' placeholder="Кусает ножки стульев, не пьет пиво..."></textarea>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}>
                    <a href='/'>
                      <button className='blackActionButton'>
                        Загрузить объявление
                      </button>
                    </a>
                </Grid>
                <Grid item xs={7}></Grid>
              </Grid>
            </Box>      
        </section>
      </main>
      <footer>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                
              </Grid>
              <Grid item xs={2}>
              <div>
                  lorem
                </div>
                <div>
                  ispum
                </div>
              </Grid>
              <Grid item xs={2}>
              <div>
                  lorem
                </div>
                <div>
                  ispum
                </div>
              </Grid>
              <Grid item xs={2}>
              <div>
                  lorem
                </div>
                <div>
                  ispum
                </div>
              </Grid>
              <Grid item xs={2}>
              <div>
                  lorem
                </div>
                <div>
                  ispum
                </div>
              </Grid>
              <Grid item xs={2}>
              </Grid>
            </Grid>
          </Box>
      </footer>
      </>
    )
  }