/*
  main.js — shared site chrome
  ------------------------------
  Injects the header (brand, nav, language toggle) and footer into every
  page's #site-header / #site-footer placeholders, applies translations to
  any [data-i18n] elements already in the page markup, and rebroadcasts a
  "gp:langchange" event so game pages can re-render their current round in
  the newly selected language without losing progress.

  Every page includes: i18n.js, then main.js, then calls GP.initChrome()
  on DOMContentLoaded.
*/
(function (global) {
  'use strict';

  function basePath() {
    return /\/games\//.test(location.pathname) ? '../' : './';
  }

  /*
    Language persistence without localStorage/sessionStorage: the current
    language travels as a ?lang= query param on every internal link. This
    keeps the "no storage dependency" requirement while still letting the
    choice survive navigation between the home page and a game page.
  */
  function langFromURL() {
    var params = new URLSearchParams(location.search);
    var lang = params.get('lang');
    return GP_I18N.availableLangs().indexOf(lang) !== -1 ? lang : null;
  }

  function withLang(href, lang) {
    try {
      var url = new URL(href, location.href);
      if (url.origin !== location.origin) return href;
      if (lang === 'en') {
        url.searchParams.delete('lang');
      } else {
        url.searchParams.set('lang', lang);
      }
      return url.pathname + url.search + url.hash;
    } catch (e) {
      return href;
    }
  }

  function syncInternalLinks() {
    var lang = GP_I18N.getLang();
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#') return;
      if (/^(mailto:|tel:)/i.test(href)) return;
      a.setAttribute('href', withLang(href, lang));
    });
  }

  function headerHTML(base) {
    var t = GP_I18N.t;
    return (
      '<div class="container nav-bar">' +
        '<a class="brand" href="' + base + 'index.html">' +
          '<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">' +
            '<path class="brand-mark-path" d="M7 34 C 15 30, 1 25, 9 20 C 17 15, 3 12, 11 8 C 16 5, 22 9, 27 6 C 30 4, 31 8, 33 6" />' +
            '<circle class="brand-mark-start" cx="7" cy="33" r="2.4" />' +
            '<circle class="brand-mark-end" cx="33" cy="7" r="3" />' +
          '</svg>' +
          '<span data-i18n="common.brand">' + t('common.brand') + '</span>' +
        '</a>' +
        '<nav aria-label="Primary">' +
          '<ul class="nav-links">' +
            '<li><a href="' + base + 'index.html" data-nav="home">' + t('nav.home') + '</a></li>' +
            '<li><a href="' + base + 'index.html#games-hub" data-nav="games">' + t('nav.games') + '</a></li>' +
            '<li><a href="' + base + 'index.html#why" data-nav="why">' + t('nav.why') + '</a></li>' +
            '<li><a href="' + base + 'index.html#accessibility" data-nav="accessibility">' + t('nav.accessibility') + '</a></li>' +
          '</ul>' +
        '</nav>' +
        '<div class="nav-right">' +
          '<div class="lang-toggle" role="group" aria-label="Language / 语言">' +
            '<button type="button" data-lang="en">' + t('nav.langEn') + '</button>' +
            '<button type="button" data-lang="zh">' + t('nav.langZh') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function footerHTML(base) {
    var t = GP_I18N.t;
    return (
      '<div class="container footer-grid">' +
        '<p>' + t('footer.tagline') + '</p>' +
        '<ul class="footer-links">' +
          '<li><a href="' + base + 'index.html#games-hub">' + t('nav.games') + '</a></li>' +
          '<li><a href="' + base + 'index.html#why">' + t('nav.why') + '</a></li>' +
          '<li><a href="' + base + 'index.html#accessibility">' + t('nav.accessibility') + '</a></li>' +
          '<li><a href="' + base + 'index.html#language">' + t('language.title') + '</a></li>' +
        '</ul>' +
        '<p class="disclaimer">' + t('footer.disclaimer') + '</p>' +
        '<p>' + t('footer.rights') + '</p>' +
      '</div>'
    );
  }

  function markActiveNav() {
    var onHome = !/\/games\//.test(location.pathname);
    document.querySelectorAll('[data-nav]').forEach(function (a) {
      if (onHome && a.getAttribute('data-nav') === 'home' && !location.hash) {
        a.setAttribute('aria-current', 'page');
      } else {
        a.removeAttribute('aria-current');
      }
    });
  }

  function applyTranslations(root) {
    root = root || document;
    root.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = GP_I18N.t(el.getAttribute('data-i18n'));
    });
    root.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', GP_I18N.t(el.getAttribute('data-i18n-aria')));
    });
  }

  function updateLangButtons() {
    var lang = GP_I18N.getLang();
    document.querySelectorAll('.lang-toggle [data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });
  }

  function updatePartialNote() {
    var note = document.getElementById('zh-note');
    if (!note) return;
    var show = GP_I18N.isPartial(GP_I18N.getLang());
    note.hidden = !show;
    if (show) {
      note.textContent = GP_I18N.getLang() === 'zh'
        ? '中文内容仍在完善中，部分文字暂时以英文显示。'
        : '';
    }
  }

  function wireLangToggle() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-lang]');
      if (!btn) return;
      var lang = btn.getAttribute('data-lang');
      GP_I18N.setLang(lang);
      var newUrl = withLang(location.pathname + location.search + location.hash, lang);
      history.replaceState(null, '', newUrl);
    });
  }

  function rerenderChrome() {
    var base = basePath();
    var header = document.getElementById('site-header');
    var footer = document.getElementById('site-footer');
    if (header) header.innerHTML = headerHTML(base);
    if (footer) footer.innerHTML = footerHTML(base);
    markActiveNav();
    updateLangButtons();
    applyTranslations(document);
    updatePartialNote();
    syncInternalLinks();
  }

  function initChrome() {
    var urlLang = langFromURL();
    if (urlLang && urlLang !== GP_I18N.getLang()) {
      GP_I18N.setLang(urlLang);
    }

    rerenderChrome();
    wireLangToggle();
    var yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    GP_I18N.onChange(function () {
      rerenderChrome();
      document.dispatchEvent(new CustomEvent('gp:langchange'));
    });
  }

  function showToast(message) {
    var toast = document.getElementById('gp-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'gp-toast';
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 2600);
  }

  global.GP = {
    initChrome: initChrome,
    applyTranslations: applyTranslations,
    basePath: basePath,
    showToast: showToast,
    withLang: withLang
  };
})(window);
