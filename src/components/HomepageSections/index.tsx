import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"

export default function HomepageSections(): JSX.Element {
  return (
    <>
      <section>
        <div className="container margin-vert--xl">
          <div className="text--center">
            <Heading as="h2" className="text--uppercase">
              Scalability
            </Heading>
            <p>
              OrioleDB utilizes the <strong>power of modern hardware</strong> to
              achieve extraordinary performance.
            </p>
          </div>

          <div className="row">
            <div className="col col--6">
              <div className="">
                <div className="">
                  <img
                    src="/img/site/read-only-results-amazon.png"
                    alt="Scalability"
                  />
                </div>
                <div className="text--center">
                  <p>
                    Read-only tests show that the OrioleDB storage format is
                    over to 4x faster than PostgreSQL's current storage format.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--6">
              <div className="">
                <img
                  src="/img/site/read-write-results-amazon.png"
                  alt="Scalability"
                />
              </div>
              <div className="text--center">
                <p>
                  Read-write tests show that the OrioleDB storage format is over
                  to 4.5x faster than PostgreSQL's current storage format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container margin-vert--xl">
          <div className="text--center">
            <Heading as="h2" className="text--uppercase">
              Efficiency
            </Heading>

            <p>
              OrioleDB's architecture dramatically{" "}
              <strong>reduces resources</strong> used for transaction
              processing.
            </p>
          </div>
          <div className="row">
            <div className="col col--6">
              <div className="">
                <div className="">
                  <img src="/img/site/juno-read-iops.png" alt="Scalability" />
                </div>
                <div className="text--center">
                  <p>
                    OrioleDB is over 6x more efficient on disk reads / IOPS than
                    the current PostgreSQL storage format.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--6">
              <div className="">
                <div className="">
                  <img src="/img/site/juno-write-iops.png" alt="Scalability" />
                </div>
                <div className="text--center">
                  <p>
                    OrioleDB results in a dramatic reduction in disk writes
                    compared to the current PostgreSQL storage format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
