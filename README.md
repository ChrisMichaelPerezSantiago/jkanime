# **:triangular_flag_on_post: JKANIME** (version 2.0.4)

![node version](https://img.shields.io/badge/node->=10.16.x-brightgreen.svg)
![npm version](https://img.shields.io/badge/npm->=6.9.x-brightgreen.svg)
  <a href="https://github.com/ChrisMichaelPerezSantiago/jkanime/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/ChrisMichaelPerezSantiago/jkanime/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  <img src="https://img.shields.io/badge/now.sh-deployed-brightgreen.svg" alt="">
  <img src="https://badgen.net/badge/icon/now?icon=now&label" alt="">
  <img src="https://img.shields.io/badge/jkanime-API-brightgreen.svg" alt="">
  <img src="https://img.shields.io/github/stars/ChrisMichaelPerezSantiago/jkanime?style=social" alt="">
 
 <a href="https://nodei.co/npm/jkanime/"><img src="https://nodei.co/npm/jkanime.png"></a>


> 💡 The best API to extract data from jkanime, see the latest chapters of the anime of the moment without any restrictions with their respective servers for free. You can see the entire catalog and enjoy each chapter.

---

<img src="assets/jkanime-logo.png">

## :tada: Updates in version v2.0.4 :tada:
- [x] *Now the `getAnimeVideoByServer([id] , [chapter])` function returns a list of the servers available for each episode.*

## **:package: Main tools used**

- [x] axios
- [x] body-parser
- [x] cheerio
- [x] compose-middleware
- [x] cors
- [x] dotenv
- [x] express
- [x] helmet
- [x] morgan
- [x] node-fetch

---

## ⚠️ Goodbye Message |  It remains in effect on 5/9/2020 ⚠️

Hello Partners,

Unfortunately I will be giving up on maintaining the library as I accept a job offer and I will start working this week and time will not allow me to do the maintenance.

I understand that this news for many who use this library would be somewhat sad, but as I said, I have no choice. For me now the most important thing and my focus would be on the job.

I very much appreciate those who supported the API, but this is not the end. For those who still want to continue using the API, I recommend that as soon as possible you fork the repo and locally maintain it, since I will stop maintaining it as soon as I start working this week.

If you have any questions about the code and how to begin to understand it, you can let me know, and I will help you. So that you can continue to maintain it without problem.

I hope you understand!



## :rocket: Custom Jkanime API Link
[Jkanime API](https://jkanime.chrismichael.now.sh/api/v1)


## **:wrench: Developer usage**

### **Set up project**

Before cloning the repo **be sure** you have installed:

- [**NODE**](https://www.google.com/search?q=how+to+install+node) (version >= 10.16.x)
- [**NPM**](https://www.google.com/search?q=how+to+install+npm) (version >= 6.9.x)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder path `git clone https://github.com/ChrisMichaelPerezSantiago/jkanime.git`

---

### **Installation**

In order to install the project and all dependencies, enter in the project folder and run `npm install`

---

### Start Server using node

```bash
npm run start
```

### Start Server using nodemon

```bash
npm run dev
```

### Start and test src/api/api.js file using nodemon

```bash
npm run dev-api
```

### Test the project

```bash
npm test
```

---

## Packages
*These are the packages that I have taken more advantage for the project.*
- `cheerio` Fast, flexible & lean implementation of core jQuery designed specifically for the server.


## Request & Response Examples
*It may be that changes are made in the future in the `parameterization structure.`*

### getAnimeVideoByServer([id] , [chapter])
## 📣Read this please! - Movies📣
*If the **id** is from a movie, you should only pass the following values as an argument in the function; 
`id = kyochuu-rettou-movie` and `chapter = 1` 
The value of the chapter variable must **always be 1***

```javascript
getAnimeVideoByServer(id , chapter)
  .then(doc =>{
    console.log(doc);
});
```


## 📣Read this please! - Series📣
*To get the videos (servers) of each chapter, you only need to use the `getAnimeVideoByServer` function that receives the id of the episode as a parameter and the chapter number.* 

*To verify the id of each episode, look at the `episodeList` property:*

```json
  "episodeList": [
    {
      "episode": 1,
      "id": "psycho-pass-3"
    },
    {
      "episode": 2,
      "id": "psycho-pass-3"
    }
  ]
```

```javascript
getAnimeVideoByServer('psycho-pass-3' , 1)
  .then(doc =>{
    console.log(doc);
});
```

```json
// 20191017204837
// http://localhost:5000/api/v1/video/psycho-pass-3/1

[
  {
    server: 'Desu',
    video: 'https://storage.googleapis.com/marosita.appspot.com/phycopasstres-01.mp4'
  },
  {
    server: 'Okru',
    video: 'https://storage.googleapis.com/marosita.appspot.com/phycopasstres-01.mp4'
  },
  {
    server: 'Xtreme S',
    video: 'https://jkanime.net/stream/jkmedia/50e5306e909355885a922c22ed5de2d4/0f40333b749a2a6d1bc5706accd73329/1/c56a43a4f34c542c7708000aab29c8b1/'
  },
  {
    server: 'MixDrop',
    video: 'https://storage.googleapis.com/marosita.appspot.com/phycopasstres-01.mp4'
  },
  {
    server: 'Verystream',
    video: 'https://storage.googleapis.com/marosita.appspot.com/phycopasstres-01.mp4'
  }
]
```


### latestAnimeAdded()
```json
// 20191127204043
// http://localhost:5000/api/v1/latestAnimes

{
  "animes": [
    {
      "title": "Pokemon (2019)",
      "id": "pokemon-2019",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/pokemon-2019.jpg",
      "type": "Serie",
      "synopsis": "Sinopsis: Nueva temporada de Pokemon, titulada como la serie original de 1997.La nueva serie contara con todas las regiones cubiertas en la franquicia hasta el momento, desde la region de Kanto hasta la region de Galar.",
      "state": "En emision",
      "episodes": "2",
      "episodeList": [
        {
          "episode": 1,
          "id": "pokemon-2019"
        },
        {
          "episode": 2,
          "id": "pokemon-2019"
        }
      ]
    },
    {
      "title": "Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai",
      "id": "seishun-buta-yarou-wa-yumemiru-shoujo-no-yume-wo-minai",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/seishun-buta-yarou-wa-yumemiru-shoujo-no-yume-wo-minai.jpg",
      "type": "Pelicula",
      "synopsis": "Sinopsis: Pelicula de Gekijouban Seishun Buta Yaro wa Yumemiru Shoujo no Yume wo Minai",
      "state": "Concluido",
      "episodes": "1",
      "episodeList": [
        {
          "episode": 1,
          "id": "seishun-buta-yarou-wa-yumemiru-shoujo-no-yume-wo-minai"
        }
      ]
    },
    {
      "title": "Quanzhi Gaoshou zhi Dianfeng Rongyao",
      "id": "quanzhi-gaoshou-zhi-dianfeng-rongyao",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/quanzhi-gaoshou-zhi-dianfeng-rongyao.jpg",
      "type": "Pelicula",
      "synopsis": "Sinopsis: Pelicula The King's Avatar Movie",
      "state": "Concluido",
      "episodes": "1",
      "episodeList": [
        {
          "episode": 1,
          "id": "quanzhi-gaoshou-zhi-dianfeng-rongyao"
        }
      ]
    },
  ]
}
```


### searchAnime([title])
- *For now only returns the titles of the first page of jkanime*

| title       |
| ----------- |
| anime title |

```json
// 20191127204642
// http://localhost:5000/api/v1/search/tokyo%20ghoul

{
  "animes": [
    {
      "title": "Tokyo Ghoul",
      "id": "tokyo-ghoul",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/tokyo-ghoul.jpg",
      "type": "Serie / 12 Eps",
      "synopsis": "En Tokyo ocurren asesinatos misteriosos cometidos por Ghouls, seres desconocidos que comen carne humana, un día Kaneki Ken un joven de 18 años que cursa la Universidad conoce a una chica en un restaurante y la invita a salir, pero luego se da cuenta que ella es un Ghoul y sufre un ataque de parte…",
      "state": "Concluido",
      "episodes": "12",
      "episodeList": [
        {
          "episode": 1,
          "id": "tokyo-ghoul"
        },
        {
          "episode": 2,
          "id": "tokyo-ghoul"
        },
        {
          "episode": 3,
          "id": "tokyo-ghoul"
        },
        {
          "episode": 4,
          "id": "tokyo-ghoul"
        },
        {
          "episode": 5,
          "id": "tokyo-ghoul"
        },
        {
          "episode": 6,
          "id": "tokyo-ghoul"
        },
        {
          "episode": 7,
          "id": "tokyo-ghoul"
        },
        {
          "episode": 8,
          "id": "tokyo-ghoul"
        },
        {
          "episode": 9,
          "id": "tokyo-ghoul"
        },
        {
          "episode": 10,
          "id": "tokyo-ghoul"
        }
      ]
    },
    {
      "title": "Tokyo Ghoul √A",
      "id": "tokyo-ghoul-2",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/tokyo-ghoul-2.jpg",
      "type": "Serie / 12 Eps",
      "synopsis": "Segunda temporada de la serie que tiene lugar en Tokio, donde unos misteriosos demonios están devorando a los humanos. La gente vive atemorizada por estos demonios cuya identidad es todo un misterio. ",
      "state": "Concluido",
      "episodes": "12",
      "episodeList": [
        {
          "episode": 1,
          "id": "tokyo-ghoul-2"
        },
        {
          "episode": 2,
          "id": "tokyo-ghoul-2"
        },
        {
          "episode": 3,
          "id": "tokyo-ghoul-2"
        },
        {
          "episode": 4,
          "id": "tokyo-ghoul-2"
        },
        {
          "episode": 5,
          "id": "tokyo-ghoul-2"
        },
        {
          "episode": 6,
          "id": "tokyo-ghoul-2"
        },
        {
          "episode": 7,
          "id": "tokyo-ghoul-2"
        },
        {
          "episode": 8,
          "id": "tokyo-ghoul-2"
        },
        {
          "episode": 9,
          "id": "tokyo-ghoul-2"
        },
        {
          "episode": 10,
          "id": "tokyo-ghoul-2"
        }
      ]
    },
  ]
}
```

### getAnimesListByLetter([letter] , [page])
- *Returns a list of `20 titles` per N pages*

| a-z         | page            |
| ----------- | --------------- |
| list of animes that the title begin with a letter [a-z]| actual page|
```json
// 20191127205028
// http://localhost:5000/api/v1/letter/a/1

{
  "animes": [
    {
      "title": "Abarenbou Kishi!! Matsutarou",
      "id": "abarenbou-kishi-matsutarou",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/abarenbou-kishi-matsutarou.jpg",
      "type": "Serie",
      "synopsis": "Matsutarou Sakaguchi es un hombre matón gigante con fuerza mucho más allá de la gente común. Él nunca pronunció palabras como \"trabajar duro\", \"luchar\" y \"sueño\" como el típico protagonista del manga shonen. Sin embargo, él es más fuerte que nadie y sin igual en la lucha de sumo. Su mayor…",
      "state": "unknown",
      "episodes": "23",
      "episodeList": null
    },
    {
      "title": "Abenobashi Mahou Shoutengai",
      "id": "abenobashi-mahou-shoutengai",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/abenobashi-mahou-shoutengai.jpg",
      "type": "Serie",
      "synopsis": "Arumi y Sasshi viven su ultimo verano juntos en el distrito comercial Abenobashi, ya que la familia de Arumi se trasladara a otra ciudad. Sin embargo su abuelo sufre un accidente a raiz del cual tanto Arumi como Sasshi son transportados a un Abenobashi alternativo donde todo es posible y lo absurdo…",
      "state": "Concluido",
      "episodes": "13",
      "episodeList": [
        {
          "episode": 1,
          "id": "abenobashi-mahou-shoutengai"
        },
        {
          "episode": 2,
          "id": "abenobashi-mahou-shoutengai"
        },
        {
          "episode": 3,
          "id": "abenobashi-mahou-shoutengai"
        },
        {
          "episode": 4,
          "id": "abenobashi-mahou-shoutengai"
        },
        {
          "episode": 5,
          "id": "abenobashi-mahou-shoutengai"
        },
        {
          "episode": 6,
          "id": "abenobashi-mahou-shoutengai"
        },
        {
          "episode": 7,
          "id": "abenobashi-mahou-shoutengai"
        },
        {
          "episode": 8,
          "id": "abenobashi-mahou-shoutengai"
        },
        {
          "episode": 9,
          "id": "abenobashi-mahou-shoutengai"
        },
        {
          "episode": 10,
          "id": "abenobashi-mahou-shoutengai"
        }
      ]
    },
  ]
}
```

### getAnimesByGender([gender] , [page])
- *Returns a list of `20 titles` per N pages*

| genders           |                      |                    |                   |                     |          page         |
| ------------------|----------------------|--------------------|-------------------|---------------------|-----------------------|
| <li>accion</li><li>artes-marciales</li><li>autos</li><li>aventura</li><li>colegial</li><li>comedia</li><li>cosas-de-la-vida</li><li>dementia</li><li>demonios</li><li>deportes</li>|<li>drama</li><li>ecchi</li><li>fantasia</li><li>harem</li><li>historico</li><li>josei</li><li>juegos</li><li>magia</li><li>mecha</li><li>militar</li>|<li>misterio</li><li>musica</li><li>nios (niño)</li><li>parodia</li><li>policial</li><li>psicologico</li><li>romance</li><li>samurai</li><li>sci-fi</li><li>seinen</li>|<li>shoujo</li><li>shoujo-ai</li><li>shounen</li><li>shounen-ai</li><li>sobrenatural</li><li>space</li><li>super-poderes</li><li>terror</li><li>thriller</li><li>vampiros</li>|<li>yaoi</li><li>yuri</li>|number of pages unknown|


```json
// 20191127205215
// http://localhost:5000/api/v1/genres/accion/1

{
  "animes": [
    {
      "title": "Sekirei",
      "id": "sekirei",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/sekirei.jpg",
      "type": "Serie",
      "synopsis": "Sahashi Minato ha fallado el examen de ingreso a la Universidad dos veces, no es muy popular con las mujeres y esta desempleado. Un día, Minato se encuentra con una chica llamada Musubi, que literalmente le cae del cielo. Minato pronto aprende que él es un Ashikabi, un ser humano con genes especiales…",
      "state": "Concluido",
      "episodes": "12",
      "episodeList": [
        {
          "episode": 1,
          "id": "sekirei"
        },
        {
          "episode": 2,
          "id": "sekirei"
        },
        {
          "episode": 3,
          "id": "sekirei"
        },
        {
          "episode": 4,
          "id": "sekirei"
        },
        {
          "episode": 5,
          "id": "sekirei"
        },
        {
          "episode": 6,
          "id": "sekirei"
        },
        {
          "episode": 7,
          "id": "sekirei"
        },
        {
          "episode": 8,
          "id": "sekirei"
        },
        {
          "episode": 9,
          "id": "sekirei"
        },
        {
          "episode": 10,
          "id": "sekirei"
        }
      ]
    },
    {
      "title": "Demonbane (TV)",
      "id": "demonbane-tv",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/demonbane-tv.jpg",
      "type": "Serie",
      "synopsis": "La historia comienza en un mundo donde la ciencia y la magia han avanzado extraordinariamente. La ciudad de Arkham es una metrópolis prospera por magia altamente avanzada. Sin embargo es amenazada por \"Black Lodge\", una organización criminal controlada por Master Telion, quien es el mago más poderoso…",
      "state": "Concluido",
      "episodes": "12",
      "episodeList": [
        {
          "episode": 1,
          "id": "demonbane-tv"
        },
        {
          "episode": 2,
          "id": "demonbane-tv"
        },
        {
          "episode": 3,
          "id": "demonbane-tv"
        },
        {
          "episode": 4,
          "id": "demonbane-tv"
        },
        {
          "episode": 5,
          "id": "demonbane-tv"
        },
        {
          "episode": 6,
          "id": "demonbane-tv"
        },
        {
          "episode": 7,
          "id": "demonbane-tv"
        },
        {
          "episode": 8,
          "id": "demonbane-tv"
        },
        {
          "episode": 9,
          "id": "demonbane-tv"
        },
        {
          "episode": 10,
          "id": "demonbane-tv"
        }
      ]
    },
  ]
}
```

### getAnimeMovies([page])
- *Returns a list of `10 titles` per N pages*

| movies      | page            |
| ----------- | --------------- |
| list of last titles added.| number of pages unknown |

```json
// 20191127205406
// http://localhost:5000/api/v1/movies/1

{
  "movies": [
    {
      "title": ".hack//G.U. Trilogy",
      "id": "hack-g-u-trilogy",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/hack-g-u-trilogy.jpg",
      "type": "Pelicula",
      "synopsis": "La trama sigue centrándose en Haseo, quien ya se dio cuenta de que \"The World R:2\" no es un juego común y corriente, ya que el fenómeno del \"AIDA\" afecta a los jugadores en la vida real de forma peligrosa. Para salvar a su amiga Shino, Haseo tratara de encontrar alguna respuesta pero solo se topara…",
      "state": "Concluido",
      "episodes": "1",
      "episodeList": [
        {
          "episode": 1,
          "id": "hack-g-u-trilogy"
        }
      ]
    },
    {
      "title": "Aikatsu! Movie",
      "id": "aikatsu-movie",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/aikatsu-movie.jpg",
      "type": "Pelicula",
      "synopsis": "Primera película de Aikatsu!",
      "state": "Concluido",
      "episodes": "1",
      "episodeList": [
        {
          "episode": 1,
          "id": "aikatsu-movie"
        }
      ]
    },
    {
      "title": "Akira",
      "id": "akira",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/akira.jpg",
      "type": "Pelicula",
      "synopsis": "2019: sobre las ruinas de Tokio se alza la metrópolis de Neo-Tokio, una ciudad opresiva e inhumana donde la violencia, el terrorismo y la droga son problemas cotidianos. Las sectas religiosas y los grupos extremistas, aprovechándose de la insatisfacción de los ciudadanos, cultivan el mito de AKIRA,…",
      "state": "Concluido",
      "episodes": "1",
      "episodeList": [
        {
          "episode": 1,
          "id": "akira"
        }
      ]
    },
  ]
}
```

### getAnimeOvas([page])
- *Returns a list of `10 titles` per N pages*

| ovas        | page            |
| ----------- | --------------- |
| list of last titles added.| number of pages unknown |

```json
// 20191127205507
// http://localhost:5000/api/v1/ovas/1

{
  "ovas": [
    {
      "title": "[Locodol] Yatte Mita.: Nagarekawa, Annai Shite Mita.",
      "id": "futsuu-no-joshikousei-ga-locodol-yatte-mita-nagarekawa-annai-shite-mita",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/futsuu-no-joshikousei-ga-locodol-yatte-mita-nagarekawa-annai-shite-mita.jpg",
      "type": "OVA",
      "synopsis": "Episodio especial incluido en el Volumen 1 de Blu-ray/DVD. ",
      "state": "Concluido",
      "episodes": "2",
      "episodeList": [
        {
          "episode": 1,
          "id": "futsuu-no-joshikousei-ga-locodol-yatte-mita-nagarekawa-annai-shite-mita"
        },
        {
          "episode": 2,
          "id": "futsuu-no-joshikousei-ga-locodol-yatte-mita-nagarekawa-annai-shite-mita"
        }
      ]
    },
    {
      "title": "[Locodol]: Christmas Special",
      "id": "futsuu-no-joshikousei-ga-locodol-yatte-mita-christmas-special",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/futsuu-no-joshikousei-ga-locodol-yatte-mita-christmas-special.jpg",
      "type": "OVA",
      "synopsis": "Una nueva Ova de las idols de Futsuu no Joshikousei ga [Locodol] Yatte Mita en Navidad.",
      "state": "Concluido",
      "episodes": "1",
      "episodeList": [
        {
          "episode": 1,
          "id": "futsuu-no-joshikousei-ga-locodol-yatte-mita-christmas-special"
        }
      ]
    },
    {
      "title": "11eyes OVA",
      "id": "11eyes-ova",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/11eyes-ova.jpg",
      "type": "OVA",
      "synopsis": "Ova de 11 eyes",
      "state": "Concluido",
      "episodes": "1",
      "episodeList": [
        {
          "episode": 1,
          "id": "11eyes-ova"
        }
      ]
    },
  ]
}
```

### schedule([day])
| days        | value           |
| ----------- | --------------- |
|  Monday     |    1            |
|  Tuesday    |    2            |
|  Wednesday  |    3            |
|  Thursday   |    4            |
|  Friday     |    5            |
|  Saturday   |    6            |
|  Sunday     |    7            |

```json
// 20191127203818
// http://localhost:5000/api/v1/schedule/1

{
  "schedule": [
    {
      "title": "Stand My Heroes",
      "id": "stand-my-heroes-piece-of-truth",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/stand-my-heroes-piece-of-truth.jpg",
      "type": "Serie",
      "synopsis": "Sinopsis: La heroina es un nuevo oficial que trabaja bajo el Departamento de Control de Narcóticos del Ministerio de Salud, tambien conocido como Matori. Los medicamentos narcoticos no funcionan en ella, y la historia comienza cuando ella ingresa al departamento y comienza a trabajar con otros agentes.",
      "state": "En emision",
      "episodes": "8",
      "episodeList": [
        {
          "episode": 1,
          "id": "stand-my-heroes-piece-of-truth"
        },
        {
          "episode": 2,
          "id": "stand-my-heroes-piece-of-truth"
        },
        {
          "episode": 3,
          "id": "stand-my-heroes-piece-of-truth"
        },
        {
          "episode": 4,
          "id": "stand-my-heroes-piece-of-truth"
        },
        {
          "episode": 5,
          "id": "stand-my-heroes-piece-of-truth"
        },
        {
          "episode": 6,
          "id": "stand-my-heroes-piece-of-truth"
        },
        {
          "episode": 7,
          "id": "stand-my-heroes-piece-of-truth"
        },
        {
          "episode": 8,
          "id": "stand-my-heroes-piece-of-truth"
        }
      ]
    },
    {
      "title": "WATASHI, NOURYOKU WA HEIKINCHI DE TTE ITTA YO NE!",
      "id": "watashi-nouryoku-wa-heikinchi-de-tte-itta-yo-ne",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/watashi-nouryoku-wa-heikinchi-de-tte-itta-yo-ne.jpg",
      "type": "Serie",
      "synopsis": "Sinopsis: Kurihara Misato era un poco mas lista que otras chicas de secundaria y, como resultado, siempre estaba sola y no podia vivir su vida como ella quería. Cuando se reencarno en otro mundo despues de un tragico accidente, queria tener la oportunidad de hacer amigos normales y vivir una vida normal. Entonces le pidio a Dios una cosa ... \"¡Dame habilidades que sean promedio para ese mundo!\" Pero las habilidades que Dios le dio no eran \"promedio\" en absoluto ... Y ahora esta chica, que ha renacido en un mundo donde la magia es real, lucha por encontrar la felicidad simple y ordinaria.",
      "state": "En emision",
      "episodes": "8",
      "episodeList": [
        {
          "episode": 1,
          "id": "watashi-nouryoku-wa-heikinchi-de-tte-itta-yo-ne"
        },
        {
          "episode": 2,
          "id": "watashi-nouryoku-wa-heikinchi-de-tte-itta-yo-ne"
        },
        {
          "episode": 3,
          "id": "watashi-nouryoku-wa-heikinchi-de-tte-itta-yo-ne"
        },
        {
          "episode": 4,
          "id": "watashi-nouryoku-wa-heikinchi-de-tte-itta-yo-ne"
        },
        {
          "episode": 5,
          "id": "watashi-nouryoku-wa-heikinchi-de-tte-itta-yo-ne"
        },
        {
          "episode": 6,
          "id": "watashi-nouryoku-wa-heikinchi-de-tte-itta-yo-ne"
        },
        {
          "episode": 7,
          "id": "watashi-nouryoku-wa-heikinchi-de-tte-itta-yo-ne"
        },
        {
          "episode": 8,
          "id": "watashi-nouryoku-wa-heikinchi-de-tte-itta-yo-ne"
        }
      ]
    },
    {
      "title": "PHANTASY STAR ONLINE 2: EPISODE ORACLE",
      "id": "phantasy-star-online-2-episode-oracle",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/phantasy-star-online-2-episode-oracle.jpg",
      "type": "Serie",
      "synopsis": "Sinopsis: Una adaptacion de anime de televisión del episodio 1-3 de 5 los episodios totales del juego Phantasy Star Online 2. Tambien se creara contenido original de anime.",
      "state": "En emision",
      "episodes": "8",
      "episodeList": [
        {
          "episode": 1,
          "id": "phantasy-star-online-2-episode-oracle"
        },
        {
          "episode": 2,
          "id": "phantasy-star-online-2-episode-oracle"
        },
        {
          "episode": 3,
          "id": "phantasy-star-online-2-episode-oracle"
        },
        {
          "episode": 4,
          "id": "phantasy-star-online-2-episode-oracle"
        },
        {
          "episode": 5,
          "id": "phantasy-star-online-2-episode-oracle"
        },
        {
          "episode": 6,
          "id": "phantasy-star-online-2-episode-oracle"
        },
        {
          "episode": 7,
          "id": "phantasy-star-online-2-episode-oracle"
        },
        {
          "episode": 8,
          "id": "phantasy-star-online-2-episode-oracle"
        }
      ]
    }
  ]
}
```



## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

## 📝 License
This project is [MIT](https://github.com/ChrisMichaelPerezSantiago/jkanime/blob/master/LICENSE) licensed.


### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.


---



### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © 2019 [Chris Michael](http://personal-porfolio.chrismichael.now.sh).
