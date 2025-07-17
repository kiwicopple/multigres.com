import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import Heading from "@theme/Heading"

import Banner from "@site/src/components/Banner"
import HomepageFeatures from "@site/src/components/HomepageFeatures"
import HomepageSections from "@site/src/components/HomepageSections"
import CTA from "@site/src/components/CTA"

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="OrioleDB is a PostgreSQL extension that combines the advantages of both on-disk and in-memory engines."
    >
      <main>
        <Banner />
        <HomepageFeatures />
        <HomepageSections />
        <CTA />
      </main>
    </Layout>
  )
}
