/*
  i18n.js — shared translation object for YoursCalmly
  ------------------------------------------------------------------------------
  English is complete. Chinese (zh) covers all site chrome (nav, hero, section
  copy, buttons, shared game-shell strings) so the experience reads naturally
  when switched. Deep per-round game content (prompts/options/categories) is
  intentionally left English-only for this preview and falls back automatically
  — see GP_I18N.t(). GP_I18N.isPartial('zh') tells pages whether to show the
  "still being translated" note.

  To add a language later: add a new top-level key under `translations`
  (e.g. `es`), fill in as many keys as you have, and add a toggle button in
  main.js. Missing keys fall back to English automatically.
*/
(function (global) {
  'use strict';

  var translations = {
    en: {
      meta: { dir: 'ltr' },
      common: {
        brand: 'YoursCalmly',
        skipToContent: 'Skip to main content',
        takeYourTime: 'Take your time. There is no clock running.',
        back: 'Back',
        backHome: 'Back to home',
        backToGames: 'Back to games',
        comingSoon: 'Coming soon'
      },
      nav: {
        home: 'Home',
        games: 'Games',
        why: 'Why these games',
        accessibility: 'Accessibility',
        langEn: 'EN',
        langZh: '中文'
      },
      hero: {
        eyebrow: 'A calm place to play',
        title: 'Gentle games, at your own pace.',
        lead: 'Three short, friendly activities designed for one player at a time. No pressure, no timers you can’t control, no judgement — just a pleasant way to spend a few quiet minutes.',
        ctaPrimary: 'Start playing',
        ctaSecondary: 'Why we made this'
      },
      how: {
        eyebrow: 'How it works',
        title: 'Simple, from start to finish',
        step1title: 'Choose a game',
        step1body: 'Three short activities to pick from. Each one is explained in a single sentence.',
        step2title: 'Play one round at a time',
        step2body: 'Every round has one clear question and a few large choices. Nothing to memorise.',
        step3title: 'Finish whenever you like',
        step3body: 'A round takes under two minutes. Stop after one, or play all five — entirely up to you.'
      },
      hub: {
        eyebrow: 'Games',
        title: 'Three gentle games',
        lead: 'Each one plays differently, but all are simple, short, and forgiving. Pick whichever feels good today.',
        playLabel: 'Play',
        memoryLane: {
          title: 'Memory Lane',
          desc: 'Look at three familiar pictures and tap the one that answers a simple, friendly question.',
          playAria: 'Play Memory Lane'
        },
        findGroup: {
          title: 'Find the Group',
          desc: 'A few pictures appear together — tap the ones that belong to the same familiar group.',
          playAria: 'Play Find the Group'
        },
        tuneMatch: {
          title: 'Tune Match',
          desc: 'Listen to a short, gentle tune and choose the mood it matches from three large options.',
          playAria: 'Play Tune Match'
        }
      },
      why: {
        eyebrow: 'The thinking behind it',
        title: 'Why these activities may help',
        intro: 'These games are inspired by cognitive stimulation approaches that are often used, informally and in structured programmes, with people living with early-stage dementia. Each one leans on something familiar — everyday objects, simple categories, or a gentle tune — rather than testing memory under pressure.',
        point1title: 'Recognition, not recall',
        point1body: 'Memory Lane uses familiar, concrete images so the activity feels like noticing, not straining to remember.',
        point2title: 'Simple categorisation',
        point2body: 'Find the Group draws on everyday groupings — fruits, kitchen items, clothing — that tend to stay familiar for a long time.',
        point3title: 'Music and reminiscence',
        point3body: 'Tune Match uses short, gentle melodies. Music and familiar cues are often associated with calm engagement.',
        point4title: 'Confidence, not competition',
        point4body: 'There are no scores to chase and no timers to beat. The aim is a pleasant few minutes, not a test.',
        disclaimerTitle: 'A note on what this is — and isn’t',
        disclaimer: 'This site offers supportive, wellness-oriented activities for enjoyment and gentle engagement. It is not a medical device, treatment, or diagnostic tool, and it does not claim to cure, prevent, or slow the progression of dementia or any condition. If you have questions about memory, thinking, or a diagnosis, please speak with a qualified healthcare professional.'
      },
      accessibility: {
        eyebrow: 'Built with care',
        title: 'Accessibility and design principles',
        intro: 'These choices were made on purpose, to keep every screen calm and easy to use.',
        point1title: 'One thing per screen',
        point1body: 'Every screen asks for a single action, so there is never a question of what to do next.',
        point2title: 'Large text and targets',
        point2body: 'Body text is large and buttons are big enough to tap comfortably, even with less steady hands.',
        point3title: 'Strong, warm contrast',
        point3body: 'Colours are chosen for readability first, with warm tones instead of harsh clinical brights.',
        point4title: 'Keyboard and screen-reader friendly',
        point4body: 'Every button and card can be reached and used without a mouse, with clear focus outlines throughout.',
        point5title: 'No countdown pressure',
        point5body: 'Nothing is timed by default. Rounds wait patiently for as long as they are needed.',
        point6title: 'Calm motion',
        point6body: 'Animations are minimal and respect your device’s reduced-motion setting.'
      },
      language: {
        eyebrow: 'Looking ahead',
        title: 'Future language support',
        body: 'YoursCalmly is being built so that a full Chinese version can be added without reworking the site. You can already switch the interface and play all three games in Chinese below — a few of the longer background sections are still being translated.'
      },
      footer: {
        tagline: 'A calm place to play — wellness activities for one, at your own pace.',
        disclaimer: 'For supportive wellness use only. Not a medical device or diagnostic tool, and not a substitute for professional advice.',
        rights: 'This is a preview build.'
      },
      shell: {
        roundLabel: 'Round {current} of {total}',
        checkAnswer: 'Check my answer',
        continue: 'Continue',
        playAgain: 'Play again',
        backToGames: 'Back to games',
        resultsTitle: 'Well played.',
        resultsBody: 'You worked through all {total} rounds. That’s a lovely way to spend a few minutes.',
        tryAgainHint: 'Feel free to play again — the rounds may look a little different each time.'
      },
      memoryLane: {
        title: 'Memory Lane',
        oneLiner: 'Look at three familiar pictures and tap the one that fits.',
        instructions: 'Read the question, then tap the picture that answers it. There’s no rush.',
        feedbackCorrectTitle: 'Lovely.',
        feedbackCorrectBody: 'That’s the one.',
        feedbackGentleTitle: 'Good thought.',
        feedbackGentleBody: 'This time it was the {answer}.',
        rounds: {
          r1: {
            prompt: 'Which one is used for making a cup of tea?',
            a: 'Kettle', b: 'Bicycle', c: 'Umbrella'
          },
          r2: {
            prompt: 'Which one would keep you warm on a chilly day?',
            a: 'Scarf', b: 'Sunglasses', c: 'Sandals'
          },
          r3: {
            prompt: 'Which of these feels like a busy market?',
            a: 'Fruit stall', b: 'Mountain trail', c: 'Office desk'
          },
          r4: {
            prompt: 'Which one tells you the time?',
            a: 'Clock', b: 'Frying pan', c: 'Bookshelf'
          },
          r5: {
            prompt: 'Which one would you use to write a letter?',
            a: 'Pen and paper', b: 'Watering can', c: 'Football'
          }
        }
      },
      findGroup: {
        title: 'Find the Group',
        oneLiner: 'Tap the pictures that belong to the same familiar group.',
        instructions: 'Tap each picture that belongs in the group. Tap "Check my answer" whenever you feel ready.',
        promptTemplate: 'Tap the {count} things that are {category}.',
        feedbackAllCorrectTitle: 'That’s the group.',
        feedbackAllCorrectBody: 'Nicely spotted.',
        feedbackPartialTitle: 'A good try.',
        feedbackPartialBody: 'The group was: {answers}.',
        rounds: {
          r1: { category: 'fruits', count: 'three', a: 'Apple', b: 'Banana', c: 'Orange', d: 'Bus', e: 'Hammer' },
          r2: { category: 'ways to travel', count: 'three', a: 'Bicycle', b: 'Train', c: 'Bus', d: 'Spoon', e: 'Shirt' },
          r3: { category: 'kitchen items', count: 'three', a: 'Kettle', b: 'Frying pan', c: 'Teacup', d: 'Umbrella', e: 'Bicycle' },
          r4: { category: 'clothing', count: 'three', a: 'Scarf', b: 'Shirt', c: 'Hat', d: 'Apple', e: 'Kettle' },
          r5: { category: 'garden things', count: 'three', a: 'Flower', b: 'Watering can', c: 'Tree', d: 'Train', e: 'Shirt' }
        }
      },
      tuneMatch: {
        title: 'Tune Match',
        oneLiner: 'Listen to a short tune and choose the mood it matches.',
        instructions: 'Press play to hear a short tune, then choose the option that feels closest. Play it again as many times as you like.',
        playButton: 'Play the tune',
        playAgainButton: 'Play it again',
        listening: 'Playing…',
        roundPrompt: 'Which mood does this tune feel like?',
        tempoSlow: 'A slow, gentle tune.',
        tempoFast: 'A quick, lively tune.',
        noAudioNote: 'Your browser can’t play sound here, so just choose the mood using the description below.',
        choiceMorning: 'Calm Morning',
        choiceEvening: 'Quiet Evening',
        choiceDance: 'Lively Dance',
        feedbackMatchTitle: 'Lovely listening.',
        feedbackMatchBody: 'That tune was written to feel like a {answer}.',
        feedbackGentleTitle: 'Thank you for listening closely.',
        feedbackGentleBody: 'This one was meant to feel like a {answer}. There’s no wrong way to listen.'
      }
    },

    zh: {
      meta: { dir: 'ltr', partial: true },
      common: {
        brand: 'YoursCalmly',
        skipToContent: '跳到主要内容',
        takeYourTime: '慢慢来，不用着急。',
        back: '返回',
        backHome: '返回首页',
        backToGames: '返回游戏列表',
        comingSoon: '即将推出'
      },
      nav: {
        home: '首页',
        games: '游戏',
        why: '为什么设计这些游戏',
        accessibility: '无障碍设计',
        langEn: 'EN',
        langZh: '中文'
      },
      hero: {
        eyebrow: '一个安心游戏的地方',
        title: '温和的游戏，按自己的节奏进行。',
        lead: '三个简短、友好的活动，专为一个人安静地游玩而设计。没有压力，没有无法控制的倒计时，也没有评判——只是一段愉快的静心时光。',
        ctaPrimary: '开始游戏',
        ctaSecondary: '了解我们的初衷'
      },
      how: {
        eyebrow: '使用方法',
        title: '简单，从头到尾',
        step1title: '选择一个游戏',
        step1body: '三个简短的活动供您选择，每一个都用一句话说明。',
        step2title: '一次玩一轮',
        step2body: '每一轮只有一个清晰的问题和几个大按钮，无需记忆任何步骤。',
        step3title: '随时结束',
        step3body: '每一轮不到两分钟。玩一轮就停下，或者玩完五轮——完全由您决定。'
      },
      hub: {
        eyebrow: '游戏',
        title: '三个温和的游戏',
        lead: '每个游戏玩法不同，但都简单、简短、宽容。今天想玩哪个都可以。',
        playLabel: '开始游戏',
        memoryLane: { title: '记忆小径', desc: '看看三张熟悉的图片，点选能回答简单问题的那一张。', playAria: '开始游戏——记忆小径' },
        findGroup: { title: '寻找同类', desc: '几张图片一起出现——点选属于同一类别的图片。', playAria: '开始游戏——寻找同类' },
        tuneMatch: { title: '旋律配对', desc: '聆听一段短短的温和旋律，从三个选项中选出最相配的心情。', playAria: '开始游戏——旋律配对' }
      },
      why: {
        eyebrow: '设计理念',
        title: '为什么这些活动可能有帮助',
        intro: '（中文详细内容即将推出 · Full Chinese content coming soon）',
        point1title: '辨认，而非强记',
        point1body: '',
        point2title: '简单分类',
        point2body: '',
        point3title: '音乐与回忆',
        point3body: '',
        point4title: '建立信心，而非比较',
        point4body: '',
        disclaimerTitle: '关于本网站的说明',
        disclaimer: '本网站提供支持性、以身心健康为导向的活动，供愉悦身心和轻松参与之用。它不是医疗器械、治疗或诊断工具，也不声称能治愈、预防或延缓失智症或任何疾病的发展。如您对记忆、思维能力或诊断有疑问，请咨询合资格的医疗专业人员。'
      },
      accessibility: {
        eyebrow: '用心设计',
        title: '无障碍与设计原则',
        intro: '（中文详细内容即将推出 · Full Chinese content coming soon）',
        point1title: '每个画面只做一件事', point1body: '',
        point2title: '大字体与大按钮', point2body: '',
        point3title: '清晰温暖的对比度', point3body: '',
        point4title: '支持键盘与屏幕阅读器', point4body: '',
        point5title: '没有倒计时压力', point5body: '',
        point6title: '柔和的动效', point6body: ''
      },
      language: {
        eyebrow: '未来计划',
        title: '未来语言支持',
        body: 'YoursCalmly 的架构从一开始就为完整的中文版本做好了准备，未来无需重新设计即可加入。您现在已经可以切换下方的界面语言，三个游戏均已支持中文——部分较长的背景介绍内容仍在翻译中。'
      },
      footer: {
        tagline: '一个安心游戏的地方——为一个人设计的身心健康活动，按自己的节奏进行。',
        disclaimer: '仅供支持性身心健康用途。并非医疗器械或诊断工具，亦不能取代专业医疗建议。',
        rights: '这是一个预览版本。'
      },
      shell: {
        roundLabel: '第 {current} 轮，共 {total} 轮',
        checkAnswer: '核对答案',
        continue: '继续',
        playAgain: '再玩一次',
        backToGames: '返回游戏列表',
        resultsTitle: '玩得很好。',
        resultsBody: '您完成了全部 {total} 轮。这是一段美好的时光。',
        tryAgainHint: '欢迎再玩一次——每次的内容可能会略有不同。'
      },
      memoryLane: {
        title: '记忆小径',
        oneLiner: '看看三张熟悉的图片，点选合适的那一张。',
        instructions: '读一读问题，然后点选能回答它的图片。慢慢来，不用着急。',
        feedbackCorrectTitle: '很好。',
        feedbackCorrectBody: '就是这一张。',
        feedbackGentleTitle: '想法不错。',
        feedbackGentleBody: '这次的答案是{answer}。',
        rounds: {
          r1: { prompt: '哪一个是用来泡茶的？', a: '水壶', b: '自行车', c: '雨伞' },
          r2: { prompt: '哪一个能在寒冷的日子里保暖？', a: '围巾', b: '太阳镜', c: '凉鞋' },
          r3: { prompt: '哪一个让人感觉像热闹的市场？', a: '水果摊', b: '山间小路', c: '办公桌' },
          r4: { prompt: '哪一个可以告诉你时间？', a: '时钟', b: '煎锅', c: '书架' },
          r5: { prompt: '哪一个可以用来写信？', a: '笔和纸', b: '洒水壶', c: '足球' }
        }
      },
      findGroup: {
        title: '寻找同类',
        oneLiner: '点选属于同一类别的图片。',
        instructions: '点选每一张属于该类别的图片，准备好后点击"核对答案"。',
        promptTemplate: '点选{count}样属于{category}的东西。',
        feedbackAllCorrectTitle: '找对了。',
        feedbackAllCorrectBody: '观察得真仔细。',
        feedbackPartialTitle: '很好的尝试。',
        feedbackPartialBody: '正确的组合是：{answers}。',
        rounds: {
          r1: { category: '水果', count: '三', a: '苹果', b: '香蕉', c: '橙子', d: '公交车', e: '锤子' },
          r2: { category: '交通工具', count: '三', a: '自行车', b: '火车', c: '公交车', d: '勺子', e: '衬衫' },
          r3: { category: '厨房用品', count: '三', a: '水壶', b: '煎锅', c: '茶杯', d: '雨伞', e: '自行车' },
          r4: { category: '衣物', count: '三', a: '围巾', b: '衬衫', c: '帽子', d: '苹果', e: '水壶' },
          r5: { category: '园艺用品', count: '三', a: '花', b: '洒水壶', c: '树', d: '火车', e: '衬衫' }
        }
      },
      tuneMatch: {
        title: '旋律配对',
        oneLiner: '聆听一段短短的旋律，选出相配的心情。',
        instructions: '按下播放键聆听旋律，然后选出最接近的心情。可以反复播放。',
        playButton: '播放旋律',
        playAgainButton: '再听一次',
        listening: '播放中……',
        roundPrompt: '这段旋律让你感觉像哪种心情？',
        tempoSlow: '这是一段缓慢、柔和的旋律。',
        tempoFast: '这是一段轻快、活泼的旋律。',
        noAudioNote: '您的浏览器无法在此播放声音，请根据下方描述选择心情。',
        choiceMorning: '宁静清晨',
        choiceEvening: '静谧夜晚',
        choiceDance: '欢快舞曲',
        feedbackMatchTitle: '听得真好。',
        feedbackMatchBody: '这段旋律的灵感来自{answer}。',
        feedbackGentleTitle: '谢谢您用心聆听。',
        feedbackGentleBody: '这一段的灵感其实是{answer}。用心聆听就好，没有对错之分。'
      }
    }
  };

  var currentLang = 'en';
  var changeListeners = [];

  function getPath(obj, path) {
    var parts = path.split('.');
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null || typeof cur !== 'object' || !(parts[i] in cur)) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function format(str, vars) {
    if (!vars) return str;
    return str.replace(/\{(\w+)\}/g, function (m, key) {
      return Object.prototype.hasOwnProperty.call(vars, key) ? vars[key] : m;
    });
  }

  function t(key, vars) {
    var val = getPath(translations[currentLang], key);
    if (val === undefined || val === '') {
      val = getPath(translations.en, key);
    }
    if (val === undefined) return key;
    return format(val, vars);
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', getPath(translations[lang], 'meta.dir') || 'ltr');
    changeListeners.forEach(function (fn) { fn(lang); });
  }

  function onChange(fn) {
    changeListeners.push(fn);
  }

  function isPartial(lang) {
    return !!getPath(translations[lang || currentLang], 'meta.partial');
  }

  function availableLangs() {
    return Object.keys(translations);
  }

  global.GP_I18N = {
    t: t,
    setLang: setLang,
    getLang: function () { return currentLang; },
    onChange: onChange,
    isPartial: isPartial,
    availableLangs: availableLangs
  };
})(window);
