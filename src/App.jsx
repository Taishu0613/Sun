// src/App.jsx
import { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const drawerWidth = 240;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Header にトグル関数を渡す */}
      <Header onDrawerToggle={handleDrawerToggle} />

      {/* Sidebar に open 状態 & トグル関数を渡す */}
      <Sidebar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        onDrawerToggle={handleDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: { sm: `${drawerWidth}px` }, // PC のときだけサイドバー幅ぶんずらす
        }}
      >
        {/* AppBar 分の余白 */}
        <Toolbar />

        {/* ルーティングされたページがここに入る */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
