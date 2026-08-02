/*
  find-the-group.js — simple categorisation game
  --------------------------------------------------
  Cards can be tapped on and off freely before checking, so nothing is
  final until the player chooses "Check my answer". After checking, the
  correct group is always revealed clearly — the goal is a satisfying
  answer, not a graded test.
*/
(function (global) {
  'use strict';

  var game = GP_GAMES.findGroup;
  var total = game.maxRounds;
  var roundIndex = 0;
  var els = {};
  var selected = {};
  var currentCards = [];

  function t(key, vars) { return GP_I18N.t(key, vars); }

  function renderRound() {
    var round = game.rounds[roundIndex];
    var ns = 'findGroup.rounds.' + round.id + '.';
    selected = {};

    GP_SHELL.renderProgress(els.progress, roundIndex + 1, total);
    GP_SHELL.clearFeedback(els.feedback);

    var promptText = t('findGroup.promptTemplate', {
      count: t(ns + 'count'),
      category: t(ns + 'category')
    });

    els.body.innerHTML = '';
    var prompt = GP_SHELL.el('h2', { className: 'game-prompt', text: promptText });
    var grid = GP_SHELL.el('div', { className: 'choice-grid', attrs: { role: 'group', 'aria-label': promptText } });

    currentCards = GP_SHELL.shuffled(round.cards);
    currentCards.forEach(function (card) {
      var label = t(ns + card.id);
      var btn = GP_SHELL.buildChoiceButton({
        icon: card.icon,
        label: label,
        ariaLabel: label,
        onClick: function () { toggleCard(card.id, btn); }
      });
      grid.appendChild(btn);
    });

    els.body.appendChild(prompt);
    els.body.appendChild(grid);

    renderCheckAction(round);
  }

  function toggleCard(cardId, btn) {
    var isSelected = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!isSelected));
    selected[cardId] = !isSelected;
  }

  function renderCheckAction(round) {
    els.actions.innerHTML = '';
    var btn = GP_SHELL.el('button', {
      className: 'btn btn-primary btn-lg',
      text: t('shell.checkAnswer'),
      attrs: { type: 'button' }
    });
    btn.addEventListener('click', function () { checkAnswer(round); });
    els.actions.appendChild(btn);
  }

  function checkAnswer(round) {
    var ns = 'findGroup.rounds.' + round.id + '.';
    var cardButtons = els.body.querySelectorAll('.choice-card');
    var allCorrect = true;

    currentCards.forEach(function (card, i) {
      var btn = cardButtons[i];
      btn.disabled = true;
      var wasSelected = selected[card.id] === true;
      if (card.inGroup) {
        btn.setAttribute('data-result', 'correct');
        if (!wasSelected) allCorrect = false;
      } else if (wasSelected) {
        allCorrect = false;
      }
    });

    if (allCorrect) {
      GP_SHELL.setFeedback(els.feedback, {
        variant: 'success',
        icon: '🌿',
        title: t('findGroup.feedbackAllCorrectTitle'),
        body: t('findGroup.feedbackAllCorrectBody')
      });
    } else {
      var answers = round.cards
        .filter(function (c) { return c.inGroup; })
        .map(function (c) { return t(ns + c.id); })
        .join(', ');
      GP_SHELL.setFeedback(els.feedback, {
        variant: 'gentle',
        icon: '🌤️',
        title: t('findGroup.feedbackPartialTitle'),
        body: t('findGroup.feedbackPartialBody', { answers: answers })
      });
    }

    showContinue();
  }

  function showContinue() {
    els.actions.innerHTML = '';
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

  global.GP_FindGroup = { init: init };
})(window);
