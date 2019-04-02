export function Shuffle(array: any[]) {
    const a: any[] = array.slice();
    let j;
    let x;
    for (let i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export function StripGithubAnchorLinks(html: string): string {
    const lines = html.split('\n');
    let newHtml = '';
    lines.forEach(line => {
        let newLine = line;
        if (newLine.indexOf('href="#') !== -1) {
            newLine = newLine.replace('href=', 'data-href=') + '\n';
        }
        if (newLine.indexOf('class="octicon octicon-link"') !== -1) {
            newLine = newLine.replace(
                'class="octicon octicon-link"',
                'class="octicon octicon-link hide"'
            );
        }
        newHtml += newLine;
    });
    return newHtml;
}
