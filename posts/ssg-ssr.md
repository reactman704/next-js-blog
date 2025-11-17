---
title: "Static Generation vs. Server-side Rendering"
date: "2025-11-11"
---

Coding

**Static Generation (SSG)** and **Server-side Rendering (SSR)** are two rendering methods provided by **Next.js**.

The key difference lies in **when** the HTML for a page is generated.

- **Static Generation**: HTML is generated **at build time** and can be served by a CDN. This makes it extremely fast and efficient for pages that don’t change often.
- **Server-side Rendering**: HTML is generated **on each request**. This ensures the content is always up to date but can be slower.

In practice, you can **mix both** approaches in a single Next.js app:
Use Static Generation for blog posts and marketing pages, and use Server-side Rendering for pages that require frequently updated data.
