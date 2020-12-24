import { getBlurhash } from "@plaiceholder/blurhash";
import { getImage } from "@plaiceholder/next";
import Image from "next/image";
import { BlurhashCanvas } from "react-blurhash";
import SEO from "../components/seo";
import { clients, curated } from "../data";

function Portfolio({ works }) {
  return (
    <main>
      <SEO title="Portfolio" path="/portfolio" />

      <h1>Portfolio</h1>

      <div className="h-5" />

      <section className="space-y-10">
        {works.map(
          (
            { label, summary, roles, href, website, screenshot, blurhash },
            i
          ) => (
            <article key={i}>
              {screenshot && (
                <div className="relative flex rounded-md overflow-hidden">
                  <BlurhashCanvas
                    hash={blurhash.hash}
                    width={blurhash.height}
                    height={blurhash.width}
                    punch={1}
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                  <Image
                    alt={label}
                    className="object-cover object-top rounded-md"
                    height={360}
                    loading="eager"
                    src={`/portfolio/${screenshot}`}
                    title={label}
                    width={576}
                  />
                </div>
              )}

              <div className="h-5" />

              <header className="">
                <h2>
                  {label}{" "}
                  <a
                    className="text-green-light"
                    href={href}
                    aria-label={`${label} Project Website`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {website}
                  </a>
                </h2>
              </header>

              <div className="h-5" />

              <section>
                {roles && <p className="leading-tight">{roles.join(", ")}</p>}

                <div className="h-5" />

                {summary && <p className="leading-tight">{summary}</p>}
              </section>
            </article>
          )
        )}

        <article>
          <header>
            <h2>Additional Clients</h2>
          </header>

          <div className="h-5" />

          <section>
            <p className="leading-normal">
              {clients.map((client) => client.label).join(", ")}
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}

export const getStaticProps = async () => {
  const works = await Promise.all(
    curated.map(async ({ screenshot, ...rest }) => {
      const imgFile = await getImage(`/portfolio/${screenshot}`);

      const blurhash = await getBlurhash(imgFile);

      return {
        blurhash,
        screenshot,
        ...rest,
      };
    })
  );

  return {
    props: {
      works,
    },
  };
};

export default Portfolio;
