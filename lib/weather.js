'use strict';

const url = require('url');
const got = require('got');

const city = '130010';
const URL = `http://weather.livedoor.com/forecast/webservice/json/v1?city=${city}`

exports.default = () => {
    return got(URL).then(res => {
      const obj = JSON.parse(res.body);

      const telop = obj['forecasts'][0]['telop'];
      const min = obj['forecasts'][0]['temperature']['min'];
      const max = obj['forecasts'][0]['temperature']['max'];

      const min_cel = (!min)
        ? '最低気温は...わからないよ。'
        : `最低気温は${min['celsius']}℃、`;

      const max_cel = (!max)
        ? '最高気温は...わからないよ。'
        : `最高気温は${max['celsius']}℃だって。`;

      const temp = (!min && !max)
        ? '気温は...わからないよ。ごめんね。'
        : `${min_cel}${max_cel}`;

      return `今日の天気は${telop}、${temp}`
    });
}
