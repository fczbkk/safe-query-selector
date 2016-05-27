import {safeQuerySelector, safeQuerySelectorAll} from './../src/';


function createElement(classname, parent) {
  const elm = parent.appendChild(document.createElement('div'));
  elm.className = classname;
  return elm;
}


describe('all', function () {

  let wrapper, elm_in_wrapper, elm_in_body;

  beforeEach(function () {
    elm_in_body = createElement('test', document.body);
    wrapper = createElement('wrapper', document.body);
    elm_in_wrapper = createElement('test', wrapper);
  });

  afterEach(function () {
    elm_in_body.parentNode.removeChild(elm_in_body);
    wrapper.parentNode.removeChild(wrapper);
  });

  describe('safeQuerySelector', function () {

    it('should exist', function () {
      expect(safeQuerySelector).toBeDefined();
    });

    it('should return correct result', function () {
      expect(safeQuerySelector('.test', wrapper)).toEqual(elm_in_wrapper);
    });

    it('should use document as default root', function () {
      expect(safeQuerySelector('.test')).toEqual(elm_in_body);
    });

    it('should not throw error on invalid root', function () {
      const fn = function () {safeQuerySelector('.test', 'xxx');};
      expect(fn).not.toThrow();
    });

    it('should not throw error on invalid selector', function () {
      const fn = function () {safeQuerySelector(false);};
      expect(fn).not.toThrow();
    });

  });

  describe('safeQuerySelectorAll', function () {

    it('should exist', function () {
      expect(safeQuerySelectorAll).toBeDefined();
    });

    it('should return correct result', function () {
      expect(safeQuerySelectorAll('.test', wrapper).length).toEqual(1);
    });

    it('should use document as default root', function () {
      expect(safeQuerySelectorAll('.test').length).toEqual(2);
    });

    it('should not throw error on invalid root', function () {
      const fn = function () {safeQuerySelectorAll('.test', 'xxx');};
      expect(fn).not.toThrow();
    });

    it('should not throw error on invalid selector', function () {
      const fn = function () {safeQuerySelectorAll(false);};
      expect(fn).not.toThrow();
    });

  });

});

