import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeroSection from "../components/HeroSection/HeroSection";
import styles from "./index.module.css";
import Skills from "../components/Skills";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="w-[80%] m-auto">
        <HeroSection />
        <Skills />
      </main>
    </Layout>
  );
}
