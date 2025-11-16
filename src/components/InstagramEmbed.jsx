// src/components/InstagramEmbed.jsx
import { useEffect } from 'react';

function InstagramEmbed() {
  useEffect(() => {
    const scriptId = 'instagram-embed-script';

    // まだスクリプトが読み込まれていなければ追加
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.instagram.com/embed.js'; // // ではなく https:// にしておく
      script.async = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      // すでに読み込まれている場合は再処理
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink="https://www.instagram.com/p/DJsq3i2zNDF/?utm_source=ig_embed&amp;utm_campaign=loading"
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: '3px',
        boxShadow:
          '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: '1px',
        maxWidth: '540px',
        minWidth: '326px',
        padding: 0,
        width: '100%',
      }}
    >
      {/* 中身は空でOK。embed.js が中をいい感じに書き換えてくれる */}
    </blockquote>
  );
}

export default InstagramEmbed;
