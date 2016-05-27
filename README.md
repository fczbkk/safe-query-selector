# safeQuerySelector

Safe version of querySelector() and querySelectorAll() methods. It never throws an error.

## Documentation

### safeQuerySelector

Returns first matching element that is child of root node, or `null` if not found.

**Parameters**

-   `selector` **Any** CSS selector. Should be string.
-   `root` **\[Any]** Node inside which the selector will be applied. (optional, default `document`)

Returns **([Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) | null)** 

### safeQuerySelectorAll

Returns collection of all matching elements that are children of root node, or an empty array if not found.

**Parameters**

-   `selector` **Any** CSS selector. Should be string.
-   `root` **\[Any]** Node inside which the selector will be applied. (optional, default `document`)

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

## Bug reports, feature requests and contact

If you found any bugs, if you have feature requests or any questions, please, either [file an issue at GitHub](https://github.com/fczbkk/safe-query-selector/issues) or send me an e-mail at <a href="mailto:riki@fczbkk.com">riki@fczbkk.com</a>.

## License

safeQuerySelector is published under the [MIT license](https://github.com/fczbkk/safe-query-selector/blob/master/LICENSE).
