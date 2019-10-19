const cheerio = require('cheerio');
const fetch = require('node-fetch');
const axios = require('axios');
const { parseTable } = require('@joshuaavalon/cheerio-table-parser');
const {url, searchUrl, searchUrlLetter, genderUrl, moviesUrl, ovasUrl , calenderUrl} = require('./urls');


/****
 * @author w3cj
 * @type contributor
 * @description The getAnimeVideo function with cheerio was reimplemented
 ***/
function btoa(str) {
    var buffer;
    if (str instanceof Buffer) {
        buffer = str;
    }
    else {
        buffer = Buffer.from(str.toString(), 'binary');
    }
    return buffer.toString('base64');
}

// The script we execute below depends on the btoa function to exist
global.btoa = btoa;


async function getAnimeVideoByServer(id, chapter, serverNumber) {
  const { data } = await axios.get(`${url}/${id}/${chapter}/#option${serverNumber}`);
  const $ = cheerio.load(data);
  const scripts = $('script');
  for(let i = 0; i < scripts.length; i++){
    const $script = $(scripts[i]);
    const contents = $script.html();
    // There is a script on the page that will load the iframe dynamically
    // Here we find the script and then request the iframe URL directly
    if ((contents || '').includes('var video = [];')) {
        const videoPageURL = contents.split(`video[${serverNumber}] = \'<iframe class="player_conte" src="`)[1].split('"')[0];
        return getVideoURL(videoPageURL);
    }
  }
}


async function getVideoURL(url) {
  // This requests the underlying iframe page
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const video = $('video');
  if(video.length){
    // Sometimes the video is directly embedded
    const src = $(video).find('source').attr('src');
    return src || `Video not available on the server`
  }
  else{
    // If the video is not embedded, there is obfuscated code that will create a video element
    // Here we run the code to get the underlying video url
    const scripts = $('script');
    // The obfuscated code uses a variable called l which is the window / global object
    const l = global;
    // The obfuscated code uses a variable called ll which is String
    const ll = String;
    const $script2 = $(scripts[1]).html();
    // Kind of dangerous, but the code is very obfuscated so its hard to tell how it decrypts the URL
    eval($script2);
    // The code above sets a variable called ss that is the mp4 URL
    return l.ss || `Video not available on the server`
  }
}



const latestAnimeAdded = async() =>{
  const res = await fetch(`${url}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];
  $('.portada-box').each(function (index, element) {
    const $element = $(element);
    const title = $element.find('h2.portada-title a').attr('title');
    const id = $element.find('h2.portada-title a').attr('href').split('/')[3];
    const poster = $element.find('a').children('img').attr('src');
    promises.push(animeContentHandler(id).then(extra => ({
      title: title,
      id: id,
      poster: poster,
      type: extra[0] ? extra[0].type : 'unknown',
      synopsis: extra[0] ? extra[0].sinopsis : 'unknown',
      state: extra[0] ? extra[0].state : 'unknown',
      episodes: extra[0] ? extra[0].episodes : 'unknown'
    })))
  });
  return await Promise.all(promises);
};

const getAnimeOvas = async (page) => {
  const res = await fetch(`${ovasUrl}/${page}`);
  const body = await res.text();
  const promises = [];
  var $ = cheerio.load(body);
  $('.portada-box').each(function (index, element) {
    const $element = $(element);
    const title = $element.find('h2.portada-title a').attr('title');
    const synopsis = $element.find('div #ainfo p').text();
    const type = $element.find('span.eps-num').first().text().split('/')[0].trim();
    const id = $element.find('a.let-link').attr('href').split('/')[3];
    const poster = $element.find('a').children('img').attr('src');
    promises.push(animeContentHandler(id).then(extra => ({
      title: title,
      id: id,
      poster: poster,
      type: type,
      synopsis: synopsis,
      state: extra[0] ? extra[0].state : 'unknown',
      episodes: extra[0] ? extra[0].episodes : 'unknown'
    })))
  });
  return await Promise.all(promises)
};

const getAnimeMovies = async (page) => {
  const res = await fetch(`${moviesUrl}/${page}`);
  const body = await res.text();
  const promises = [];
  var $ = cheerio.load(body);
  $('.portada-box').each(function (index, element) {
    const $element = $(element);
    const title = $element.find('h2.portada-title a').attr('title');
    const synopsis = $element.find('div #ainfo p').text();
    const type = $element.find('span.eps-num').first().text().split('/')[0].trim();
    const id = $element.find('a.let-link').attr('href').split('/')[3];
    const poster = $element.find('a').children('img').attr('src');
    promises.push(animeContentHandler(id).then(extra => ({
      title: title,
      id: id,
      poster: poster,
      type: type,
      synopsis: synopsis,
      state: extra[0] ? extra[0].state : 'unknown',
      episodes: extra[0] ? extra[0].episodes : 'unknown'
    })))
  });
  return await Promise.all(promises)
};

const getAnimesByGender = async (gender , page) => {
  const res = await fetch(`${genderUrl}${gender}/${page}`);
  const body = await res.text();
  const promises = [];
  var $ = cheerio.load(body);
  $('.portada-box').each(function (index, element) {
    const $element = $(element);
    const title = $element.find('h2.portada-title a').attr('title');
    const synopsis = $element.find('div #ainfo p').text();
    const type = $element.find('span.eps-num').first().text().split('/')[0].trim();
    const episodes = $element.find('span.eps-num').first().text().replace(/[^0-9]/g, "");
    const id = $element.find('a.let-link').attr('href').split('/')[3];
    const poster = $element.find('a').children('img').attr('src');
    
    promises.push(animeContentHandler(id).then(extra => ({
      title: title,
      id: id,
      poster: poster,
      type: type,
      synopsis: synopsis,
      state: extra[0] ? extra[0].state : 'unknown',
      episodes: episodes || 'unknown'
    })))
  });
  return await Promise.all(promises);
};

const getAnimesListByLetter = async (letter , page) => {
  const res = await fetch(`${searchUrlLetter}${letter}/${page}`);
  const body = await res.text();
  const promises = [];
  const $ = cheerio.load(body);
  $('.portada-box').each(function (index, element) {
    const $element = $(element);
    const title = $element.find('h2.portada-title a').attr('title');
    const synopsis = $element.find('div #ainfo p').text();
    const type = $element.find('span.eps-num').first().text().split('/')[0].trim();
    const episodes = $element.find('span.eps-num').first().text().replace(/[^0-9]/g, "");
    const id = $element.find('a.let-link').attr('href').split('/')[3];
    const poster = $element.find('a').children('img').attr('src');
    promises.push(animeContentHandler(id).then(extra => ({
      title: title,
      id: id,
      poster: poster,
      type: type,
      synopsis: synopsis,
      state: extra[0] ? extra[0].state : 'unknown',
      episodes: episodes || 'unknown'
    })))
  });
  return await Promise.all(promises)
};

const searchAnime = async (query) => {
  const res = await fetch(`${searchUrl}${query}/1/`);
  const body = await res.text();
  const promises = [];
  const $ = cheerio.load(body);
  $('.portada-box').each(function (index, element) {
    const $element = $(element);
    const title = $element.find('h2.portada-title a').attr('title');
    const synopsis = $element.find('div #ainfo p').text();
    const type = $element.find('span.eps-num').text();
    const episodes = $element.find('span.eps-num').first().text().replace(/[^0-9]/g, "");
    const id = $element.find('a.let-link').attr('href').split('/')[3];
    const poster = $element.find('a').children('img').attr('src');
    promises.push(animeContentHandler(id).then(extra => ({
      title: title,
      id: id,
      poster: poster,
      type: type,
      synopsis: synopsis,
      state: extra[0] ? extra[0].state : 'unknown',
      episodes: episodes || 'unknown'
    })))
  });
  return await Promise.all(promises)
};

const animeContentHandler = async (id) => {
  const res = await fetch(`${url}/${id}`);
  const body = await res.text();
  const extra = [];
  const $ = cheerio.load(body);
  const episodes_aired = $('div#container div.left-container div.navigation a').text().split('-')[1];
  $('div#container div.serie-info').each(async(index, element) => {
    const $element = $(element);
    const sinopsis = $element.find('div.sinopsis-box p.pc').text().trim();
    
    const type = $element.find('div.info-content div.info-field span.info-value').first().text().split('\n')[0].trim();
    const state = $element.find('div.info-content div.info-field span.info-value b').last().text();
    
    const content = {
      type: type,
      sinopsis: sinopsis,
      state: state,
      episodes: episodes_aired
    }
    extra.push(content);
  })
  return await Promise.all(extra);
};


module.exports = {
  latestAnimeAdded,
  getAnimeOvas,
  getAnimeMovies,
  getAnimesByGender,
  getAnimesListByLetter,
  searchAnime,
  getAnimeVideoByServer
}