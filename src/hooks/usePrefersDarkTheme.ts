import { useMedia } from 'react-media';

export function usePrefersDarkTheme() {
  return useMedia({ query: '(prefers-color-scheme: dark)' });
}
