// src/pages/InstagramPage.jsx
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InstagramEmbed from '../components/InstagramEmbed';

function InstagramPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Instagram
      </Typography>
      <Typography gutterBottom>
        ここにInstagramの投稿埋め込みや、今後API連携の一覧表示などを配置します。
      </Typography>

      <Box sx={{ mt: 2, maxWidth: 540 }}>
        <InstagramEmbed />
      </Box>
    </Box>
  );
}

export default InstagramPage;
