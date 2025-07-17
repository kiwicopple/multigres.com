import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"
import { icons } from "lucide-react"

type FeatureItem = {
  title: string
  icon: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "Scalability",
    icon: "LineChart",
    description: (
      <>
        The novel design of OrioleDB avoids typical bottlenecks of database
        engines.
      </>
    ),
  },
  {
    title: "IO Reduction",
    icon: "ArrowDownUp",
    description: (
      <>
        Logical WAL and non-persistent undo log for less IO from write
        transactions.
      </>
    ),
  },
  {
    title: "Data Compression",
    icon: "ArrowDownWideNarrow",
    description: (
      <>
        Page-level data compression reduces typical database size in 4-5 times.
      </>
    ),
  },
  {
    title: "Bloat Reduction",
    icon: "Trash2",
    description: <>Less bloat thanks to efficiently handled in-place update.</>,
  },
  {
    title: "Less Maintenance",
    icon: "Blocks",
    description: (
      <>Lower maintenance required resulting in less operational costs.</>
    ),
  },
  {
    title: "High Transaction Throughput",
    icon: "FastForward",
    description: (
      <>Efficient transactional processing leads to high throughput.</>
    ),
  },
]

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4 padding--md")}>
      <div className={clsx("card shadow--md")}>
        <div className="card__header ">
          <div className="">
            <Icon size={28} name={icon} />
          </div>
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

const Icon = ({ name, size }) => {
  const LucideIcon = icons[name]

  return <LucideIcon size={size} color={"#064089"} />
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
