export interface Api {
  getDatabases: () => Promise<{ datname: string }[]>;
}

declare global {
  interface Window {
    api: Api;
  }
}
