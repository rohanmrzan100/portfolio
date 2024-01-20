import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeroSection from "../components/HeroSection/HeroSection";
import Skills from "../components/Skills";
import EduAndExp from "../components/EduAndExp";
import Contact from "../components/contact/Contact";
import { useRef } from "react";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      // description="Rohan Maharjan"
    >
      <main className="w-[80%] m-auto">
        <HeroSection />
        <Skills />
        <EduAndExp />
        <Contact />
      </main>
    </Layout>
  );
}
