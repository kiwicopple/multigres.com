import clsx from "clsx"
import Heading from "@theme/Heading"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

import styles from "./styles.module.css"

export default function HomepageBanner(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2" className={clsx("hero__title", styles.heroTitle)}>
              {siteConfig.tagline}
            </Heading>
            <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
              OrioleDB is a PostgreSQL extension that combines the advantages of
              both on-disk and in-memory engines. It uses PostgreSQL pluggable
              storage to increase performance and cut costs.
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  "button button--secondary button--lg",
                  styles.primaryButton
                )}
                to="/docs"
              >
                Read the docs
              </Link>
              <Link
                className={clsx(
                  "secondary-button button button--secondary button--outline button--lg",
                  styles.secondaryButton
                )}
                to="https://github.com/multigres/multigres"
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className={clsx("col col--6", styles.heroImageContainer)}>
            <img
              className={styles.heroImage}
              src="/img/banner.png"
              alt="Multigres"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
