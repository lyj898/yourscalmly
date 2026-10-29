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
      seo: {
        homeTitle: 'YoursCalmly — Calm Cognitive Games for Early-Stage Dementia',
        homeDesc: 'Three free, gentle online games for adults with early-stage dementia or mild memory changes — recognition, categorisation, and music matching. No timers, no scores, no sign-up. In English and Chinese.',
        memoryLaneTitle: 'Memory Lane — Recognition Game for Dementia | YoursCalmly',
        memoryLaneDesc: 'A free, gentle recognition game for adults with early-stage dementia. Look at three familiar pictures and tap the one that answers a simple, friendly question. No timer, no score.',
        findGroupTitle: 'Find the Group — Categorisation Game for Dementia | YoursCalmly',
        findGroupDesc: 'A free, calming categorisation game for adults with early-stage dementia. Tap the pictures that belong to the same familiar group — fruits, kitchen items, clothing, and more.',
        tuneMatchTitle: 'Tune Match — Music Mood Game for Dementia | YoursCalmly',
        tuneMatchDesc: 'A free, soothing music-matching game for adults with early-stage dementia. Listen to a short, gentle tune and choose the mood it matches from three large options.'
      },
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
        guide: 'For caregivers',
        faq: 'FAQ',
        langEn: 'EN',
        langZh: '中文'
      },
      hero: {
        eyebrow: 'Free · no sign-up · no rush',
        title: 'Gentle games, like a slow morning at the coffee shop.',
        lead: 'Three short, friendly activities for people living with early-stage dementia. Familiar pictures, simple questions, and all the time in the world.',
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
        eyebrow: 'Two languages',
        title: 'Available in English and Chinese',
        body: 'YoursCalmly is fully available in English and Chinese — use the language toggle at the top of any page to switch instantly, with no reload and no account needed. Every section, and all three games, are translated in full.'
      },
      guide: {
        eyebrow: 'For families and caregivers',
        title: 'A short guide to using YoursCalmly',
        intro: 'Many people come here looking for a simple, calming online activity to share with a parent, partner, or friend living with early-stage dementia or mild cognitive changes. This section explains what the games involve, how long a session takes, and how to introduce them gently.',
        s1title: 'What a session actually looks like',
        s1body: 'A round asks one clear question — "Which one is used for making a cup of tea?" — and offers a few large picture choices. There are five rounds in each game, and a full game takes roughly five to ten minutes at an unhurried pace. You can stop after a single round; nothing is lost, and nothing needs to be finished. Choosing an unexpected answer produces a warm, matter-of-fact response rather than a buzzer or a red cross.',
        s2title: 'How to introduce the games',
        s2body: 'Sitting alongside someone and letting them tap for themselves usually works better than handing over a device with instructions. Open one game rather than presenting all three at once, read the question aloud if that helps, and let silence sit — the screen will wait indefinitely. If a round feels frustrating, moving to a different game, or stopping entirely, is a perfectly good outcome. The aim is a pleasant few minutes together, not a completed set.',
        s3title: 'Choosing which game to open first',
        s3body: 'Memory Lane is the gentlest starting point: three familiar pictures, one simple question, one tap. Find the Group asks for a little more — picking several pictures that belong to the same everyday category, such as fruits or kitchen items — and suits someone who enjoys sorting things. Tune Match plays a short melody and asks which mood it fits; it works well for people who respond warmly to music, and it can be played by ear alone, with a written description available if sound is unavailable.',
        s4title: 'What this site is not',
        s4body: 'YoursCalmly does not assess, score, track, or diagnose anything. There is no account, no caregiver dashboard, no analytics, and no data leaves the device. It is not a substitute for a clinical cognitive stimulation programme, occupational therapy, or medical advice. If you have questions about memory, thinking, or a diagnosis, a qualified healthcare professional is the right place to start.'
      },
      faq: {
        eyebrow: 'Common questions',
        title: 'Frequently asked questions',
        q1title: 'Are the games free to play?',
        q1body: 'Yes. All three YoursCalmly games are completely free, with no account, sign-up, subscription, or app download required — just open the site in a browser and start playing.',
        q2title: 'Who are these games designed for?',
        q2body: 'YoursCalmly is designed for adults living with early-stage dementia or mild memory changes who enjoy playing on their own, as well as caregivers and family members looking for a calm activity to share.',
        q3title: 'Is YoursCalmly a medical treatment for dementia?',
        q3body: 'No. YoursCalmly offers supportive, wellness-oriented activities for enjoyment and gentle engagement. It is not a medical device, treatment, or diagnostic tool, and does not claim to cure, prevent, or slow the progression of dementia or any condition.',
        q4title: 'Do the games have timers or scores?',
        q4body: 'No. None of the three games use countdown timers or competitive scoring by default. Every round waits patiently for as long as it is needed, so there is no pressure to hurry or perform.',
        q5title: 'Can I play in Chinese?',
        q5body: 'Yes. Use the language toggle at the top of any page to switch the entire site — including all three games — between English and Chinese instantly, with no reload.',
        q6title: 'What devices can I play on?',
        q6body: 'YoursCalmly works in any modern web browser on a phone, tablet, or computer, with large text and large buttons designed to be easy to read and tap, even with less steady hands.'
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
        aboutTitle: 'About Memory Lane',
        aboutBody: 'Memory Lane is a free online recognition game for adults living with early-stage dementia or mild memory changes. Each of the five rounds shows one plain question and three large pictures of everyday objects — a kettle, a scarf, a clock — and asks which one fits. Because the answer is always visible on screen, the game leans on recognising something familiar rather than recalling it from nothing, which tends to feel easier and more pleasant. There is no timer, no score, and no wrong-answer buzzer: an unexpected choice simply names the intended answer and moves on. A full game takes about five minutes, and you can stop after any round.',
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
        aboutTitle: 'About Find the Group',
        aboutBody: 'Find the Group is a free online categorisation game for adults living with early-stage dementia or mild memory changes. Each of the five rounds lays out five pictures and names an everyday category — fruits, ways to travel, kitchen items, clothing, garden things — then asks you to tap the three that belong. These are broad, long-familiar groupings, so the task usually feels like ordinary sorting rather than a test. Nothing is timed, and you tap "Check my answer" only when you feel ready. If some picks differ, the game names the full group warmly and carries on. A full game takes about five to ten minutes.',
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
        feedbackGentleBody: 'This one was meant to feel like a {answer}. There’s no wrong way to listen.',
        aboutTitle: 'About Tune Match',
        aboutBody: 'Tune Match is a free online music game for adults living with early-stage dementia or mild memory changes. Each of the five rounds plays a short, gentle melody generated in the browser — nothing to download — and asks which of three moods it feels closest to: a calm morning, a quiet evening, or a lively dance. Music often reaches people warmly even when words are harder, and this round asks only for a feeling, so there is no right answer to get wrong. You can replay the tune as many times as you like, and if sound is unavailable a short written description of the melody appears instead. A full game takes about five minutes.'
      }
    },

    zh: {
      meta: { dir: 'ltr' },
      seo: {
        homeTitle: 'YoursCalmly — 为早期失智症设计的平静益智游戏',
        homeDesc: '三个免费、温和的线上游戏，专为患有早期失智症或轻度记忆变化的成年人设计——辨认、分类与旋律配对。没有倒计时、没有分数、无需注册。提供中英双语。',
        memoryLaneTitle: '记忆小径 — 失智症辨认游戏 | YoursCalmly',
        memoryLaneDesc: '一款免费、温和的辨认游戏，专为早期失智症人士设计。看看三张熟悉的图片，点选能回答简单问题的那一张。没有倒计时，也没有分数。',
        findGroupTitle: '寻找同类 — 失智症分类游戏 | YoursCalmly',
        findGroupDesc: '一款免费、令人平静的分类游戏，专为早期失智症人士设计。点选属于同一类别的图片——水果、厨房用品、衣物等等。',
        tuneMatchTitle: '旋律配对 — 失智症音乐心情游戏 | YoursCalmly',
        tuneMatchDesc: '一款免费、舒缓的音乐配对游戏，专为早期失智症人士设计。聆听一段短短的温和旋律，从三个大选项中选出最相配的心情。'
      },
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
        guide: '给照顾者',
        faq: '常见问题',
        langEn: 'EN',
        langZh: '中文'
      },
      hero: {
        eyebrow: '免费 · 无需注册 · 慢慢来',
        title: '温和的小游戏，就像在咖啡店度过的悠闲早晨。',
        lead: '三个简短、友好的活动，专为早期失智症人士设计。熟悉的图片，简单的问题，时间完全由您掌握。',
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
        intro: '这些游戏的设计灵感来自认知刺激疗法——一种常在正式课程或日常互动中，用于陪伴早期失智症人士的方法。每个游戏都借助熟悉的事物——日常用品、简单分类，或一段温和的旋律——而不是在压力下考验记忆力。',
        point1title: '辨认，而非强记',
        point1body: '记忆小径使用熟悉、具体的图片，让整个过程感觉像是留意身边事物，而不是费力回想。',
        point2title: '简单分类',
        point2body: '寻找同类运用日常生活中的分类——水果、厨房用品、衣物——这些类别通常能让人保持熟悉感，历久不衰。',
        point3title: '音乐与回忆',
        point3body: '旋律配对采用简短、柔和的旋律。音乐与熟悉的声音线索，往往能带来平静而投入的感受。',
        point4title: '建立信心，而非比较',
        point4body: '这里没有分数需要追逐，也没有时间需要打败。目的是享受几分钟愉快的时光，而不是接受测验。',
        disclaimerTitle: '关于本网站的说明',
        disclaimer: '本网站提供支持性、以身心健康为导向的活动，供愉悦身心和轻松参与之用。它不是医疗器械、治疗或诊断工具，也不声称能治愈、预防或延缓失智症或任何疾病的发展。如您对记忆、思维能力或诊断有疑问，请咨询合资格的医疗专业人员。'
      },
      accessibility: {
        eyebrow: '用心设计',
        title: '无障碍与设计原则',
        intro: '这些设计都是刻意为之，目的是让每一个画面都保持平静、易于使用。',
        point1title: '每个画面只做一件事', point1body: '每个画面只要求一个操作，因此不必烦恼接下来该做什么。',
        point2title: '大字体与大按钮', point2body: '正文字体够大，按钮也够大，即使手不太稳，也能轻松点按。',
        point3title: '清晰温暖的对比度', point3body: '色彩的选择以清晰易读为优先，采用温暖的色调，而非生硬的临床亮色。',
        point4title: '支持键盘与屏幕阅读器', point4body: '每个按钮和卡片都可以不使用鼠标即可访问和操作，并配有清晰的焦点提示。',
        point5title: '没有倒计时压力', point5body: '默认情况下没有任何计时，每一轮都会耐心等待，直到您准备好为止。',
        point6title: '柔和的动效', point6body: '动画效果保持在最少，并会尊重您设备上的减少动态效果设定。'
      },
      language: {
        eyebrow: '双语支持',
        title: '提供英文与中文版本',
        body: 'YoursCalmly 现已完整支持英文与中文——点击任意页面顶部的语言按钮即可即时切换，无需刷新，也无需注册账号。所有版块与全部三个游戏，均已完整翻译。'
      },
      guide: {
        eyebrow: '给家属与照顾者',
        title: 'YoursCalmly 使用简介',
        intro: '许多人来到这里，是想为患有早期失智症或轻度认知变化的父母、伴侣或朋友，找一个简单、平静的线上活动一起分享。本节说明游戏的内容、一次大约需要多长时间，以及如何温和地介绍给对方。',
        s1title: '一次游玩大致是什么样子',
        s1body: '每一轮只提出一个清晰的问题——「哪一个是用来泡茶的？」——并提供几个大大的图片选项。每个游戏共五轮，以从容的节奏玩完大约需要五到十分钟。您可以玩一轮就停下；不会失去任何进度，也不需要非得玩完。若选了意料之外的答案，画面会给出温和、平实的回应，而不是提示音或红叉。',
        s2title: '如何介绍这些游戏',
        s2body: '坐在对方身旁、让他们自己动手点选，通常比把设备连同说明一起交出去更有效。一次只打开一个游戏，不要三个一起呈现；如果有帮助，可以把问题念出来，并且容许沉默——画面会一直等待，不会催促。如果某一轮让人感到挫折，换一个游戏、或干脆停下来，都是很好的选择。目标是共度愉快的几分钟，而不是完成一整套。',
        s3title: '先从哪个游戏开始',
        s3body: '记忆小径是最温和的起点：三张熟悉的图片、一个简单的问题、点一下即可。寻找同类的要求稍多一些——从日常类别（例如水果或厨房用品）中选出属于同一组的几张图片——适合喜欢分类整理的人。旋律配对会播放一段短短的旋律，请您选出相配的心情；很适合对音乐有共鸣的人，可以纯粹用耳朵聆听，若无法播放声音，也会提供文字描述。',
        s4title: '本网站不是什么',
        s4body: 'YoursCalmly 不会评估、评分、追踪或诊断任何事情。没有账号、没有照顾者后台、没有分析统计，也不会有任何数据离开您的设备。它不能取代临床的认知刺激疗程、职能治疗或医疗建议。如您对记忆、思维能力或诊断有疑问，请先咨询合资格的医疗专业人员。'
      },
      faq: {
        eyebrow: '常见问题',
        title: '常见问题解答',
        q1title: '这些游戏是免费的吗？',
        q1body: '是的。YoursCalmly 的三个游戏完全免费，无需注册账号、订阅或下载应用程序——只需在浏览器中打开网站即可开始游玩。',
        q2title: '这些游戏适合哪些人？',
        q2body: 'YoursCalmly 专为患有早期失智症或轻度记忆变化、喜欢独自游玩的成年人设计，也适合希望找到一项平静活动、与家人共度时光的照顾者和家属。',
        q3title: 'YoursCalmly 是治疗失智症的医疗手段吗？',
        q3body: '不是。YoursCalmly 提供支持性、以身心健康为导向的活动，供愉悦身心和轻松参与之用。它不是医疗器械、治疗或诊断工具，也不声称能治愈、预防或延缓失智症或任何疾病的发展。',
        q4title: '游戏有倒计时或分数吗？',
        q4body: '没有。默认情况下，三个游戏都没有倒计时或竞争性评分。每一轮都会耐心等待，直到您准备好为止，不会带来匆忙或表现的压力。',
        q5title: '可以用中文游玩吗？',
        q5body: '可以。点击任意页面顶部的语言按钮，即可即时将整个网站——包括全部三个游戏——切换为中文，无需刷新页面。',
        q6title: '可以在哪些设备上游玩？',
        q6body: 'YoursCalmly 可在手机、平板电脑或电脑上的任何现代浏览器中使用，字体与按钮都设计得够大，即使手不太稳，也能轻松阅读和点按。'
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
        aboutTitle: '关于记忆小径',
        aboutBody: '记忆小径是一款免费的线上辨认游戏，专为患有早期失智症或轻度记忆变化的成年人设计。五轮中的每一轮都会呈现一个简单的问题，以及三张日常物品的大图片——水壶、围巾、时钟——请您选出相符的那一张。由于答案始终显示在画面上，这个游戏依靠的是「认出熟悉的东西」，而不是凭空回想，因此通常感觉更轻松、更愉快。这里没有倒计时、没有分数，也没有答错的提示音：若选了意料之外的选项，画面只会温和地说出原本的答案，然后继续。玩完一整局约需五分钟，您也可以在任何一轮之后停下。',
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
        aboutTitle: '关于寻找同类',
        aboutBody: '寻找同类是一款免费的线上分类游戏，专为患有早期失智症或轻度记忆变化的成年人设计。五轮中的每一轮都会摆出五张图片，并说明一个日常类别——水果、交通工具、厨房用品、衣物、园艺用品——请您点选属于该类别的三张。这些都是范围宽泛、长久熟悉的分类，因此过程通常像是平常整理东西，而不像在接受测验。全程没有计时，您准备好时再点击「核对答案」即可。若有几张选得不同，游戏会温和地说出完整的组合，然后继续。玩完一整局约需五到十分钟。',
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
        feedbackGentleBody: '这一段的灵感其实是{answer}。用心聆听就好，没有对错之分。',
        aboutTitle: '关于旋律配对',
        aboutBody: '旋律配对是一款免费的线上音乐游戏，专为患有早期失智症或轻度记忆变化的成年人设计。五轮中的每一轮都会播放一段由浏览器即时生成的短短温和旋律——无需下载任何东西——并请您从三种心情中选出最接近的一种：宁静清晨、静谧夜晚，或欢快舞曲。即使言语变得困难，音乐往往仍能温暖地打动人心；而这一轮只询问感受，因此没有会答错的标准答案。旋律可以反复播放，次数不限；若无法播放声音，画面会改为显示一段简短的文字描述。玩完一整局约需五分钟。'
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
