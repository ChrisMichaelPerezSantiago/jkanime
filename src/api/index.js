const express = require('express');
const routes = require('./routes/index');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'jkanime API - 👋🌎🌍🌏',
    author: 'Chris Michael',
    entries: [
      {
        'latestAnimeAdded': '/api/v1/latestAnimes',
        'getAnimeOvas': '/api/v1/ovas/[:page]',
        'getAnimeMovies': '/api/v1/movies/[:page]',
        'getAnimesByGender': '/api/v1/genres/[:genre]/[:page]',
        'getAnimesListByLetter': '/api/v1/letter/[:letter]/[:page]',
        'searchAnime': '/api/v1/search/[:title]',
        'getAnimeVideoByServer': '/api/v1/video/[:id]/[:chapter]',
        'schedule': '/api/v1/schedule/[:day]'
      }
    ]  
  });
});

router.use('/', routes);

module.exports = router;