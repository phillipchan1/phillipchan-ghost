(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/post"],{

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

/***/ "./js/post.js":
/*!********************!*\
  !*** ./js/post.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! medium-zoom */ "./node_modules/medium-zoom/dist/medium-zoom.esm.js");
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fitvids */ "./node_modules/fitvids/index.js");
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fitvids__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stickybits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stickybits */ "./node_modules/stickybits/dist/stickybits.es.js");
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/esm/index.all.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
/* harmony import */ var swiper_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/swiper.min.css */ "./node_modules/swiper/css/swiper.min.css");
/* harmony import */ var swiper_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers */ "./js/helpers.js");








jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var $copyLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-copy-link');
  var $inputLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-link');
  var $relatedSliderContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-related-slider');
  fitvids__WEBPACK_IMPORTED_MODULE_2___default()('.js-post-content');

  var adjustShare = function adjustShare() {
    var $stickyShare = null;

    if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["isMobile"])()) {
      $stickyShare = Object(stickybits__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-sticky', {
        stickyBitStickyOffset: 150
      });
    } else {
      if ($stickyShare) {
        $stickyShare.cleanup();
      }
    }
  };

  var onResizing = function onResizing() {
    adjustShare();
  };

  var adjustImageGallery = function adjustImageGallery() {
    var images = document.querySelectorAll('.kg-gallery-image img');

    for (var i = 0, len = images.length; i < len; i++) {
      var container = images[i].closest('.kg-gallery-image');
      var width = images[i].attributes.width.value;
      var height = images[i].attributes.height.value;
      var ratio = width / height;
      container.style.flex = "".concat(ratio, " 1 0%");
    }
  };

  adjustShare();
  adjustImageGallery();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-post-content').find('figure img').each(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('figure').hasClass('kg-bookmark-card')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('js-zoomable');
    }

    var $figcaption = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('figcaption');

    if ($figcaption) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('alt', $figcaption.text());
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('alt', '');
    }
  });
  Object(tippy_js__WEBPACK_IMPORTED_MODULE_4__["default"])('.js-copy-tooltip', {
    trigger: 'click',
    arrow: true
  });
  $copyLink.click(function () {
    $inputLink[0].select();
    $inputLink[0].setSelectionRange(0, 99999);
    document.execCommand('copy');
    $inputLink.blur();
  });

  if ($relatedSliderContainer.length > 0) {
    var featuredSwiper = new swiper__WEBPACK_IMPORTED_MODULE_5__["default"]('.js-related-slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
      freeMode: true,
      breakpoints: {
        768: {
          spaceBetween: 20,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          allowTouchMove: true
        },
        1280: {
          spaceBetween: 40,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          allowTouchMove: false
        },
        1440: {
          slidesPerView: 4,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          spaceBetween: 40,
          allowTouchMove: false
        }
      }
    });
  }

  Object(medium_zoom__WEBPACK_IMPORTED_MODULE_1__["default"])('.js-zoomable');
  window.addEventListener('resize', onResizing, {
    passive: true
  });
});

/***/ }),

/***/ 3:
/*!**************************!*\
  !*** multi ./js/post.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/phillipchan/Work/phillipchan-ghost/content/themes/weiss-pro/src/js/post.js */"./js/post.js");


/***/ })

},[[3,"/js/manifest","/js/vendor"]]]);