# kindle-highlight-to-scrapbox

Convert Kindle highlights to Scrapbox.

## Build bookmarklet

1. Edit `src/index.ts` and set your Scrapbox username and Kindle Proxy URL(optional).
2. Run build script.

   ```bash
   $ npm run build
   ```

3. Use `dist/bookmarklet.js` as bookmarklet.

## Usage

1. Open Kindle highlight page.
2. Run bookmarklet.

## Kindle Proxy

Kindle Proxy is a proxy server that redirects `https://...` URLs to `kindle://...` protocol, which opens the Kindle app. Since Scrapbox does not support `kindle://` links, you need to use Kindle Proxy to make use of these links.

By setting the Kindle Proxy URL to `kindleProxy` in `src/index.ts`, the bookmarklet will add a link to a specific location number within the Kindle app.

Please note that this feature does not work on iOS, as the Kindle iOS app does not support it.

For more information about Kindle Proxy, see [Kindle のメモとハイライトを Markdown にする JavaScript ライブラリを書いた | Web Scratch](https://efcl.info/2022/01/29/kindle-highlight-to-markdown/)(Japanese).

## License

MIT

## Author

uemue: [GitHub](https://github.com/uemue), [Twitter](https://twitter.com/uemue)
