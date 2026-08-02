/*
  memory-lane.js — recognition game
  ------------------------------------
  Each round shows 3 large cards; tapping one answers immediately (this is
  a recognition activity, not a quiz to labour over). Correct answers get
  a warm confirmation; other answers get a gentle, non-judgemental note
  and the correct card is highlighted so the round still ends on a clear,
  calm note.
*/
(function (global) {
  'use strict';

  var game = GP_GAMES.memoryLane;
  var total = game.maxRounds;
  var roundIndex = 0;
  var els = {};

  function t(key, vars) { return GP_I18N.t(key, vars); }

  function renderRound() {
    var round = game.rounds[roundIndex];
    var ns = 'memoryLane.rounds.' + round.id + '.';

    GP_SHELL.renderProgress(els.progress, roundIndex + 1, total);
    GP_SHELL.clearFeedback(els.feedback);
    els.actions.innerHTML = '';

    els.body.innerHTML = '';
    var prompt = GP_SHELL.el('h2', { className: 'game-prompt', text: t(ns + 'prompt') });
    var grid = GP_SHELL.el('div', { className: 'choice-grid', attrs: { role: 'group', 'aria-label': t(ns + 'prompt') } });

    var buttons = [];
    GP_SHELL.shuffled(round.options).forEach(function (opt) {
      var label = t(ns + opt.id);
      var btn = GP_SHELL.buildChoiceButton({
        icon: opt.icon,
        label: label,
        onClick: function () { handleAnswer(round, opt, buttons); }
      });
      buttons.push({ el: btn, opt: opt });
      grid.appendChild(btn);
    });

    els.body.appendChild(prompt);
    els.body.appendChild(grid);
  }

  function handleAnswer(round, chosen, buttons) {
    var ns = 'memoryLane.rounds.' + round.id + '.';
    buttons.forEach(function (b) {
      b.el.disabled = true;
      b.el.setAttribute('aria-pressed', String(b.opt === chosen));
      if (b.opt.correct) b.el.setAttribute('data-result', 'correct');
    });

    if (chosen.correct) {
      GP_SHELL.setFeedback(els.feedback, {
        variant: 'success',
        icon: '🌿',
        title: t('memoryLane.feedbackCorrectTitle'),
        body: t('memoryLane.feedbackCorrectBody')
      });
    } else {
      var correctOpt = round.options.filter(function (o) { return o.correct; })[0];
      GP_SHELL.setFeedback(els.feedback, {
        variant: 'gentle',
        icon: '🌤️',
        title: t('memoryLane.feedbackGentleTitle'),
        body: t('memoryLane.feedbackGentleBody', { answer: t(ns + correctOpt.id) })
      });
    }

    showContinue();
  }

  function showContinue() {
    els.actions.innerHTML = '';
    var isLast = roundIndex >= total - 1;
    var btn = GP_SHELL.el('button', {
      className: 'btn btn-primary btn-lg',
      text: t('shell.continue'),
      attrs: { type: 'button' }
    });
    btn.addEventListener('click', function () {
      roundIndex += 1;
      if (roundIndex >= total) {
        showResults();
      } else {
        renderRound();
        els.progress.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    });
    els.actions.appendChild(btn);
    btn.focus();
  }

  function showResults() {
    GP_SHELL.clearFeedback(els.feedback);
    els.progress.innerHTML = '';
    els.actions.innerHTML = '';
    GP_SHELL.renderResults(els.body, {
      total: total,
      onPlayAgain: function () {
        roundIndex = 0;
        renderRound();
      }
    });
  }

  function init() {
    els.progress = document.getElementById('game-progress');
    els.feedback = document.getElementById('game-feedback');
    els.body = document.getElementById('game-body');
    els.actions = document.getElementById('game-actions');
    roundIndex = 0;
    renderRound();

    document.addEventListener('gp:langchange', function () {
      renderRound();
    });
  }

  global.GP_MemoryLane = { init: init };
})(window);
