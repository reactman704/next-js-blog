// lib/post.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostData = {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

// 모든 포스트 목록 가져오기
export function getSortedPostData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(fileContents);

    return {
      id,
      title: data.title,
      date: data.date,
    };
  });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 개별 포스트 데이터 가져오기
export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${id}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    id,
    title: data.title,
    date: data.date,
    contentHtml,
  };
}
