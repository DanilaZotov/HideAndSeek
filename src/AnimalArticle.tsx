import '/css/style.css'
import '/css/allstyles.css'
import '/css/animalListStyle.css'
import '/css/ArticlesStyle.css'
import '/css/AnimalArticle.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import * as React from 'react';

import rolledCat from '/public/articleBigCat.svg';
import doctorDog from '/public/articleBigPhoto.svg';
import catArticle1 from '/public/catArticle1.svg';
import like from '/public/Ei-like.svg';

export function AnimalArticle() {

    return (
        <>
        <div className='article_wrapper'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={6}>
                        <div className='wavheader_quickFilter'>
                            Название статьи
                        </div>
                        <div className='content_list'>
                            <h1 className='popularArticle_heading'>Содержание</h1>
                            <ol>
                                <li>1. Первая глава</li>
                                <li>2. Вторая глава</li>
                                <li>3. Третья глава</li>
                                <li>4. Четвертая глава</li>
                            </ol>
                        </div>
                        <div className='likesDislikes'>
                            <div className='likes'>
                                Лайки 14
                            </div>
                            <div className='likes'>
                                Дизлайки 26
                            </div>
                        </div>
                        <div className='filter_waveheader'>
                            Название главы
                        </div>
                        <p className='popularArticle_paragraph'>
                        Иногда питомцы действительно сбивают нас с толку своим странным кошачьим поведением! 
                        От топтания мягких одеял до сбрасывания вещей со столов и царапанья нашей совершенно новой мебели, 
                        они, как правило, вызывают равное количество «ооо!» и «о нет!»
                        </p>
                        <br></br>
                        <p className='popularArticle_paragraph'>
                        Это руководство по поведению кошек разбирает все вышеперечисленное и многое другое, так что советуем продолжать читать. 
                        Вы также захотите узнать о том, почему кошки любят коробки, почему кошки ненавидят воду и почему они мурлыкают. 
                        </p>
                        <br></br>
                        <p className='popularArticle_paragraph'>
                            Кроме того, это руководство по языку тела кошки поможет узнать, что ваш пушистик пытается вам сказать.
                        </p>
                        <img src={doctorDog}></img>
                        <div className='filter_waveheader'>
                            Название главы
                        </div>
                        <p className='popularArticle_paragraph'>
                        Иногда питомцы действительно сбивают нас с толку своим странным кошачьим поведением! 
                        От топтания мягких одеял до сбрасывания вещей со столов и царапанья нашей совершенно новой мебели, 
                        они, как правило, вызывают равное количество «ооо!» и «о нет!»
                        </p>
                        <br></br>
                        <p className='popularArticle_paragraph'>
                        Это руководство по поведению кошек разбирает все вышеперечисленное и многое другое, так что советуем продолжать читать. 
                        Вы также захотите узнать о том, почему кошки любят коробки, почему кошки ненавидят воду и почему они мурлыкают. 
                        </p>
                        <br></br>
                        <p className='popularArticle_paragraph'>
                            Кроме того, это руководство по языку тела кошки поможет узнать, что ваш пушистик пытается вам сказать.
                        </p>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={rolledCat}></img>
                        
                        <div className='otherArticle'>
                            <h1 className='popularArticle_heading'>Похожие статьи</h1> 
                            <a href='/' className='articleLink'>
                                <div className='verticalArticle'>
                                <img src={catArticle1} width={312}  className='popularArticle_right_img'></img>
                                <p className='popularArticle_heading'>Опасны ли кошки для человека</p>
                                <p className='popularArticle_paragraph_right'>Многие уверены, что кошек не стоит заводить, так как они могут причинить вред здоровью.</p>
                                <div>
                                <p className='popularArticle_likes'>21 <img src={like} className='like_svg'></img></p>
                                </div>
                                </div>
                            </a>
                        </div>
                        <div className='otherArticle'>
                            <a href='/' className='articleLink'>
                                <div className='verticalArticle'>
                                <img src={catArticle1} width={312}  className='popularArticle_right_img'></img>
                                <p className='popularArticle_heading'>Опасны ли кошки для человека</p>
                                <p className='popularArticle_paragraph_right'>Многие уверены, что кошек не стоит заводить, так как они могут причинить вред здоровью.</p>
                                <div>
                                <p className='popularArticle_likes'>21 <img src={like} className='like_svg'></img></p>
                                </div>
                                </div>
                            </a>
                        </div>
                    </Grid>      
                    <Grid item xs={1}></Grid>
                </Grid>    
            </Box>        
        </div>
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