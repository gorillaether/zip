import { ConnectButton } from '@rainbow-me/rainbowkit';
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Head>
        <title>My DApp</title>
      </Head>
      <ConnectButton />
    </div>
  );
}