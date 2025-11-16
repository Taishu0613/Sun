// src/pages/InstagramPage.jsx
import Typography from '@mui/material/Typography';

function InstagramPage() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Instagram
      </Typography>
      <Typography gutterBottom>
        ここにInstagramの投稿埋め込みや、今後API連携の一覧表示などを配置します。
      </Typography>

      {/* 例：埋め込みiframe（URLは自分の投稿に差し替え） */}
      <div style={{ maxWidth: 400, marginTop: 16 }}>
        <iframe
          src="https://www.instagram.com/p/【自分の投稿ID】/embed"
          width="400"
          height="480"
          frameBorder="0"
          scrolling="no"
          allow="encrypted-media"
          title="Instagram Post"
        />
      </div>
    </div>
  );
}

export default InstagramPage;
