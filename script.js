/* ============================================================
   Ahnenecho Landing Page - script.js
   Bilingual DE/EN toggle | Cookie Banner | Smooth nav
   ============================================================ */

(function () {
  'use strict';

  // ---- Language Management ----------------------------------------
  var LANG_KEY = 'ahnenecho_lang';
  var currentLang = localStorage.getItem(LANG_KEY) || 'de';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);

    // Update all data-de / data-en elements
    document.querySelectorAll('[data-de]').forEach(function (el) {
      var text = lang === 'de' ? el.getAttribute('data-de') : el.getAttribute('data-en');
      if (text !== null) el.textContent = text;
    });

    // Update elements that use innerHTML (data-de-html / data-en-html)
    document.querySelectorAll('[data-de-html]').forEach(function (el) {
      var html = lang === 'de' ? el.getAttribute('data-de-html') : el.getAttribute('data-en-html');
      if (html !== null) el.innerHTML = html;
    });

    // Update placeholders
    document.querySelectorAll('[data-de-placeholder]').forEach(function (el) {
      var ph = lang === 'de' ? el.getAttribute('data-de-placeholder') : el.getAttribute('data-en-placeholder');
      if (ph !== null) el.placeholder = ph;
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Sync lang buttons
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update <title> and meta description
    var titleEl = document.querySelector('title[data-de]');
    if (titleEl) {
      document.title = lang === 'de' ? titleEl.getAttribute('data-de') : titleEl.getAttribute('data-en');
    }

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      var desc = lang === 'de' ? metaDesc.getAttribute('data-de') : metaDesc.getAttribute('data-en');
      if (desc) metaDesc.setAttribute('content', desc);
    }
  }

  // ---- Cookie Banner -----------------------------------------------
  var COOKIE_KEY = 'ahnenecho_cookie_accepted';

  function initCookieBanner() {
    if (localStorage.getItem(COOKIE_KEY)) return;
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;
    setTimeout(function () { banner.classList.add('show'); }, 1200);

    document.getElementById('cookie-accept').addEventListener('click', function () {
      localStorage.setItem(COOKIE_KEY, '1');
      banner.classList.remove('show');
    });
    document.getElementById('cookie-decline').addEventListener('click', function () {
      localStorage.setItem(COOKIE_KEY, '0');
      banner.classList.remove('show');
    });
  }

  // ---- Mobile Menu -------------------------------------------------
  function initMobileMenu() {
    var hamburger = document.getElementById('hamburger');
    var mobileNav = document.getElementById('mobile-nav');
    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileNav.classList.remove('open'); });
    });
  }

  // ---- Scroll Animations -------------------------------------------
  function initScrollAnimations() {
    var items = document.querySelectorAll('.fade-up');
    if (!items.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach(function (el) { observer.observe(el); });
  }

  // ---- Sticky header shadow ----------------------------------------
  function initHeaderScroll() {
    var header = document.querySelector('.header');
    if (!header) return;
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 10
        ? '0 2px 12px rgba(0,0,0,.10)'
        : '';
    }, { passive: true });
  }

  // ---- Init --------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });

    // Apply stored / default language
    applyLanguage(currentLang);

    initCookieBanner();
    initMobileMenu();
    initScrollAnimations();
    initHeaderScroll();
  });
})();
