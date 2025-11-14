// app/page.tsx
import Link from "next/link";
import { getSortedPostData } from "@/lib/post";

export default function Home() {
  const posts = getSortedPostData();

  return (
    <div style={{ padding: 40 }}>
      <h1>My Blog</h1>
      <ul>
        {posts.map(({ id, title, date }) => (
          <li key={id} style={{ marginBottom: 15 }}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
