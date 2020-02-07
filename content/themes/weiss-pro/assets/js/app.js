(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-vars-ponyfill */ "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! headroom.js */ "./node_modules/headroom.js/dist/headroom.js");
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/esm/index.all.js");
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ "./js/helpers.js");










__webpack_require__(/*! viewport-units-buggyfill */ "./node_modules/viewport-units-buggyfill/viewport-units-buggyfill.js").init();

Object(css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_0__["default"])({});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  if (Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["isRTL"])()) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').attr('dir', 'rtl').addClass('rtl');
  }

  var $header = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-header');
  var $openMenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-open-menu');
  var $mobileTopbar = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-mobile-topbar');
  var $mobileSubmenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-mobile-submenu');
  var $openSearch = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-open-search');
  var $closeSearch = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-close-search');
  var $search = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-search');
  var $inputSearch = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-input-search');
  var $searchResults = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-search-results');
  var $searchNoResults = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-no-results');
  var $toggleDarkMode = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-toggle-darkmode');
  var $openSecondaryMenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-tooltip-secondary-menu');
  var $closeNotification = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-notification-close');
  var $planPrice = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-plan-price');
  var $desktopTopbarContent = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-desktop-topbar-content');
  var $desktopTopbarNav = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-desktop-topbar-nav');
  var currentSavedTheme = localStorage.getItem('theme');
  var fuse = null;
  var secondaryMenuTippy = null;

  var trySearchFeature = function trySearchFeature() {
    if (typeof ghostSearchApiKey !== 'undefined') {
      getAllPosts(ghostHost, ghostSearchApiKey);
    } else {
      $openSearch.remove();
      $closeSearch.remove();
      $search.remove();
    }
  };

  var getAllPosts = function getAllPosts(host, key) {
    var api = new GhostContentAPI({
      url: host,
      key: key,
      version: 'v2'
    });
    var allPosts = [];
    var fuseOptions = {
      shouldSort: true,
      threshold: 0,
      location: 0,
      distance: 100,
      tokenize: true,
      matchAllTokens: true,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['title', 'custom_excerpt', 'html']
    };
    api.posts.browse({
      limit: 'all',
      fields: 'id, title, url, published_at, custom_excerpt, html'
    }).then(function (posts) {
      for (var i = 0, len = posts.length; i < len; i++) {
        allPosts.push(posts[i]);
      }

      fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_7___default.a(allPosts, fuseOptions);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  var showNotification = function showNotification(typeNotification) {
    var $notification = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".js-alert[data-notification=\"".concat(typeNotification, "\"]"));
    $notification.addClass('opened');
    setTimeout(function () {
      closeNotification($notification);
    }, 5000);
  };

  var closeNotification = function closeNotification($notification) {
    $notification.removeClass('opened');
    var url = window.location.toString();

    if (url.indexOf('?') > 0) {
      var cleanUrl = url.substring(0, url.indexOf('?'));
      window.history.replaceState({}, document.title, cleanUrl);
    }
  };

  var checkForActionParameter = function checkForActionParameter() {
    var action = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getParameterByName"])('action');
    var stripe = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getParameterByName"])('stripe');

    if (action === 'subscribe') {
      showNotification('subscribe');
    }

    if (action === 'signup') {
      window.location = "".concat(ghostHost, "/signup/?action=checkout");
    }

    if (action === 'checkout') {
      showNotification('signup');
    }

    if (action === 'signin') {
      showNotification('signin');
    }

    if (stripe === 'success') {
      showNotification('checkout');
    }
  };

  var toggleDesktopTopbarOverflow = function toggleDesktopTopbarOverflow(disableOverflow) {
    if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["isMobile"])()) {
      if (disableOverflow) {
        $desktopTopbarContent.addClass('toggle-overflow');
        $desktopTopbarNav.addClass('toggle-overflow');
      } else {
        $desktopTopbarContent.removeClass('toggle-overflow');
        $desktopTopbarNav.removeClass('toggle-overflow');
      }
    }
  };

  $openMenu.click(function () {
    $header.toggleClass('opened');
    $openMenu.toggleClass('opened');
    $mobileTopbar.toggleClass('opened');
    $mobileSubmenu.toggleClass('opened');
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
      targets: '.js-mobile-submenu .js-anime',
      translateY: [-25, 0],
      duration: 1000,
      delay: function delay(target, index) {
        return index * 25;
      },
      elasticity: 25
    });
    Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["toggleScrollVertical"])();
  });
  $openSearch.click(function () {
    $search.addClass('opened');
    setTimeout(function () {
      $inputSearch.focus();
    }, 400);

    if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["isMobile"])()) {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["toggleScrollVertical"])();
    }
  });
  $closeSearch.click(function () {
    $inputSearch.blur();
    $search.removeClass('opened');

    if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["isMobile"])()) {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["toggleScrollVertical"])();
    }
  });
  $inputSearch.keyup(function () {
    if ($inputSearch.val().length > 0 && fuse) {
      var results = fuse.search($inputSearch.val());
      var htmlString = '';

      if (results.length > 0) {
        for (var i = 0, len = results.length; i < len; i++) {
          var lastClass = i === len - 1 ? 'last' : '';
          htmlString += "\n          <article class=\"m-result ".concat(lastClass, "\">            <a href=\"").concat(results[i].url, "\" class=\"m-result__link\">              <h3 class=\"m-result__title\">").concat(results[i].title, "</h3>              <p class=\"m-result__meta\">                <span>").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(results[i].published_at), "</span>              </p>            </a>          </article>");
        }

        $searchNoResults.hide();
        $searchResults.html(htmlString);
        $searchResults.show();
      } else {
        $searchResults.html('');
        $searchResults.hide();
        $searchNoResults.show();
      }
    } else {
      $searchResults.html('');
      $searchResults.hide();
      $searchNoResults.hide();
    }
  });
  $toggleDarkMode.change(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).is(':checked')) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').attr('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').attr('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
  $toggleDarkMode.hover(function () {
    toggleDesktopTopbarOverflow(true);
  }, function () {
    toggleDesktopTopbarOverflow(false);
  });
  $closeNotification.click(function () {
    closeNotification(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent());
  });

  if ($planPrice.length > 0) {
    $planPrice.each(function () {
      var planAmount = parseInt(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-plan-price')) / 100;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).html(planAmount);
    });
  }

  jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).keyup(function (e) {
    if (e.key === 'Escape' && $search.hasClass('opened')) {
      $closeSearch.click();
    }
  });

  if (currentSavedTheme) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').attr('data-theme', currentSavedTheme);

    if (currentSavedTheme === 'dark') {
      $toggleDarkMode.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('checked', true);
      });
    }
  } else {
    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["isDarkMode"])()) {
      $toggleDarkMode.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('checked', true);
      });
    }
  }

  if ($header.length > 0) {
    var headroom = new headroom_js__WEBPACK_IMPORTED_MODULE_3___default.a($header[0], {
      tolerance: {
        up: 10,
        down: 0
      },
      onUnpin: function onUnpin() {
        if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["isMobile"])() && secondaryMenuTippy) {
          var desktopSecondaryMenuTippy = secondaryMenuTippy[1];

          if (desktopSecondaryMenuTippy && desktopSecondaryMenuTippy.state.isVisible) {
            desktopSecondaryMenuTippy.hide();
          }
        }
      }
    });
    headroom.init();
  }

  var observer = lozad__WEBPACK_IMPORTED_MODULE_2___default()('.lozad', {
    loaded: function loaded(el) {
      el.classList.add('loaded');
    }
  });
  observer.observe();

  if ($openSecondaryMenu.length > 0) {
    var template = document.getElementById('secondary-navigation-template');
    secondaryMenuTippy = Object(tippy_js__WEBPACK_IMPORTED_MODULE_5__["default"])('.js-tooltip-secondary-menu', {
      content: template.innerHTML,
      arrow: true,
      trigger: 'click',
      interactive: true,
      onShow: function onShow() {
        toggleDesktopTopbarOverflow(true);
      },
      onHidden: function onHidden() {
        toggleDesktopTopbarOverflow(false);
      }
    });
  }

  Object(tippy_js__WEBPACK_IMPORTED_MODULE_5__["default"])('.js-tooltip', {
    arrow: true
  });

  if (typeof disableFadeAnimation === 'undefined' || !disableFadeAnimation) {
    aos__WEBPACK_IMPORTED_MODULE_4___default.a.init({
      once: true,
      startEvent: 'DOMContentLoaded'
    });
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-aos]').addClass('no-aos-animation');
  }

  checkForActionParameter();
  trySearchFeature();
});

/***/ }),

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/*! exports provided: isRTL, isMobile, isDarkMode, toggleScrollVertical, formatDate, getParameterByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRTL", function() { return isRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDarkMode", function() { return isDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleScrollVertical", function() { return toggleScrollVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameterByName", function() { return getParameterByName; });
var isRTL = function isRTL() {
  var $html = document.querySelector('html');
  return $html.getAttribute('lang') === 'ar' || $html.getAttribute('lang') === 'he';
};
var isMobile = function isMobile() {
  return window.matchMedia('(max-width: 767px)').matches;
};
var isDarkMode = function isDarkMode() {
  var darkModeMatcher = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  return darkModeMatcher && darkModeMatcher.matches;
};
var toggleScrollVertical = function toggleScrollVertical() {
  var $body = document.querySelector('body');
  $body.classList.toggle('no-scroll-y');
};
var formatDate = function formatDate(date) {
  if (date) {
    return new Date(date).toLocaleDateString(document.documentElement.lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return '';
};
var getParameterByName = function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp("[?&]".concat(name, "(=([^&#]*)|&|#|$)"));
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

/***/ }),

/***/ 1:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/phillipchan/Work/phillipchan-ghost/content/themes/weiss-pro/src/js/app.js */"./js/app.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);