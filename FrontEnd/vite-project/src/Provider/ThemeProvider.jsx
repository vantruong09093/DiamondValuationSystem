
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../src/Views/dashboard/theme';

const ThemeProviderWrapper = ({ children }) => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeProviderWrapper;
