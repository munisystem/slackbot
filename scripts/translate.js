'use strict';

const url = require('url');
const got = require('got');
const cheerio = require('cheerio');

const URL = 'http://ejje.weblio.jp/content/'

module.exports = robot => {
  robot.hear(/^(trans|翻訳).* (.+)$/, msg => {
    const str = encodeURIComponent(msg.match[2]);
    got(URL+str).then(res => {
      const $ = cheerio.load(res.body);
      const exp = $('td.content-explanation').text();
      msg.send(`${exp}\n>${URL+str}`)
    });
  });
};
