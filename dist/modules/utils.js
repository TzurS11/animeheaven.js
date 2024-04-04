"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySelectorAllRegex = exports.fetchHTML = void 0;
const jsdom_1 = require("jsdom");
const axios_1 = require("axios");
/**
 * get the html of the url as a document.
 * @param url The website you want to fetch
 * @returns
 */
async function fetchHTML(url, proxy) {
    url.replace("https", "http");
    try {
        let response;
        if (proxy == undefined ||
            proxy.host == undefined ||
            proxy.port == undefined) {
            response = await axios_1.default.get(url);
        }
        else {
            console.log(proxy);
            response = await axios_1.default.get(url, { proxy: proxy });
        }
        const dom = new jsdom_1.JSDOM(response.data);
        const document = dom.window.document;
        return document;
    }
    catch (error) {
        console.log(error.message);
        return null;
    }
}
exports.fetchHTML = fetchHTML;
/**
 * regex search an attribute inside a document.
 * @returns
 */
function querySelectorAllRegex(document, attribute, regex) {
    const regexPattern = regex;
    // Select all elements with the attribute 'data-custom-attribute'
    const elementsWithAttribute = document.querySelectorAll(`[${attribute}]`);
    // Filter elements based on the regular expression pattern
    const matchingElements = Array.from(elementsWithAttribute).filter((element) => {
        const attributeValue = element.getAttribute(attribute) || "";
        return regexPattern.test(attributeValue);
    });
    return matchingElements;
}
exports.querySelectorAllRegex = querySelectorAllRegex;
