 <a href="https://github.com/ChrisMichaelPerezSantiago/jkanime#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/ChrisMichaelPerezSantiago/jkanime/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/ChrisMichaelPerezSantiago/jkanime/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>

# A Custom jkanime API
*This API will give you access to the content of the jkanime page, you can see the entire catalog and enjoy each chapter.*

<img src="assets/jkanime-logo.png">


## Install

```sh
npm install
```

## Usage

*Run API Example*
```sh
npm run start
```

## API Promise List
- searchAnime,
- getAnimeVideo,
- getAnimesListByLetter,
- lastAnimesAdded,
- getAnimeCalender,
- getAnimesByGender,
- getAnimeMovies,
- getAnimeOvas


## Use of each Promise

### Import
```javascript
  import * as scraper from './api/scraper/scraper';
```

### scraper.searchAnime([title])
```json
{
  "animes": [
    [
      {
        "title": "Tokyo Ghoul",
        "id": "tokyo-ghoul",
        "poster": "https://cdn.jkanime.net/assets/images/animes/image/tokyo-ghoul.jpg",
        "type": "Serie / 12 Eps",
        "synopsis": "En Tokyo ocurren asesinatos misteriosos cometidos por Ghouls, seres desconocidos que comen carne humana, un día Kaneki Ken un joven de 18 años que cursa la Universidad conoce a una chica en un restaurante y la invita a salir, pero luego se da cuenta que ella es un Ghoul y sufre un ataque de parte…"
      }
    ],
    .......
  ]
}
```

### scraper.getAnimeVideo([id] , [eps])
```javascript
scraper.getAnimeVideo('tokyo-ghoul' , 1)
  .then(video =>{
    console.log(video)
})
```

### scraper.getAnimesListByLetter([a-z] , [page])
```json
{
  "animes": [
    [
      {
        "title": "Abarenbou Kishi!! Matsutarou",
        "id": "abarenbou-kishi-matsutarou",
        "poster": "https://cdn.jkanime.net/assets/images/animes/image/abarenbou-kishi-matsutarou.jpg",
        "type": "Serie / 23 Eps",
        "synopsis": "Matsutarou Sakaguchi es un hombre matón gigante con fuerza mucho más allá de la gente común. Él nunca pronunció palabras como \"trabajar duro\", \"luchar\" y \"sueño\" como el típico protagonista del manga shonen. Sin embargo, él es más fuerte que nadie y sin igual en la lucha de sumo. Su mayor…"
      }
    ],
    .......
  ]
}
```

### scraper.lastAnimesAdded()
```json
{
  "animes": [
    [
      {
        "title": "Re:Zero kara Hajimeru Isekai Seikatsu: Memory Snow",
        "id": "rezero-kara-hajimeru-isekai-seikatsu-memory-snow",
        "poster": "https://cdn.jkanime.net/assets/images/animes/image/rezero-kara-hajimeru-isekai-seikatsu-memory-snow.jpg",
        "type": "unknown",
        "synopsis": "unknown"
      }
    ], 
    .......
  ]
}
```

### scraper.getAnimesByGender([gender] , [page])
| gender            |                      |                    |                   |                     |          page         |
| ------------------|----------------------|--------------------|-------------------|---------------------|-----------------------|
| <li>accion</li><li>artes-marciales</li><li>autos</li><li>aventura</li><li>colegial</li><li>comedia</li><li>cosas-de-la-vida</li><li>dementia</li><li>demonios</li><li>deportes</li>|<li>drama</li><li>ecchi</li><li>fantasia</li><li>harem</li><li>historico</li><li>josei</li><li>juegos</li><li>magia</li><li>mecha</li><li>militar</li>|<li>misterio</li><li>musica</li><li>nios (niño)</li><li>parodia</li><li>policial</li><li>psicologico</li><li>romance</li><li>samurai</li><li>sci-fi</li><li>seinen</li>|<li>shoujo</li><li>shoujo-ai</li><li>shounen</li><li>shounen-ai</li><li>sobrenatural</li><li>space</li><li>super-poderes</li><li>terror</li><li>thriller</li><li>vampiros</li>|<li>yaoi</li><li>yuri</li>|number of pages unknown|

```json
{
  "animes": [
    {
      "title": "Sekirei",
      "id": "sekirei",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/sekirei.jpg",
      "type": "Serie / 12 Eps",
      "synopsis": "Sahashi Minato ha fallado el examen de ingreso a la Universidad dos veces, no es muy popular con las mujeres y esta desempleado. Un día, Minato se encuentra con una chica llamada Musubi, que literalmente le cae del cielo. Minato pronto aprende que él es un Ashikabi, un ser humano con genes especiales…",
      "state": "Concluido"
    },
    .......
  ]
}
```

### scraper.getAnimeMovies([page])
```json
{
  "movies": [
    {
      "title": ".hack//G.U. Trilogy",
      "id": "hack-g-u-trilogy",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/hack-g-u-trilogy.jpg",
      "type": "Pelicula / 1 Eps",
      "synopsis": "La trama sigue centrándose en Haseo, quien ya se dio cuenta de que \"The World R:2\" no es un juego común y corriente, ya que el fenómeno del \"AIDA\" afecta a los jugadores en la vida real de forma peligrosa. Para salvar a su amiga Shino, Haseo tratara de encontrar alguna respuesta pero solo se topara…",
      "state": "Concluido"
    },
    .......
  ]
}
```

### scraper.getAnimeOvas([page])
```json
{
  "ovas": [
    {
      "title": "[Locodol] Yatte Mita.: Nagarekawa, Annai Shite Mita.",
      "id": "futsuu-no-joshikousei-ga-locodol-yatte-mita-nagarekawa-annai-shite-mita",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/futsuu-no-joshikousei-ga-locodol-yatte-mita-nagarekawa-annai-shite-mita.jpg",
      "type": "OVA / 2 Eps",
      "synopsis": "Episodio especial incluido en el Volumen 1 de Blu-ray/DVD. ",
      "state": "Concluido"
    },
    .......
  ]
}
```

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/ChrisMichaelPerezSantiago/jkanime/blob/master/LICENSE) file for details.



## Where to get Help
If you have any questions about the template, contact me at email chrisperezsantiago1@gmail.com


I'll be glad you give this template a good use! 💖
