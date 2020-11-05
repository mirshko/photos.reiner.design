import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Experiments from "../components/experiments";
import SEO from "../components/seo";
import load from "../lib/load";

const components = {
  Experiments,
};

export default function ExperimentsPage({ source }) {
  const content = hydrate(source, { components });

  return (
    <main className="space-y-5">
      <SEO title="Experiments" path="/experiments" />

      {content}
    </main>
  );
}

export async function getStaticProps() {
  const markdown = load("experiments.md");

  const source = await renderToString(markdown, { components });

  return {
    props: {
      source,
    },
  };
}
