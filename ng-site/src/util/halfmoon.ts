interface StickyAlert {
  content: string;
  title?: string;
  alertType?: 'alert-primary' | 'alert-success' | 'alert-secondary' | 'alert-danger';
  fillType?: 'filled-lm' | 'filled-dm' | 'filled';
  hasDismissButton?: boolean;
  timeShown?: number;
}

interface Halfmoon {
  pageWrapper: HTMLElement;
  stickyAlerts: HTMLElement;
  darkModeOn: boolean;
  createCookie: (cookieName: string, cookieValue: string, days: number) => void;
  readCookie: (cookieName: string) => string | null;
  eraseCookie: (cookieName: string) => void;
  toggleDarkMode: () => void;
  getPreferredMode: () => 'light-mode' | 'dark-mode' | 'not-set';
  toggleSidebar: () => void;
  deactivateAllDropdownToggles: () => void;
  toggleModal: (modalId: string) => void;
  toastAlert: (alertId: string, timeShown: number) => void;
  initStickyAlert: (alert: StickyAlert) => void;
  clickHandler: (event: MouseEvent) => void;
  keydownHandler: (event: KeyboardEvent) => void;
  onDOMContentLoaded: () => void;
}

declare const halfmoonOnDOMContentLoaded: () => void;
declare const halfmoon: Halfmoon;

halfmoon.onDOMContentLoaded = halfmoonOnDOMContentLoaded;

export default halfmoon;
