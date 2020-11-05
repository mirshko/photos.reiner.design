import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import SEO from "../components/seo";
import load from "../lib/load";

export default function HomePage({ source }) {
  const content = hydrate(source, {});

  return (
    <main className="space-y-5">
      <SEO />

      {content}
    </main>
  );
}

export async function getStaticProps() {
  const markdown = load("home.md");

  const source = await renderToString(markdown, {});

  return {
    props: {
      source,
    },
  };
}
