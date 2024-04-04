import { JSDOM } from "jsdom";
import axios, { AxiosResponse } from "axios";
import { axiosProxy } from "./types";

/**
 * get the html of the url as a document.
 * @param url The website you want to fetch
 * @returns
 */
export async function fetchHTML(
  url: string,
  proxy?: axiosProxy
): Promise<Document | null> {
  url.replace("https", "http");
  try {
    let response: AxiosResponse<any, any>;
    if (
      proxy == undefined ||
      proxy.host == undefined ||
      proxy.port == undefined
    ) {
      response = await axios.get(url);
    } else {
      console.log(proxy);
      response = await axios.get(url, { proxy: proxy });
    }

    const dom = new JSDOM(response.data);
    const document = dom.window.document;
    return document;
  } catch (error:any) {
    console.log(error.message);
    return null;
  }
}
/**
 * regex search an attribute inside a document.
 * @returns
 */
export function querySelectorAllRegex(
  document: Document | Element,
  attribute: string,
  regex: RegExp
): Element[] {
  const regexPattern = regex;

  // Select all elements with the attribute 'data-custom-attribute'
  const elementsWithAttribute = document.querySelectorAll(`[${attribute}]`);

  // Filter elements based on the regular expression pattern
  const matchingElements = Array.from(elementsWithAttribute).filter(
    (element) => {
      const attributeValue = element.getAttribute(attribute) || "";
      return regexPattern.test(attributeValue);
    }
  );
  return matchingElements;
}