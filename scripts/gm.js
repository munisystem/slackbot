'use strict';
const cron = require('node-cron');

module.exports = robot => {
  // cron.schedule('00 00 08 * * *', () => {
  cron.schedule('00 * * * * *', () => {
    robot.send({
      room: 'random'
    }, "@here おはよう、もう起きる時間だよ〜");
  });
};