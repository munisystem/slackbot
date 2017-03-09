'use strict';
const cron = require('node-cron');

module.exports = robot => {
  cron.schedule('0 8 * * *', () => {
    console.log('hello');
    robot.send({
      room: '#random'
    }, "@here おはよう、もう起きる時間だよ〜");
  });
};
