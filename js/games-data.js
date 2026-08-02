/*
  games-data.js — structured, data-driven game definitions
  ----------------------------------------------------------
  Logic and structure only (ids, icons, which option is correct, melody
  notes). All display text is looked up through GP_I18N.t() using the
  textKey values below, so adding a language only means adding translation
  strings — no changes needed here. Adding a new game later means adding a
  new entry to GP_GAMES following the same shape and writing a small
  render module like memory-lane.js.
*/
(function (global) {
  'use strict';

  var GP_GAMES = {
    memoryLane: {
      id: 'memory-lane',
      textNS: 'memoryLane',
      icon: '🍵',
      maxRounds: 5,
      rounds: [
        {
          id: 'r1',
          options: [
            { id: 'a', icon: '☕', correct: true },
            { id: 'b', icon: '🚲', correct: false },
            { id: 'c', icon: '☂️', correct: false }
          ]
        },
        {
          id: 'r2',
          options: [
            { id: 'a', icon: '🧣', correct: true },
            { id: 'b', icon: '🕶️', correct: false },
            { id: 'c', icon: '👡', correct: false }
          ]
        },
        {
          id: 'r3',
          options: [
            { id: 'a', icon: '🧺', correct: true },
            { id: 'b', icon: '⛰️', correct: false },
            { id: 'c', icon: '🖥️', correct: false }
          ]
        },
        {
          id: 'r4',
          options: [
            { id: 'a', icon: '🕰️', correct: true },
            { id: 'b', icon: '🍳', correct: false },
            { id: 'c', icon: '📚', correct: false }
          ]
        },
        {
          id: 'r5',
          options: [
            { id: 'a', icon: '🖋️', correct: true },
            { id: 'b', icon: '🚿', correct: false },
            { id: 'c', icon: '⚽', correct: false }
          ]
        }
      ]
    },

    findGroup: {
      id: 'find-the-group',
      textNS: 'findGroup',
      icon: '🧺',
      maxRounds: 5,
      rounds: [
        {
          id: 'r1',
          cards: [
            { id: 'a', icon: '🍎', inGroup: true },
            { id: 'b', icon: '🍌', inGroup: true },
            { id: 'c', icon: '🍊', inGroup: true },
            { id: 'd', icon: '🚌', inGroup: false },
            { id: 'e', icon: '🔨', inGroup: false }
          ]
        },
        {
          id: 'r2',
          cards: [
            { id: 'a', icon: '🚲', inGroup: true },
            { id: 'b', icon: '🚆', inGroup: true },
            { id: 'c', icon: '🚌', inGroup: true },
            { id: 'd', icon: '🥄', inGroup: false },
            { id: 'e', icon: '👕', inGroup: false }
          ]
        },
        {
          id: 'r3',
          cards: [
            { id: 'a', icon: '☕', inGroup: true },
            { id: 'b', icon: '🍳', inGroup: true },
            { id: 'c', icon: '🍵', inGroup: true },
            { id: 'd', icon: '☂️', inGroup: false },
            { id: 'e', icon: '🚲', inGroup: false }
          ]
        },
        {
          id: 'r4',
          cards: [
            { id: 'a', icon: '🧣', inGroup: true },
            { id: 'b', icon: '👕', inGroup: true },
            { id: 'c', icon: '🎩', inGroup: true },
            { id: 'd', icon: '🍎', inGroup: false },
            { id: 'e', icon: '☕', inGroup: false }
          ]
        },
        {
          id: 'r5',
          cards: [
            { id: 'a', icon: '🌷', inGroup: true },
            { id: 'b', icon: '🚿', inGroup: true },
            { id: 'c', icon: '🌳', inGroup: true },
            { id: 'd', icon: '🚆', inGroup: false },
            { id: 'e', icon: '👕', inGroup: false }
          ]
        }
      ]
    },

    tuneMatch: {
      id: 'tune-match',
      textNS: 'tuneMatch',
      icon: '🎵',
      maxRounds: 5,
      choices: [
        { id: 'morning', icon: '🌅', textKey: 'choiceMorning' },
        { id: 'evening', icon: '🌙', textKey: 'choiceEvening' },
        { id: 'dance', icon: '💃', textKey: 'choiceDance' }
      ],
      /*
        Melodies are generated in-browser with the Web Audio API (see
        tune-match.js) — no audio files, nothing to download, nothing to
        licence. Each entry is a short, original sequence of
        { note: <midi-ish note name>, duration: seconds, gap: seconds }.
      */
      melodies: {
        morning: {
          tempo: 'slow',
          notes: [
            { freq: 261.63, duration: 0.5, gap: 0.08 },
            { freq: 329.63, duration: 0.5, gap: 0.08 },
            { freq: 392.0, duration: 0.5, gap: 0.08 },
            { freq: 523.25, duration: 0.9, gap: 0 }
          ]
        },
        eveningA: {
          tempo: 'slow',
          notes: [
            { freq: 392.0, duration: 0.55, gap: 0.08 },
            { freq: 329.63, duration: 0.55, gap: 0.08 },
            { freq: 261.63, duration: 0.55, gap: 0.08 },
            { freq: 196.0, duration: 0.9, gap: 0 }
          ]
        },
        danceA: {
          tempo: 'fast',
          notes: [
            { freq: 523.25, duration: 0.16, gap: 0.05 },
            { freq: 392.0, duration: 0.16, gap: 0.05 },
            { freq: 523.25, duration: 0.16, gap: 0.05 },
            { freq: 392.0, duration: 0.16, gap: 0.05 },
            { freq: 659.25, duration: 0.35, gap: 0 }
          ]
        },
        danceB: {
          tempo: 'fast',
          notes: [
            { freq: 440.0, duration: 0.15, gap: 0.05 },
            { freq: 554.37, duration: 0.15, gap: 0.05 },
            { freq: 440.0, duration: 0.15, gap: 0.05 },
            { freq: 554.37, duration: 0.15, gap: 0.05 },
            { freq: 659.25, duration: 0.32, gap: 0 }
          ]
        },
        morningB: {
          tempo: 'slow',
          notes: [
            { freq: 293.66, duration: 0.5, gap: 0.08 },
            { freq: 349.23, duration: 0.5, gap: 0.08 },
            { freq: 440.0, duration: 0.5, gap: 0.08 },
            { freq: 587.33, duration: 0.9, gap: 0 }
          ]
        }
      },
      /* Each round references one melody key and the choice id it matches. */
      rounds: [
        { id: 'r1', melody: 'morning', answer: 'morning' },
        { id: 'r2', melody: 'danceA', answer: 'dance' },
        { id: 'r3', melody: 'eveningA', answer: 'evening' },
        { id: 'r4', melody: 'danceB', answer: 'dance' },
        { id: 'r5', melody: 'morningB', answer: 'morning' }
      ]
    }
  };

  global.GP_GAMES = GP_GAMES;
})(window);
