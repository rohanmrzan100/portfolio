import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeroSection from "../components/HeroSection/HeroSection";
import Skills from "../components/Skills";
import EduAndExp from "../components/EduAndExp";
import Contact from "../components/contact/Contact";
import Head from "@docusaurus/Head";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description="Rohan Maharjan">
      <Head>
        <meta property="og:image" content="Full Stack Web Development" />
        <meta name="rohan maharjan" content="Rohan Maharjan" />
        <link rel="preconnect" href="maharjanrohan.netlify.app" />
      </Head>
      <main className="w-[80%] m-auto">
        <HeroSection />
        <Skills />
        <EduAndExp />
        <Contact />
      </main>
    </Layout>
  );
}
