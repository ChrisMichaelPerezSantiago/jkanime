import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import ICalender from '../interfaces/ICalender';
import { calenderUrl } from '../urls/index'


const getAnimeCalender = async () => {
  const res = await fetch(`${calenderUrl}`); //https://jkanime.net/horario/
  const body = await res.text();
  const promises = [];
  var $ = cheerio.load(body);
  $('table tr').eq(1).each((i, element) => {
    const $element = $(element);
    // eq(0) equal to monday
    const monday = $element.find('tr td').eq(0).map((j, element) => {
      const $element = $(element);
      const content = []
      const titles = $element.find('a').map((i, el) => {
        const $el = $(el);
        const title = $el.find('h3').text();
        return title;
      }).toArray();
      const ids = $element.find('a').map((i, el) => {
        const $el = $(el);
        const id = $el.attr('href').split("/")[3];
        return id;
      }).toArray();
      const posters = $element.find('a div#timg').map((i, el) => {
        const $el = $(el);
        const poster = $element.find('img').eq(i).attr('src');
        return poster;
      }).toArray();
      content.push({
        title: titles,
        id: ids,
        poster: posters
      })
      return content;
    }).toArray();
    // eq(1) equal to Tuesday
    const tuesday = $element.find('tr td').eq(1).map((j, element) => {
      const $element = $(element);
      const content = []
      const titles = $element.find('a').map((i, el) => {
        const $el = $(el);
        const title = $el.find('h3').text();
        return title;
      }).toArray();
      const ids = $element.find('a').map((i, el) => {
        const $el = $(el);
        const id = $el.attr('href').split("/")[3];
        return id;
      }).toArray();
      const posters = $element.find('a div#timg').map((i, el) => {
        const $el = $(el);
        const poster = $element.find('img').eq(i).attr('src');
        return poster;
      }).toArray();
      content.push({
        title: titles,
        id: ids,
        poster: posters
      })
      return content;
    }).toArray();
    // eq(2) equal to Wednesday
    const wednesday = $element.find('tr td').eq(2).map((j, element) => {
      const $element = $(element);
      const content = []
      const titles = $element.find('a').map((i, el) => {
        const $el = $(el);
        const title = $el.find('h3').text();
        return title;
      }).toArray();
      const ids = $element.find('a').map((i, el) => {
        const $el = $(el);
        const id = $el.attr('href').split("/")[3];
        return id;
      }).toArray();
      const posters = $element.find('a div#timg').map((i, el) => {
        const $el = $(el);
        const poster = $element.find('img').eq(i).attr('src');
        return poster;
      }).toArray();
      content.push({
        title: titles,
        id: ids,
        poster: posters
      })
      return content;
    }).toArray();
    // eq(3) equal to thursday
    const thursday = $element.find('tr td').eq(3).map((j, element) => {
      const $element = $(element);
      const content = []
      const titles = $element.find('a').map((i, el) => {
        const $el = $(el);
        const title = $el.find('h3').text();
        return title;
      }).toArray();
      const ids = $element.find('a').map((i, el) => {
        const $el = $(el);
        const id = $el.attr('href').split("/")[3];
        return id;
      }).toArray();
      const posters = $element.find('a div#timg').map((i, el) => {
        const $el = $(el);
        const poster = $element.find('img').eq(i).attr('src');
        return poster;
      }).toArray();
      content.push({
        title: titles,
        id: ids,
        poster: posters
      })
      return content;
    }).toArray();
    // eq(4) equal to Friday
    const friday = $element.find('tr td').eq(4).map((j, element) => {
      const $element = $(element);
      const content = []
      const titles = $element.find('a').map((i, el) => {
        const $el = $(el);
        const title = $el.find('h3').text();
        return title;
      }).toArray();
      const ids = $element.find('a').map((i, el) => {
        const $el = $(el);
        const id = $el.attr('href').split("/")[3];
        return id;
      }).toArray();
      const posters = $element.find('a div#timg').map((i, el) => {
        const $el = $(el);
        const poster = $element.find('img').eq(i).attr('src');
        return poster;
      }).toArray();
      content.push({
        title: titles,
        id: ids,
        poster: posters
      })
      return content;
    }).toArray();
    // eq(5) equal to Saturday
    const saturday = $element.find('tr td').eq(5).map((j, element) => {
      const $element = $(element);
      const content = []
      const titles = $element.find('a').map((i, el) => {
        const $el = $(el);
        const title = $el.find('h3').text();
        return title;
      }).toArray();
      const ids = $element.find('a').map((i, el) => {
        const $el = $(el);
        const id = $el.attr('href').split("/")[3];
        return id;
      }).toArray();
      const posters = $element.find('a div#timg').map((i, el) => {
        const $el = $(el);
        const poster = $element.find('img').eq(i).attr('src');
        return poster;
      }).toArray();
      content.push({
        title: titles,
        id: ids,
        poster: posters
      })
      return content;
    }).toArray();
    // eq(6) equal to Sunday
    const sunday = $element.find('tr td').eq(6).map((j, element) => {
      const $element = $(element);
      const content = []
      const titles = $element.find('a').map((i, el) => {
        const $el = $(el);
        const title = $el.find('h3').text();
        return title;
      }).toArray();
      const ids = $element.find('a').map((i, el) => {
        const $el = $(el);
        const id = $el.attr('href').split("/")[3];
        return id;
      }).toArray();
      const posters = $element.find('a div#timg').map((i, el) => {
        const $el = $(el);
        const poster = $element.find('img').eq(i).attr('src');
        return poster;
      }).toArray();
      content.push({
        title: titles,
        id: ids,
        poster: posters
      })
      return content;
    }).toArray();

    promises.push({
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      saturday: saturday,
      sunday: sunday
    });
  });
  const calender: ICalender[] = await Promise.all(promises);
  return calender;
}

export default getAnimeCalender;