'use strict';

// debuging
require('dotenv').config()

const trello = require('node-trello');

const t = new trello(
  process.env.HUBOT_TRELLO_KEY,
  process.env.HUBOT_TRELLO_TOKEN
);

const usage = `使い方忘れちゃったのかな？しょうがないな〜
\`\`\`
tr (trello) add [TASK]    Add task to trello board
tr (trello) show          Show url of trello board
\`\`\`
もう忘れちゃだめだよ？
`

module.exports = robot => {
  robot.hear(/^(tr|trello)$/i, msg => {
    msg.reply(usage)
  });

  robot.hear(/^(tr|trello) add (.+)$/, msg => {
    const task = msg.match[2];
    t.post('/1/cards', {
      name: task,
      idList: process.env.HUBOT_TRELLO_LIST
    }, (err, data) => {
      if (err) {
        msg.reply('ごめんね、なんか失敗しちゃった...')
        return;
      }
      msg.reply(`タスクを追加しといたよ〜\n>${data.shortUrl}`)
    });
  });

  robot.hear(/^(tr|trello) show$/, msg => {
    msg.reply(`タスクの一覧はここだよ、ちゃんと確認しておこうね？\n>${process.env.HUBOT_TRELLO_URL}`)
  });
};
