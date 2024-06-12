import en from '../../i18n/messages/en.json';

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
}

declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}
