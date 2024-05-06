import en from './messages/locales/en.json';

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
}
