import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Sphere | Home</title>
        <link rel="icon" href="/logo_2.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome To{" "}
          <a href="http://venturetechlab.com/">Tech Sphere Software</a>
        </h1>
        <p className={styles.description}>
          Special thanks to <code className={styles.code}>Abroad</code>
        </p>

        <div>
          <hr />
          <h2 className={styles.textCenter}>
            Clear, Concise, Comprehensive, and Practical with No Fluff!
          </h2>
          <hr />
          <br />
          <br />
          <h3>👉Simple and Beginner friendly</h3>
          <p>
            Time and time again, Mosh's students praise his ability to break
            down complex topics into simple, digestible lessons that anyone can
            understand.
          </p>
          <h3>👉Clear and Concise Lessons</h3>
          <p>
            Don't waste any more time on long, repetitive, and poorly-structured
            courses. Mosh's lessons are concise, right to the point, and free of
            rambling and unnecessary buzzwords. Everything explained in plain
            English.
          </p>
          <h3>👉Learn from a True Expert</h3>
          <p>
            Benefit from Bhavesh and Ritham two decades of experience in the
            industry. Not only does he explain the whats, whys, and hows, he
            also shares tons of tips and tricks that help you code faster and
            with more confidence. Something that would take you years to learn
            on the job.
          </p>
          <h3>👉Prepare for Jobs and Interviews</h3>
          <p>
            Bhavesh and Ritham perfectly organized, in-depth, and comprehensive
            courses are packed with real-world examples and exercises that
            prepare you for the job.
          </p>
        </div>
      </main>
    </div>
  );
}
