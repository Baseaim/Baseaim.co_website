declare global {
  interface Window {
    SK_Widgets?: {
      init: () => void;
    };
  }
}

export {};