// 記事の本文

"use client";

import Markdown from "marked-react";

export const ArticleContent = ({ markdown }) => {
  return (
    <article>
      <Markdown>{markdown}</Markdown>
    </article>
  );
};
