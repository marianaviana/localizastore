import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { darkTheme } from './theme/theme';
import { CartProvider } from './context/CartContext';
import Header from './components/Header/Header';
import AppRoutes from './Routes';
import DefaultSEO from './components/SEO/DefaultSEO';

const GradientBox = styled(Box)({
  backgroundImage: 'radial-gradient(rgba(249, 250, 251, 0.02) 1px, transparent 0px)',
  backgroundSize: '7px 7px',
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <DefaultSEO />
      <BrowserRouter>
        <CartProvider>
          <GradientBox sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <AppRoutes />
            </Box>
          </GradientBox>
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;