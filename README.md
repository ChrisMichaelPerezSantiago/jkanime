# **:triangular_flag_on_post: JKANIME** (version 2.0.0)

![node version](https://img.shields.io/badge/node->=10.16.x-brightgreen.svg)
![npm version](https://img.shields.io/badge/npm->=6.9.x-brightgreen.svg)

> This API will give you access to the content of the jkanime page, you can see the entire catalog and enjoy each chapter.

---

<img src="assets/jkanime-logo.png">

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

### getAnimeVideoByServer(id , chapter , serverNumber)
## 📣Read this please!📣
*If the **id** is from a movie, you should only pass the following values as an argument in the function; `chapter = 1`, `serverNumber = 1`*

```json
// 20191017204837
// http://localhost:5000/api/v1/video/boruto-naruto-next-generations/1/1

{
  "video": "https://jkanime.net/stream/jkmedia/04bcce3274dfe2351ac5ebbf27031a56/fa0b00de20f2ba354db895a1e954c6c4/1/c56a43a4f34c542c7708000aab29c8b1/"
}
```

| id          | chapter         |   server number |
| ----------- | --------------- | ----------------
| anime title | episode number  |    [1 .. 7]     |


| server         | number    |  
| -------------- | -----------| 
| Desu           |   1        | 
| Xtreme S       |   2        |
| MixDrop        |   3        |
| Okru           |   4        |
| Openload       |   5        |
| RapidVideo     |   6        |
| Verystream     |   7        |


### searchAnime(title)
- *For now only returns the titles of the first page of jkanime*

| title       |
| ----------- |
| anime title |

```json
// 20191017205421
// http://localhost:5000/api/v1/search/tokyo

{
  "animes": [
    {
      "title": "Tokyo Ghoul",
      "id": "tokyo-ghoul",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/tokyo-ghoul.jpg",
      "type": "Serie / 12 Eps",
      "synopsis": "En Tokyo ocurren asesinatos misteriosos cometidos por Ghouls, seres desconocidos que comen carne humana, un día Kaneki Ken un joven de 18 años que cursa la Universidad conoce a una chica en un restaurante y la invita a salir, pero luego se da cuenta que ella es un Ghoul y sufre un ataque de parte…",
      "state": "Concluido",
      "episodes": "12"
    },
  ]
}
```

### getAnimesListByLetter(letter , page)
- *Returns a list of `20 titles` per N pages*

| a-z         | page            |
| ----------- | --------------- |
| list of animes that the title begin with a letter [a-z]| actual page|

```json
// 20191017205730
// http://localhost:5000/api/v1/letter/a/1

{
  "animes": [
    {
      "title": "Abarenbou Kishi!! Matsutarou",
      "id": "abarenbou-kishi-matsutarou",
      "poster": "https://cdn.jkanime.net/assets/images/animes/image/abarenbou-kishi-matsutarou.jpg",
      "type": "Serie",
      "synopsis": "Matsutarou Sakaguchi es un hombre matón gigante con fuerza mucho más allá de la gente común. Él nunca pronunció palabras como \"trabajar duro\", \"luchar\" y \"sueño\" como el típico protagonista del manga shonen. Sin embargo, él es más fuerte que nadie y sin igual en la lucha de sumo. Su mayor…",
      "state": "Concluido",
      "episodes": "23"
    },
  ]
}
```

### getAnimesByGender(gender , page)
- *Returns a list of `20 titles` per N pages*

| genders           |                      |                    |                   |                     |          page         |
| ------------------|----------------------|--------------------|-------------------|---------------------|-----------------------|
| <li>accion</li><li>artes-marciales</li><li>autos</li><li>aventura</li><li>colegial</li><li>comedia</li><li>cosas-de-la-vida</li><li>dementia</li><li>demonios</li><li>deportes</li>|<li>drama</li><li>ecchi</li><li>fantasia</li><li>harem</li><li>historico</li><li>josei</li><li>juegos</li><li>magia</li><li>mecha</li><li>militar</li>|<li>misterio</li><li>musica</li><li>nios (niño)</li><li>parodia</li><li>policial</li><li>psicologico</li><li>romance</li><li>samurai</li><li>sci-fi</li><li>seinen</li>|<li>shoujo</li><li>shoujo-ai</li><li>shounen</li><li>shounen-ai</li><li>sobrenatural</li><li>space</li><li>super-poderes</li><li>terror</li><li>thriller</li><li>vampiros</li>|<li>yaoi</li><li>yuri</li>|number of pages unknown|


```json
// 20191017205905
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
      "episodes": "12"
    },
  ]
}
```

### getAnimeMovies(page)
- *Returns a list of `10 titles` per N pages*

| movies      | page            |
| ----------- | --------------- |
| list of last titles added.| number of pages unknown |

```json
// 20191017210027
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
      "episodes": " 1"
    },
  ]
}
```

### getAnimeOvas(page)
- *Returns a list of `10 titles` per N pages*

| ovas        | page            |
| ----------- | --------------- |
| list of last titles added.| number of pages unknown |

```json
// 20191017210149
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
      "episodes": " 2"
    },
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

### PayPal Donation
*If you are interested in supporting this project, you can help me with any monetary contribution so that I can continue working and maintaining the project.*
<p>
  <a href="https://paypal.me/chrismperezsantiago?locale.x=en_US">
      <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" alt="paypal">
  </a>
</p>

### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © 2019 [Chris Michael](http://personal-porfolio.chrismichael.now.sh).
