import { remark } from "remark";
import html from "remark-html";
import rehypeExternalLinks from "rehype-external-links";
import remarkEmbedImages from "remark-embed-images";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(rehypeExternalLinks, { target: "_blank", rel: false })
    .use(remarkEmbedImages)
    .use(html)
    .process(markdown);
  return result.toString();
}
