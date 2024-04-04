"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHome = void 0;
const utils_1 = require("./utils");
async function getHome() {
    let document = await (0, utils_1.fetchHTML)("https://animeheaven.me");
    if (document == null)
        return { populars: [] };
    let popularImages = document.getElementsByClassName("coverimg popularimg");
    //   console.log(document?.body.outerHTML);
    let populars = [];
    for (let i = 0; i < popularImages.length; i++) {
        const element = popularImages.item(i);
        if (element == null)
            continue;
        if (element.getAttribute("src") == null ||
            element.getAttribute("alt") == null)
            continue;
        populars.push({
            cover: "https://animeheaven.me/" + element.getAttribute("src") || "",
            name: element.getAttribute("alt") || "",
        });
    }
    return { populars: populars };
}
exports.getHome = getHome;
