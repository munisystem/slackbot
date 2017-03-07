'use strict';

const url = require('url');
const got = require('got');
const cheerio = require('cheerio');

const URL = 'http://ejje.weblio.jp/content/'

module.exports = robot => {
  robot.hear(/^trans (.+)$/, msg => {
    const str = encodeURIComponent(msg.match[1]);
    got(URL+str).then(res => {
      const $ = cheerio.load(res.body);
      const exp = $('td.content-explanation').text();
      msg.send(`${exp}\n>${URL+str}`)
    });
  });
};
