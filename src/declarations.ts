interface CoinWallet {
    send: unknown;
    enable: () => Promise<string[]>;
    on?: (method: string, listener: (...args: any[]) => void) => void;
    removeListener?: (method: string, listener: (...args: any[]) => void) => void;
}

declare interface Window {
    eth?: CoinWallet;
}

declare const __DEV__: boolean;
