import { fetchHTML } from "./utils";

type Populars = {
  name: string;
  cover: string;
};

type HomeResults = {
  populars: Populars[];
};

export async function getHome(): Promise<HomeResults> {
  let document = await fetchHTML("https://animeheaven.me");
  if (document == null) return { populars: [] };
  let popularImages = document.getElementsByClassName("coverimg popularimg");
  //   console.log(document?.body.outerHTML);
  let populars: Populars[] = [];
  for (let i = 0; i < popularImages.length; i++) {
    const element = popularImages.item(i);
    if (element == null) continue;
    if (
      element.getAttribute("src") == null ||
      element.getAttribute("alt") == null
    )
      continue;
    populars.push({
      cover: "https://animeheaven.me/" + element.getAttribute("src") || "",
      name: element.getAttribute("alt") || "",
    });
  }
  return { populars: populars };
}
