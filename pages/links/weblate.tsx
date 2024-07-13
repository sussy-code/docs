import { useEffect, useState } from 'react';

const redirectUrl = 'https://weblate.tinypixel.uk/projects/sudo-flix/main/';

export default function WeblateRedirect() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((currentCountdown) => {
        if (currentCountdown <= 0) {
          return currentCountdown;
        }
        return currentCountdown - 1;
      });
    }, 1000);

    const timer = setTimeout(() => {
      window.location.href = redirectUrl;
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        background: '#0C0B13',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{ fontSize: '2.5em', paddingBlock: '0.6em', color: '#A6A4AE' }}
        >
          Sudo-Flix Weblate
        </h1>
        <hr
          style={{
            marginInline: '2em',
            backgroundColor: '#37334C',
            border: 'none',
            height: '0.1em',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
        }}
      >
        <div
          style={{
            padding: '1em',
            marginInline: '2.5em',
            border: 'solid 1px #37334C',
            borderRadius: '0.35em',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '1.65em', color: '#A6A4AE', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            Redirecting you to our Weblate in:
            {countdown <= 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a
                  href={redirectUrl}
                  style={{ color: '#8C899A', fontSize: '0.62em' }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  *Click here if you are not redirected
                </a>
              </div>
            ) : null}
            <span style={{ fontWeight: 700 }}>{countdown}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
