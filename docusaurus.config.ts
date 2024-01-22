import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Rohan Maharjan",
  tagline: "Rohan Maharjan",

  // Set the production url of your site here
  url: "https://maharjanrohan.netlify.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Rohan Maharjan", // Usually your GitHub org/user name.
  projectName: "Rohan Maharjan", // Usually your repo name.
  favicon: "img/siteLogo.svg",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { name: "Rohan Maharjan", content: "Web Development, FullStack,blog" },
      { name: "Maharjan", content: "blog" },
      { name: "Rohan", content: "blog" },
    ],
    headTags: [
      // Declare a <link> preconnect tag
      {
        tagName: "link",
        attributes: {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
      },
    ],

    image: "img/siteLogo.svg",
    navbar: {
      hideOnScroll: true,
      style: "dark",
      title: "Rohan Maharjan",
      logo: {
        alt: "My Site Logo",
        src: "img/siteLogo.svg",
        height: "35px",
        width: "35px",
      },
      items: [
        {
          position: "left",
          label: "Tutorials",
          to: "tutorials",
        },
        {
          type: "html",
          position: "right",
          value: `<button class="navBtn" onclick="window.location.href='/#contact'">Say Hello !</button>
`,
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Rohan Maharjan.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      disableSwitch: true,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "tutorials",
        path: "tutorials",
        routeBasePath: "tutorials",
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
