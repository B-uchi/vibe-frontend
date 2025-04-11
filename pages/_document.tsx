import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="og:title"
          content="VibeChat — Start a chat, catch a vibe"
        />
        <meta
          property="og:description"
          content="A real-time chat platform to connect, vibe, and share moments. Search for friends, send requests, and chat effortlessly. Built with MERN & Firebase."
        />
        <meta
          property="og:image"
          content="https://vibe-rose.vercel.app/og-vibechat.png"
        />
        <meta property="og:url" content="https://vibe-rose.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="VibeChat — Start a chat, catch a vibe"
        />
        <meta
          name="twitter:description"
          content="Real-time messaging made easy. VibeChat helps you connect and chat with friends, complete with reactions, smart replies, and more."
        />
        <meta
          name="twitter:image"
          content="https://vibe-rose.vercel.app/og-vibechat.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
