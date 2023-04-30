import { parsePage } from 'kindle-highlight-to-markdown';
import { ParseResult } from 'kindle-highlight-to-markdown/lib/parse';

(async function () {
  const userName = 'your_user_name';

  function convertToScrapbox(parseResult: ParseResult): string {
    const { title, url, coverImageUrl, annotations } = parseResult;
    const header = `[${coverImageUrl}]\n[${title} ${url}]`;
    const lines = annotations.map((annotation) => {
      let line = `> ${annotation.highlight}`;
      if (annotation.note) {
        return line + `\n [${userName}.icon]${annotation.note}`;
      }
      return line;
    });
    return [header, ...lines].join('\n\n');
  }

  async function copyToClipboard(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('クリップボードへのコピーに失敗しました。', err);
    }
  }

  const parseResult = parsePage(window);
  const scrapboxText = convertToScrapbox(parseResult);
  await copyToClipboard(scrapboxText);

  alert('ハイライトがScrapbox形式でコピーされました！');
})();
