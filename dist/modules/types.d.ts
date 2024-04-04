type ProxyType = "http" | "https" | "socks5" | "socks5h";
/**
 * Set up a rotating proxy to prevent IP blocking when you have many requests to bato.to
 */
export type axiosProxy = {
    auth?: {
        password: string;
        username: string;
    };
    host: string;
    port: number;
    protocol?: ProxyType;
};
export {};
