import { defineTheme, directory, group, link, social } from '@neato/guider/theme';
import { Logo } from './components/Logo';
import { NextSeo } from 'next-seo';
import coverUrl from "./public/cover.png"; 
import faviconUrl from "./public/favicon.ico";

const starLinks = [
  link('GitHub', 'https://github.com/sussy-code/smov', {
    style: 'star',
    newTab: true,
    icon: 'akar-icons:github-fill',
  }),
  link('Discord', '/links/discord', {
    style: 'star',
    newTab: true,
    icon: 'fa6-brands:discord',
  }),
];

export default defineTheme({
  github: "sussy-code/smov",
  navigation: [
    link('Discord', '/links/discord', {
      style: 'star',
      newTab: true,
      icon: 'mdi:discord',
    }),
    link('Check it out', 'https://sudo-flix.lol', {
      style: 'star',
      newTab: true,
    }),
  ],
  contentFooter: {
    text: "Made with :3 (sillyness)",
    editRepositoryBase: "https://github.com/sussy-code/docs/blob/master",
    socials: [
      social.github("https://github.com/sussy-code"),
      social.discord("/links/discord"),
    ]
  },
  meta: (pageMeta) => (
    <NextSeo {...{
      title: `${pageMeta.title ?? "Watch your favorite shows and movies for free with no ads ever! (っ'ヮ'c)"} | sudo-flix`,
      description: pageMeta.description ?? "sudo-flix is a free and open source streaming site, no ads, no tracking, no nonsense.",
      openGraph: {
        images: [{
          url: coverUrl.src,
        }],
        title: `${pageMeta.title ?? "Watch your favorite shows and movies for free with no ads ever! (っ'ヮ'c)"} | sudo-flix`,
        description: pageMeta.description ?? "sudo-flix is a free and open source streaming site, no ads, no tracking, no nonsense.",
      },
      twitter: {
        cardType: 'summary_large_image',
      },
      additionalLinkTags: [
        {
          href: faviconUrl.src,
          rel: "icon",
          type: "image/x-icon",
        }
      ]
    }} />
  ),
  settings: {
    logo: () => <Logo />,
    backgroundPattern: 'flare',
    colors: {
      "primary": "#A476D9",
      "primaryLighter": "#C4ADDE",
      "primaryDarker": "#6E23C3",
      "background": "#0C0B13",
      "backgroundLighter": "#1A1726",
      "backgroundLightest": "#282438",
      "backgroundDarker": "#000000",
      "line": "#37334C",
      "text": "#8C899A",
      "textLighter": "#A6A4AE",
      "textHighlight": "#FFF"
    },
  },
  directories: [
    directory("main", {
      sidebar: [
        ...starLinks,
        group("Global", [
          link("Instances", "/instances", { icon: 'mdi:web' }),
          link("Browser extension", "/extension", { icon: 'mdi:extension' }),
          link("Support", "/support", { icon: 'mdi:help' }),
        ]),
        group("Self-Hosting", [
          link("Start self-hosting", "/self-hosting/hosting-intro"),
          link("Configure backend", "/self-hosting/use-backend"),
          link("PWA vs no-PWA", "/self-hosting/about-pwa"),
          link("Troubleshooting", "/self-hosting/troubleshooting"),
        ]),
        group("Proxy", [
          link("Introduction", "/proxy/introduction"),
          link("Deploy", "/proxy/deploy"),
          link("Configuration", "/proxy/configuration"),
          link("Changelog", "/proxy/changelog"),
        ]),
        group("Client", [
          link("Introduction", "/client/introduction"),
          link("Deploy", "/client/deploy"),
          link("TMDB API Key", "/client/tmdb"),
          link("Configuration", "/client/configuration"),
          link("Changelog", "/client/changelog"),
          link("Update guide", "/client/upgrade"),
        ]),
        group("Backend", [
          link("Introduction", "/backend/introduction"),
          link("Deploy", "/backend/deploy"),
          link("Configuration", "/backend/configuration"),
          link("Changelog", "/backend/changelog"),
          link("Update guide", "/backend/upgrade"),
        ]),
        group("Extra", [
          link("Streaming", "/extra/streaming"),
          link("Selfhost", "/extra/selfhost"),
        ])
      ]
    })
  ],
});
