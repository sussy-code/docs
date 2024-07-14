import { useEffect, useState } from 'react';

const redirectTitle = 'Weblate';
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
          Sudo-Flix {redirectTitle}
        </h1>
        <hr
          style={{
            marginInline: '2em',
            border: 'solid 0.1em #37334C',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <div
          style={{
            padding: '1em',
            marginInline: '2.5em',
            border: 'solid 0.1em #37334C',
            borderRadius: '0.35em',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '1.65em',
              color: '#A6A4AE',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {countdown > 0
              ? `Redirecting you to our ${redirectTitle} in:`
              : `Redirecting you now...`}
            {countdown <= 0 ? (
              <a
                href={redirectUrl}
                style={{ color: '#8C899A', fontSize: '0.6em' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = 'underline')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = 'none')
                }
              >
                *Click here if you&#39;re not redirected
              </a>
            ) : (
              <span style={{ fontWeight: 700 }}>{countdown}</span>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#8C899A',
          fontSize: '0.7em',
        }}
      >
        <p>© 2024 sudo-flix</p>
        <p>
          Follow us on{' '}
          <a
            href="https://x.com/sudoFlix"
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = 'underline')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = 'none')
            }
          >
            Twitter
          </a>{' '}
          and check out our{' '}
          <a
            href="https://github.com/sussy-code"
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = 'underline')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = 'none')
            }
          >
            Github
          </a>
          .
        </p>
      </div>
    </div>
  );
}
