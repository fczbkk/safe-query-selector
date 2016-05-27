'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function constructQueryFunction(method, default_value) {
  return function (selector) {
    var root = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

    try {
      return root[method](selector);
    } catch (error) {
      return default_value;
    }
  };
}

/**
 * Returns first matching element that is child of root node, or `null` if not found.
 * @name safeQuerySelector
 * @param {*} selector CSS selector. Should be string.
 * @param {*} [root=document] Node inside which the selector will be applied.
 * @returns {Element|null}
 */
var safeQuerySelector = exports.safeQuerySelector = constructQueryFunction('querySelector', null);

/**
 * Returns collection of all matching elements that are children of root node, or an empty array if not found.
 * @name safeQuerySelectorAll
 * @param {*} selector CSS selector. Should be string.
 * @param {*} [root=document] Node inside which the selector will be applied.
 * @returns {Array}
 */
var safeQuerySelectorAll = exports.safeQuerySelectorAll = constructQueryFunction('querySelectorAll', []);