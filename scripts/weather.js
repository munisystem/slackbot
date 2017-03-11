'use strict';

const url = require('url');
const got = require('got');

const city = '130010';
const URL = `http://weather.livedoor.com/forecast/webservice/json/v1?city=${city}`

module.exports = robot => {
  robot.hear(/おはよう、もう起きる時間だよ〜/, () => {
    got(URL).then(res => {
      const obj = JSON.parse(res.body);

      const telop = obj['forecasts'][0]['telop'];
      const min = obj['forecasts'][0]['temperature']['min'];
      const max = obj['forecasts'][0]['temperature']['max'];

      const temp = (!min || !max)
        ? '気温は...ごめん分からないや。ごめんね。'
        : `最低気温は${min['celsius']}℃、最高気温は${min['celsius']}℃だって。`;

      robot.send({
        room: '#random'
      }, `今日の天気は${telop}、${temp}`);
    });
  });
}
