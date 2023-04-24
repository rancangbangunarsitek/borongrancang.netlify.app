/*! madxartwork-pro - v3.11.6 - 14-03-2023 */
"use strict";
(self["webpackChunkmadxartwork_pro"] = self["webpackChunkmadxartwork_pro"] || []).push([["search-form"],{

/***/ "../modules/theme-elements/assets/js/frontend/handlers/search-form.js":
/*!****************************************************************************!*\
  !*** ../modules/theme-elements/assets/js/frontend/handlers/search-form.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = madxartworkModules.frontend.handlers.Base.extend({
  getDefaultSettings() {
    return {
      selectors: {
        wrapper: '.madxartwork-search-form',
        container: '.madxartwork-search-form__container',
        icon: '.madxartwork-search-form__icon',
        input: '.madxartwork-search-form__input',
        toggle: '.madxartwork-search-form__toggle',
        submit: '.madxartwork-search-form__submit',
        closeButton: '.dialog-close-button'
      },
      classes: {
        isFocus: 'madxartwork-search-form--focus',
        isFullScreen: 'madxartwork-search-form--full-screen',
        lightbox: 'madxartwork-lightbox'
      }
    };
  },
  getDefaultElements() {
    var selectors = this.getSettings('selectors'),
      elements = {};
    elements.$wrapper = this.$element.find(selectors.wrapper);
    elements.$container = this.$element.find(selectors.container);
    elements.$input = this.$element.find(selectors.input);
    elements.$icon = this.$element.find(selectors.icon);
    elements.$toggle = this.$element.find(selectors.toggle);
    elements.$submit = this.$element.find(selectors.submit);
    elements.$closeButton = this.$element.find(selectors.closeButton);
    return elements;
  },
  bindEvents() {
    var self = this,
      $container = self.elements.$container,
      $closeButton = self.elements.$closeButton,
      $input = self.elements.$input,
      $wrapper = self.elements.$wrapper,
      $icon = self.elements.$icon,
      $toggle = self.elements.$toggle,
      skin = this.getElementSettings('skin'),
      classes = this.getSettings('classes');
    const toggleFullScreenSearch = () => {
      $container.toggleClass(classes.isFullScreen).toggleClass(classes.lightbox);
      $input.trigger('focus');
    };
    if ('full_screen' === skin) {
      // Activate full-screen mode on mouse click.
      $toggle.on('click', function () {
        toggleFullScreenSearch();
      });

      // Activate full-screen mode on Enter keyup.
      $toggle.on('keyup', function (event) {
        const ENTER_KEY = 13;
        if (ENTER_KEY === event.keyCode) {
          toggleFullScreenSearch();
        }
      });

      // Deactivate full-screen mode on click or on esc.
      $container.on('click', function (event) {
        if ($container.hasClass(classes.isFullScreen) && $container[0] === event.target) {
          $container.removeClass(classes.isFullScreen).removeClass(classes.lightbox);
        }
      });
      $closeButton.on('click', function () {
        $container.removeClass(classes.isFullScreen).removeClass(classes.lightbox);
      });
      madxartworkFrontend.elements.$document.on('keyup', function (event) {
        const ESC_KEY = 27;
        if (ESC_KEY === event.keyCode) {
          if ($container.hasClass(classes.isFullScreen)) {
            $container.trigger('click');
          }
        }
      });
    } else {
      // Apply focus style on wrapper element when input is focused
      $input.on({
        focus() {
          $wrapper.addClass(classes.isFocus);
        },
        blur() {
          $wrapper.removeClass(classes.isFocus);
        }
      });
    }
    if ('minimal' === skin) {
      // Apply focus style on wrapper element when icon is clicked in minimal skin
      $icon.on('click', function () {
        $wrapper.addClass(classes.isFocus);
        $input.trigger('focus');
      });
    }
  }
});
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=search-form.745c314db888d6579f01.bundle.js.map