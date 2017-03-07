'use strict';

const url = require('url');
const got = require('got');
const cheerio = require('cheerio');

const URL = 'http://ejje.weblio.jp/content/'

module.exports = robot => {
  robot.hear(/^ja (.+)$/, msg => {
    const en = msg.match[1];
    got(URL+en).then(res => {
      const $ = cheerio.load(res.body);
      const exp = $('td.content-explanation').text();
      msg.send(`${exp}\n>${URL+en}`)
    });
  });
};
