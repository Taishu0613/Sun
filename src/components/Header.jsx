// src/components/Header.jsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header({ onDrawerToggle }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        {/* xs 〜 sm で表示するメニューボタン */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={onDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}  // スマホのみ
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div">
          Instagram Viewer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
