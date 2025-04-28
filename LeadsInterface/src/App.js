import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Topbar from './global/Topbar';
import NavigationTabs from './global/NavigationTabs';
import InvitedPage from './pages/InvitedPage';
import AcceptedPage from './pages/AcceptedPage';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="app">
            <main className="content">
              <Topbar 
                pageTitle="Leads Handling System" 
                pageSubtitle="Every lead matters. Manage with purpose."
              />

              <NavigationTabs />

              <Routes>
                <Route path="/" element={<Navigate to="/invited" replace />} />
                <Route path="/invited" element={<InvitedPage />} />
                <Route path="/accepted" element={<AcceptedPage />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;