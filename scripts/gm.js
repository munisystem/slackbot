'use strict';

const cron = require('node-cron');

const weather = require('../lib/weather').default;

module.exports = robot => {
  cron.schedule('0 8 * * *', () => {
    weather().then(mes => {
      robot.send({
        room: '#random'
      }, `@here おはよう、もう起きる時間だよ〜\n${mes}`);
    });
  });
};
