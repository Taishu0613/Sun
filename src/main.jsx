// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App';
import theme from './theme';

// ページコンポーネント
import HomePage from './pages/HomePage';
import InstagramPage from './pages/InstagramPage';
import SettingsPage from './pages/SettingsPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* レイアウト用 App（中に <Outlet /> がある） */}
          <Route path="/" element={<App />}>
            {/* index → "/" */}
            <Route index element={<HomePage />} />
            {/* "/instagram" */}
            <Route path="instagram" element={<InstagramPage />} />
            {/* "/settings" */}
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
