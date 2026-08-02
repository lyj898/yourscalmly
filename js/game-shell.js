/*
  game-shell.js — small shared toolkit used by every mini-game
  ----------------------------------------------------------------
  Not a framework — just the handful of DOM builders every game needs so
  they look and behave the same way: a "Round X of Y" progress readout,
  a gentle (never punishing) feedback banner, large accessible choice
  buttons, and a consistent results screen. Each game's own script
  (memory-lane.js, find-the-group.js, tune-match.js) owns its round state
  and calls into these helpers.
*/
(function (global) {
  'use strict';

  /* Fisher-Yates shuffle, returns a new array — never mutates the input. */
  function shuffled(array) {
    var copy = array.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function el(tag, opts) {
    var node = document.createElement(tag);
    opts = opts || {};
    if (opts.className) node.className = opts.className;
    if (opts.text) node.textContent = opts.text;
    if (opts.html) node.innerHTML = opts.html;
    if (opts.attrs) {
      Object.keys(opts.attrs).forEach(function (k) { node.setAttribute(k, opts.attrs[k]); });
    }
    return node;
  }

  /* Progress: "Round X of Y" label + dot trail. Re-render each round. */
  function renderProgress(container, current, total) {
    container.innerHTML = '';
    var label = el('p', {
      className: 'game-progress-label',
      text: GP_I18N.t('shell.roundLabel', { current: current, total: total })
    });
    var dots = el('ul', { className: 'progress-dots', attrs: { 'aria-hidden': 'true' } });
    for (var i = 1; i <= total; i++) {
      var state = i < current ? 'done' : (i === current ? 'current' : 'upcoming');
      dots.appendChild(el('li', { attrs: { 'data-state': state } }));
    }
    container.appendChild(label);
    container.appendChild(dots);
  }

  /* Feedback banner. variant: 'success' | 'gentle'. Announced via aria-live. */
  function setFeedback(container, opts) {
    container.className = 'feedback-banner is-visible ' + opts.variant;
    container.setAttribute('role', 'status');
    container.setAttribute('aria-live', 'polite');
    container.innerHTML =
      '<span class="feedback-icon" aria-hidden="true">' + opts.icon + '</span>' +
      '<span><strong>' + opts.title + '</strong><br>' + opts.body + '</span>';
  }

  function clearFeedback(container) {
    container.className = 'feedback-banner';
    container.innerHTML = '';
  }

  /* A single large, keyboard-accessible choice card. */
  function buildChoiceButton(opts) {
    var btn = el('button', {
      className: 'choice-card',
      attrs: {
        type: 'button',
        'aria-pressed': 'false'
      }
    });
    if (opts.ariaLabel) btn.setAttribute('aria-label', opts.ariaLabel);
    if (opts.icon) btn.appendChild(el('span', { className: 'choice-icon', text: opts.icon, attrs: { 'aria-hidden': 'true' } }));
    btn.appendChild(el('span', { text: opts.label }));
    if (opts.onClick) btn.addEventListener('click', opts.onClick);
    return btn;
  }

  /* Consistent, encouraging results screen. Never shows a "score" — just warm closure. */
  function renderResults(container, opts) {
    var t = GP_I18N.t;
    container.innerHTML = '';
    var panel = el('div', { className: 'results-panel' });
    panel.appendChild(el('div', { className: 'results-icon', text: '🌿', attrs: { 'aria-hidden': 'true' } }));
    panel.appendChild(el('h2', { text: t('shell.resultsTitle') }));
    panel.appendChild(el('p', {
      className: 'results-summary',
      text: t('shell.resultsBody', { total: opts.total })
    }));
    panel.appendChild(el('p', { text: t('shell.tryAgainHint'), className: 'take-your-time' }));

    var actions = el('div', { className: 'game-actions' });
    var playAgainBtn = el('button', {
      className: 'btn btn-primary btn-lg',
      text: t('shell.playAgain'),
      attrs: { type: 'button' }
    });
    playAgainBtn.addEventListener('click', opts.onPlayAgain);

    var backLink = el('a', {
      className: 'btn btn-ghost btn-lg',
      text: t('shell.backToGames'),
      attrs: { href: GP.withLang(GP.basePath() + 'index.html#games-hub', GP_I18N.getLang()) }
    });

    actions.appendChild(playAgainBtn);
    actions.appendChild(backLink);
    panel.appendChild(actions);
    container.appendChild(panel);

    playAgainBtn.focus();
  }

  global.GP_SHELL = {
    el: el,
    shuffled: shuffled,
    renderProgress: renderProgress,
    setFeedback: setFeedback,
    clearFeedback: clearFeedback,
    buildChoiceButton: buildChoiceButton,
    renderResults: renderResults
  };
})(window);
