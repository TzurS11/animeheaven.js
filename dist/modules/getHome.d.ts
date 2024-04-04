type Populars = {
    name: string;
    cover: string;
};
type HomeResults = {
    populars: Populars[];
};
export declare function getHome(): Promise<HomeResults>;
export {};
