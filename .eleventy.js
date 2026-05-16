// Eleventy 設定（ESModule）
// 構成方針:
//   - テンプレート/データは src/ に置く
//   - 画像・動画 ramen-image/ は「リポジトリ直下」に既存のまま置く
//   - ビルド時に ramen-image/ をそのまま _site/ramen-image/ へコピー
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("ramen-image");

  eleventyConfig.addFilter("urlencode", (str) => {
    return encodeURIComponent(str || "");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
    },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
