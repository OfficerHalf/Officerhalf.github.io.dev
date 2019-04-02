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
        if (line.indexOf('href="#') !== -1) {
            newHtml += line.replace('href=', 'data-href=') + '\n';
        } else {
            newHtml += line + '\n';
        }
    });
    return newHtml;
}
