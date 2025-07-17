import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

import styles from "./styles.module.css"

export default function HomepageSections(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <div className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 padding--lg">
            <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
              OrioleDB is a PostgreSQL extension that combines the advantages of
              both on-disk and in-memory engines. It uses PostgreSQL pluggable
              storage to increase performance and cut costs.
            </p>
          </div>
          <div className="col col--4 padding--lg">
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg button--block"
                to="https://github.com/multigres/multigres"
              >
                Follow us on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
