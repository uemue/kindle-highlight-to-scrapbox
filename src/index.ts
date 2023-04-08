import { parsePage } from 'kindle-highlight-to-markdown';
import { ParseResult } from 'kindle-highlight-to-markdown/lib/parse';

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

function copyToClipboard(text: string): void {
  const textarea = document.createElement('textarea');
  textarea.textContent = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

const parseResult = parsePage(window);
const scrapboxText = convertToScrapbox(parseResult);
copyToClipboard(scrapboxText);

alert('ハイライトがScrapbox形式でコピーされました！');
