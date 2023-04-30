import { parsePage } from 'kindle-highlight-to-markdown';
import { ParseResult } from 'kindle-highlight-to-markdown/lib/parse';

(async function () {
  // replace your_user_name to your Scrapbox user name
  const userName = 'your_user_name';
  // replace kindleProxy to your kindle proxy url. (e.g. https://xxx.workers.dev/)
  const kindleProxy: string = '';

  function convertToScrapbox(parseResult: ParseResult): string {
    const { title, url, coverImageUrl, annotations } = parseResult;
    const header = `[${coverImageUrl}]\n[${title} ${url}]`;
    const highlights = annotations.map((annotation) => {
      let highlight = `>${annotation.highlight}`;

      // Add Kindle Location Link if kindleProxy is set
      if (kindleProxy !== '') {
        const locationURL = annotation.kindleUrl.replace(
          'kindle://',
          kindleProxy
        );
        highlight += `\n>Location: [${annotation.locationNumber} ${locationURL}]`;
      }

      // Add Note if exists
      if (annotation.note) {
        highlight += `\n [${userName}.icon]${annotation.note}`;
      }

      return highlight;
    });
    return [header, ...highlights].join('\n\n');
  }

  async function copyToClipboard(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  const parseResult = parsePage(window);
  const scrapboxText = convertToScrapbox(parseResult);
  await copyToClipboard(scrapboxText);

  alert('Copied to clipboard!');
})();
