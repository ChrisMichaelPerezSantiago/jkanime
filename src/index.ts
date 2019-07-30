import * as scraper from './api/scraper/scraper';



/*****
 *  ________   __          __  __ _____  _      ______ 
 * |  ____\ \ / /    /\   |  \/  |  __ \| |    |  ____|
 * | |__   \ V /    /  \  | \  / | |__) | |    | |__   
 * |  __|   > <    / /\ \ | |\/| |  ___/| |    |  __|  
 * | |____ / . \  / ____ \| |  | | |    | |____| |____ 
 * |______/_/ \_\/_/    \_\_|  |_|_|    |______|______|
 * 
 * DESCRIPTION: Example of how to get the mp4 of each anime by id
 *                                                   
 ****/

(async() =>{
  const delay = (ms: number) =>{
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const videos = await scraper.lastAnimesAdded()
  .then(async(anime) =>{
    return await anime.slice(0 , 3).map(async data => {
      let chapter = 1;
      return await scraper.getAnimeVideo(data.id , chapter)
        .then(async(video) =>{
          new Promise(function(resolve , reject){
            delay(6000)
            resolve(video)
          }).then(mp4 =>{
            console.log(mp4)
          })
        })
    })
  })
})()
