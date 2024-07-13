import { useEffect, useState } from 'react';

export default function DiscordRedirect() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((currentCountdown) => currentCountdown - 1);
    }, 1000);

    const timer = setTimeout(() => {
      window.location.href = 'https://discord.gg/mxhcENzG2j';
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
          Sudo-Flix Discord
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
            borderRadius: '0.3em',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '1.65em', color: '#A6A4AE' }}>
            Redirecting you to our Discord in:
            <br />
            <span style={{ fontWeight: 700 }}>{countdown}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
