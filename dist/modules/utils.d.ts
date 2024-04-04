import { axiosProxy } from "./types";
/**
 * get the html of the url as a document.
 * @param url The website you want to fetch
 * @returns
 */
export declare function fetchHTML(url: string, proxy?: axiosProxy): Promise<Document | null>;
/**
 * regex search an attribute inside a document.
 * @returns
 */
export declare function querySelectorAllRegex(document: Document | Element, attribute: string, regex: RegExp): Element[];
