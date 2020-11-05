import Image from "next/image";
import SEO from "../components/seo";
import { clients, curated } from "../data";

export default function PortfolioPage() {
  return (
    <main>
      <SEO title="Portfolio" path="/portfolio" />

      <h1>Portfolio</h1>

      <div className="h-5" />

      <section className="space-y-10">
        {curated.map(
          ({ label, summary, roles, href, website, screenshot }, i) => (
            <article key={i}>
              {screenshot && (
                <Image
                  alt={label}
                  className="object-cover object-top rounded-md"
                  height={360}
                  loading="eager"
                  src={`/portfolio/${screenshot}`}
                  title={label}
                  width={576}
                />
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
