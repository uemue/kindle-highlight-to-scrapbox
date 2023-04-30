# kindle-highlight-to-scrapbox

Convert Kindle highlights to Scrapbox.

## Build bookmarklet

1. Edit `src/index.ts` and set your Scrapbox user name.
2. Run build script.

   ```bash
   $ npm run build
   ```

3. Use `dist/bookmarklet.js` as bookmarklet.

## Usage

1. Open Kindle highlight page.
2. Run bookmarklet.

## Kindle Proxy

Kindle Proxy is a proxy server that redirects to the Kindle app. Since Scrapbox does not allow `kindle://` links, you need to use Kindle Proxy to utilize the link.
If you set Kindle Proxy URL to `kindleProxy` in `src/index.ts`, the bookmarklet will add a link to the specific location number within the Kindle app.
Please note that this feature does not work on iOS, as the Kindle iOS app does not support it.

For more information about Kindle Proxy, see [Kindle のメモとハイライトを Markdown にする JavaScript ライブラリを書いた | Web Scratch](https://efcl.info/2022/01/29/kindle-highlight-to-markdown/)(Japanese).

## License

MIT

## Author

uemue: [GitHub](https://github.com/uemue), [Twitter](https://twitter.com/uemue)
