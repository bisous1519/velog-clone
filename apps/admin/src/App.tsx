import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Layout from './pages/Layout.tsx';
import ListPage from './pages/ListPage.tsx';
import DetailPage from './pages/DetailPage.tsx';

const theme : Partial<DefaultTheme> = {

};

function App() {
  return (
    <ThemeProvider theme={}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListPage />} />
          <Route path="/article/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
