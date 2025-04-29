
interface CalInterface {
  (method: string, options: CalOptions): void;
}

interface CalOptions {
  elementOrSelector?: string;
  calLink: string;
  layout?: string;
  config?: {
    [key: string]: any;
  };
}

declare global {
  interface Window {
    Cal?: CalInterface;
  }
}

export {};
