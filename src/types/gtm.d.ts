interface Window {
  dataLayer?: Record<string, unknown>[];
  gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
}
