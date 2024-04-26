import {
  Button,
  Card,
  CardGrid,
  GuiderLayout,
  Hero,
  Frame,
} from '@neato/guider/client';
import logoUrl from '../public/transparent-logo.png';

export default function LandingPage() {
  return (
    <GuiderLayout meta={{ layout: 'page' }}>
      <Hero>
        <div style={{ paddingBottom: '2em' }}>
          <img src={logoUrl.src} alt="Logo of sudo-flix" />
        </div>
        <Hero.Title>sudo-flix</Hero.Title>
        <Hero.Subtitle>
          A simple and no-BS app for watching movies and TV shows. Totally free
          and open source, forever.
        </Hero.Subtitle>
        <Hero.Actions>
          <Button to="/self-hosting/hosting-intro">Get Started</Button>
          <Button to="https://github.com/sussy-code/smov" type="secondary">
            Open on GitHub
          </Button>
        </Hero.Actions>
      </Hero>
      <Frame plain={true}>
        <CardGrid>
          <Card icon="material-symbols:hangout-video-off" title="No Ads">
            sudo-flix will never show ads, enjoy watching without interruptions.
          </Card>
          <Card icon="ic:baseline-ondemand-video" title="Custom Player">
            Enjoy a fully custom video player including streaming integration,
            subtitle customization and easy TV season navigation.
          </Card>
          <Card icon="mdi:content-save" title="Saves your progress">
            Will remember your progress in movies and TV shows, so you can
            easily continue where you left off.
          </Card>
          <Card icon="mdi:bookmark" title="Bookmarking">
            Allows you to bookmark your favorite movies and TV shows, so you can
            easily find them again.
          </Card>
          <Card icon="mdi:cloud-refresh" title="Syncing across devices">
            Enjoy uninterrupted streaming as your progress, proxies, and
            bookmarks sync effortlessly across all your devices.
          </Card>
          <Card icon="mdi:power-plug-outline" title="Modular by design">
            Mix and match different parts of the sudo-flix service, host your
            backend or use ours, it&apos;ll work either way.
          </Card>
          <Card icon="mdi:flag" title="Multiple Languages">
            Supports over 25 languages, including English, German, French,
            Spanish, Italian, Czech, Hindi, Arabic, Hebrew and more.
          </Card>
          <Card icon="mdi:brush-variant" title="Customizable">
            Supports various themes, subtitle colors and subtitle sizes so you
            can make it look however you want.
          </Card>
          <Card icon="mdi:cellphone" title="Progressive Web App Support">
            Supports PWA, so you can install it on your phone and use it just
            like a native app.
          </Card>
        </CardGrid>
      </Frame>
    </GuiderLayout>
  );
}
