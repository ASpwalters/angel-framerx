import Head from 'next/head'
import FramerProjects from "/components/FramerProjects";

export default function Home() {
  return <div style={{ textAlign: "center" }}>
	  <Head>
		  <title>Angel | Next / Framer / GraphQL</title>
		  <link rel="icon" href="/favicon.ico" />
	  </Head>


	  <h1>
		  Angel | Next / Framer / GraphQL
	  </h1>
	  <h2>Framer Projects</h2>
	  <FramerProjects />
  </div>
}
