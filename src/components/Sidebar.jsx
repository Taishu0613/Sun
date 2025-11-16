// src/components/Sidebar.jsx
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { text: 'ホーム', path: '/' },
  { text: 'Instagram', path: '/instagram' },
  { text: '設定', path: '/settings' },
];

function Sidebar({ drawerWidth, mobileOpen, onDrawerToggle }) {
  const drawer = (
    <div>
      <Toolbar>メニュー</Toolbar>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                '&.active': {
                  bgcolor: 'action.selected',
                },
              }}
              onClick={onDrawerToggle} // スマホで押したら閉じる用
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      {/* PC用：常に出ているサイドバー */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: 'none', sm: 'block' }, // PC のみ
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* スマホ用：開閉するドロワー */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true, // パフォーマンス向上（推奨）
        }}
        sx={{
          display: { xs: 'block', sm: 'none' }, // スマホのみ
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Sidebar;
