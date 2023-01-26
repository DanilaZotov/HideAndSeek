import '/css/style.css'
import '/css/allstyles.css'
import '/css/animalListStyle.css'
import '/css/ArticlesStyle.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import * as React from 'react';

export function Articles() {
    
    return (
    <>
    <main>
        <section className='filterArticles'>
        <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <div className='filter_waveheader'>Фильтры статей</div>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    <select className='filterSelect'>
                                        <option value="" disabled selected>Кот</option>
                                    </select>
                                    <select className='filterSelect'>
                                        <option value="" disabled selected>Порода</option>
                                    </select>
                                    <input type="checkbox" id="allergic" className='filterCheckbox'></input>
                                    <label htmlFor='allergic' className='filterLabel'>Для начинающих</label>
                                </Grid>
                                <Grid item xs={4}>
                                    <select className='filterSelect'>
                                        <option value="" disabled selected>Тип статьи</option>
                                    </select>
                                    <select className='filterSelect'>
                                        <option value="" disabled selected>Автор</option>
                                    </select>
                                    <input type="checkbox" id="begginers" className='filterCheckbox'></input>
                                    <label htmlFor='begginers' className='filterLabel'>Лечение</label>
                                </Grid>
                                <Grid item xs={4}>
                                    <select className='filterSelect'>
                                        <option value="" disabled selected>Корм</option>
                                    </select>
                                    <select className='filterAge1'>
                                        <option value="" disabled selected>От даты</option>
                                    </select>
                                    <select className='filterAge2'>
                                        <option value="" disabled selected>До</option>
                                    </select>
                                    <a href=''><img src='./showArticlesButton.svg' width={328}></img></a>
                                </Grid>
                            </Grid>    
                        </Box> 
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>    
            </Box>   
        </section>
        <section className='ArticlesList'>
            <h1 className='popularHeader'>Популярное</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                <Grid item xs={1}>
                </Grid>
                
                <Grid item xs={6}>
                    <Link to={ "./AnimalArticle"} className='articleLink NavLink'>
                        <div className='popularArticle_topLeft'>
                        <img src='popularArticle_topLeft.svg' className='popularArticle_topLeft_img'></img>
                        <p className='popularArticle_heading'>Как садовая улитка может убить вашу собаку</p>
                        <p className='popularArticle_paragraph'>Некоторые владельцы не видят опасности в том, что их собаки время от времени едят улиток. Дескать, питомец...</p>
                        <div>
                            <p className='popularArticle_likes'>39 <img src='Ei-like.svg' className='like_svg'></img></p>
                        </div>
                        </div>
                    </Link>
                    <a href='/' className='articleLink'>
                        <div className='popularArticle_bottomLeft'>
                        <img src='popularArticle_bottomLeft.svg' className='popularArticle_bottomLeft_img'></img>
                        <p className='popularArticle_heading'>Как назвать собаку девочку маленькой породы: имена, клички</p>
                        <p className='popularArticle_paragraph'>Если вы определенно решили приобрести маленькую собаку девочку, то наверняка остро стоит...</p>
                        <div>
                            <p className='popularArticle_likes'>53 <img src='Ei-like.svg' className='like_svg'></img></p>
                        </div>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={4}>
                <a href='/' className='articleLink'>
                    <div className='popularArticle_right'>
                        <img src='popularArticle_right.svg' width={460}  className='popularArticle_right_img'></img>
                        <p className='popularArticle_heading'>Как назвать собаку девочку маленькой породы: имена, клички</p>
                        <p className='popularArticle_paragraph_right'>Если вы определенно решили приобрести маленькую собаку девочку, то наверняка остро стоит...</p>
                        <div>
                        <p className='popularArticle_likes'>7 <img src='Ei-like.svg' className='like_svg'></img></p>
                        </div>
                    </div>
                </a>
                </Grid>
                <Grid item xs={1}>
                </Grid>
                </Grid>
            </Box>
          <h1 className='popularHeader'>Все про кошек</h1>
          <Box sx={{ flexgrow: 1}}>
            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                    <a href='/' className='articleLink'>
                        <div className='verticalArticle'>
                        <img src='catArticle1.svg' width={312}  className='popularArticle_right_img'></img>
                        <p className='popularArticle_heading'>Опасны ли кошки для человека</p>
                        <p className='popularArticle_paragraph_right'>Многие уверены, что кошек не стоит заводить, так как они могут причинить вред здоровью.</p>
                        <div>
                        <p className='popularArticle_likes'>21 <img src='Ei-like.svg' className='like_svg'></img></p>
                        </div>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={3}>
                    <a href='/' className='articleLink'>
                        <div className='verticalArticle'>
                        <img src='catArticle2.svg' width={312}  className='popularArticle_right_img'></img>
                        <p className='popularArticle_heading'>Почему кот метит территорию</p>
                        <p className='popularArticle_paragraph_right'>В этой статье мы будем разбираться, почему кошка метит территорию, а также выясним</p>
                        <div>
                        <p className='popularArticle_likes'>35 <img src='Ei-like.svg' className='like_svg'></img></p>
                        </div>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={3}>
                    <a href='/' className='articleLink'>
                        <div className='verticalArticle'>
                        <img src='catArticle3.svg' width={312}  className='popularArticle_right_img'></img>
                        <p className='popularArticle_heading'>Почему кошки любят запах хлорки</p>
                        <p className='popularArticle_paragraph_right'>Попробуем разобраться, почему кошки любят запах хлорки, чем же так</p>
                        <div>
                        <p className='popularArticle_likes'>14 <img src='Ei-like.svg' className='like_svg'></img></p>
                        </div>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
          </Box>
          <h1 className='popularHeader'>Все про собак</h1>
          <Box sx={{ flexgrow: 1}}>
            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                    <a href='/' className='articleLink'>
                        <div className='verticalArticle'>
                        <img src='dogArticle1.svg' width={312}  className='popularArticle_right_img'></img>
                        <p className='popularArticle_heading'>Гид по ответственному пристройству питомцев</p>
                        <p className='popularArticle_paragraph_right'>Рассказываем, что делать, если приходится расстаться с четвероногим другом.</p>
                        <div>
                        <p className='popularArticle_likes'>45 <img src='Ei-like.svg' className='like_svg'></img></p>
                        </div>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={3}>
                    <a href='/' className='articleLink'>
                        <div className='verticalArticle'>
                        <img src='dogArticle2.svg' width={312}  className='popularArticle_right_img'></img>
                        <p className='popularArticle_heading'>Стрижка только началась: пять вопросов грумеру</p>
                        <p className='popularArticle_paragraph_right'>Как распознать в мастере-грумере настоящего профи.</p>
                        <div>
                        <p className='popularArticle_likes'>22 <img src='Ei-like.svg' className='like_svg'></img></p>
                        </div>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={3}>
                    <a href='/' className='articleLink'>
                        <div className='verticalArticle'>
                        <img src='dogArticle3.svg' width={312}  className='popularArticle_right_img'></img>
                        <p className='popularArticle_heading'>Собачий холод: нужна ли одежда питомцам</p>
                        <p className='popularArticle_paragraph_right'>Как одеть собаку по моде и по погоде.</p>
                        <div>
                        <p className='popularArticle_likes'>11 <img src='Ei-like.svg' className='like_svg'></img></p>
                        </div>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
          </Box>
          <h1 className='popularHeader'>Все про экзотику</h1>
          <Box sx={{ flexgrow: 1}}>
            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                    <a href='/' className='articleLink'>
                        <div className='verticalArticle'>
                        <img src='otherArticle1.svg' width={312}  className='popularArticle_right_img'></img>
                        <p className='popularArticle_heading'>Фантастические твари: 5 мифов про экзотических животных</p>
                        <p className='popularArticle_paragraph_right'>Текст для тех, кто скучает с котом и мечтает о варане, белке или лемуре.</p>
                        <div>
                        <p className='popularArticle_likes'>45 <img src='Ei-like.svg' className='like_svg'></img></p>
                        </div>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={3}>
                    <a href='/' className='articleLink'>
                        <div className='verticalArticle'>
                        <img src='otherArticle2.svg' width={312}  className='popularArticle_right_img'></img>
                        <p className='popularArticle_heading'>«Мраморный хорек» практически полностью исчез из ...</p>
                        <p className='popularArticle_paragraph_right'>Перевязка занесена в Международную Красную книгу как животное...</p>
                        <div>
                        <p className='popularArticle_likes'>22 <img src='Ei-like.svg' className='like_svg'></img></p>
                        </div>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={3}>
                    <a href='/' className='articleLink'>
                        <div className='verticalArticle'>
                        <img src='otherArticle3.svg' width={312}  className='popularArticle_right_img'></img>
                        <p className='popularArticle_heading'>Как содержать экзотическую лисичку фенека?</p>
                        <p className='popularArticle_paragraph_right'>Дело в том, что фенек — это пустынное африканское животное, но, несмотря....</p>
                        <div>
                        <p className='popularArticle_likes'>11 <img src='Ei-like.svg' className='like_svg'></img></p>
                        </div>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={1}></Grid>
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