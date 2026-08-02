/*
  tune-match.js — melody mood-matching game
  ----------------------------------------------
  Melodies are short, original sequences generated in-browser with the Web
  Audio API (no audio files to load, nothing to license). If Web Audio
  isn't available, the play button is replaced with a plain-text
  description of the tune's character so the round stays playable.
*/
(function (global) {
  'use strict';

  var game = GP_GAMES.tuneMatch;
  var total = game.maxRounds;
  var roundIndex = 0;
  var els = {};
  var audioCtx = null;

  function t(key, vars) { return GP_I18N.t(key, vars); }

  function audioSupported() {
    return !!(window.AudioContext || window.webkitAudioContext);
  }

  function getAudioContext() {
    if (!audioCtx) {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      audioCtx = new Ctx();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  function playMelody(melody) {
    var ctx = getAudioContext();
    var startAt = ctx.currentTime + 0.05;
    melody.notes.forEach(function (note) {
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = note.freq;
      osc.connect(gain);
      gain.connect(ctx.destination);
      gain.gain.setValueAtTime(0.0001, startAt);
      gain.gain.linearRampToValueAtTime(0.22, startAt + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startAt + note.duration);
      osc.start(startAt);
      osc.stop(startAt + note.duration + 0.03);
      startAt += note.duration + note.gap;
    });
  }

  function renderRound() {
    var round = game.rounds[roundIndex];
    var melody = game.melodies[round.melody];

    GP_SHELL.renderProgress(els.progress, roundIndex + 1, total);
    GP_SHELL.clearFeedback(els.feedback);
    els.actions.innerHTML = '';

    els.body.innerHTML = '';
    var prompt = GP_SHELL.el('h2', { className: 'game-prompt', text: t('tuneMatch.roundPrompt') });
    els.body.appendChild(prompt);

    var player = GP_SHELL.el('div', { className: 'tune-player' });
    var hintText = melody.tempo === 'fast' ? t('tuneMatch.tempoFast') : t('tuneMatch.tempoSlow');

    if (audioSupported()) {
      var playBtn = GP_SHELL.el('button', {
        className: 'btn btn-primary btn-lg tune-play-btn',
        text: '🔊 ' + t('tuneMatch.playButton'),
        attrs: { type: 'button' }
      });
      var played = false;
      playBtn.addEventListener('click', function () {
        playMelody(melody);
        if (!played) {
          played = true;
          playBtn.textContent = '🔊 ' + t('tuneMatch.playAgainButton');
        }
      });
      player.appendChild(playBtn);
      player.appendChild(GP_SHELL.el('span', { className: 'tune-hint', text: hintText }));
    } else {
      player.appendChild(GP_SHELL.el('p', { className: 'tune-hint', text: t('tuneMatch.noAudioNote') + ' ' + hintText }));
    }

    els.body.appendChild(player);

    var grid = GP_SHELL.el('div', { className: 'choice-grid', attrs: { role: 'group', 'aria-label': t('tuneMatch.roundPrompt') } });
    var buttons = [];
    GP_SHELL.shuffled(game.choices).forEach(function (choice) {
      var label = t('tuneMatch.' + choice.textKey);
      var btn = GP_SHELL.buildChoiceButton({
        icon: choice.icon,
        label: label,
        onClick: function () { handleAnswer(round, choice, buttons); }
      });
      buttons.push({ el: btn, choice: choice });
      grid.appendChild(btn);
    });
    els.body.appendChild(grid);
  }

  function handleAnswer(round, chosen, buttons) {
    var correctChoice = game.choices.filter(function (c) { return c.id === round.answer; })[0];
    buttons.forEach(function (b) {
      b.el.disabled = true;
      b.el.setAttribute('aria-pressed', String(b.choice === chosen));
      if (b.choice.id === correctChoice.id) b.el.setAttribute('data-result', 'correct');
    });

    var correctLabel = t('tuneMatch.' + correctChoice.textKey);
    if (chosen.id === correctChoice.id) {
      GP_SHELL.setFeedback(els.feedback, {
        variant: 'success',
        icon: '🌿',
        title: t('tuneMatch.feedbackMatchTitle'),
        body: t('tuneMatch.feedbackMatchBody', { answer: correctLabel })
      });
    } else {
      GP_SHELL.setFeedback(els.feedback, {
        variant: 'gentle',
        icon: '🌤️',
        title: t('tuneMatch.feedbackGentleTitle'),
        body: t('tuneMatch.feedbackGentleBody', { answer: correctLabel })
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

  global.GP_TuneMatch = { init: init };
})(window);
