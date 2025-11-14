// app/posts/[id]/page.tsx
import { getPostData, getSortedPostData, PostData } from "@/lib/post";
import { use } from "react"; // React 18+에서 제공

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Post({ params }: Props) {
  const { id } = await params;

  if (!id) return <div style={{ padding: 40 }}>Invalid post id</div>;

  let post: PostData;
  try {
    post = await getPostData(id);
  } catch (err) {
    console.error(err);
    return <div style={{ padding: 40 }}>Post not found</div>;
  }

  return (
    <article style={{ padding: 40 }}>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}

// 빌드 시 동적 경로 생성
export async function generateStaticParams() {
  const posts = getSortedPostData();
  return posts.map((post) => ({ id: post.id }));
}
