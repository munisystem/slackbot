'use strict';

module.exports = robot => {
  robot.hear(/(起きて).*/, msg => {
    msg.reply(msg.random([
      "起きてるよ〜、ちょっと眠いけど",
      "あ、え〜と、呼んだ？",
      "大丈夫、起きてるよ？ うん、本当に"
    ]));
  });

  robot.hear(/(おはよ).*/, msg => {
    msg.reply(msg.random([
      "おはよう〜",
      "えっと、呼んだのかな？",
      "おはよう、今日も適当に頑張ろうね"
    ]));
  });

  robot.hear(/(ただいま).*/, msg => {
    msg.reply(msg.random([
      "おかえりなさい",
      "あ、戻ってきたんだね〜"
    ]));
  });

  robot.hear(/(ありがと).*/, msg => {
    msg.reply(msg.random([
      "えーと、ありがとう？",
      "どういたしましてだよ〜",
      "これからも期待に応えられるように適当に頑張るよ〜"
    ]));
  });

  robot.hear(/(かわいい|可愛い|好き|すき|愛して).*/, msg => {
    msg.reply(msg.random([
      "ありがと〜",
      "な、なに言ってるのよー、ばっかじゃないのー",
      "えーと、こういうときは何を言えば良いんだっけ？",
      "そ、そぉんなこと、言ってぇ...ば、ばぁかぁ〜"
    ]));
  });

};
