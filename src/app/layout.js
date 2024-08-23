import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import StoreProvider from "./StoreProvider";
import Container from "./Container";

export const metadata = {
  title: "ARC ERP",
  description:
    "ARC ERP is a modern, ERP system for small and medium-sized businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <StoreProvider>
              <Container> 
                {children} 
              </Container>
            </StoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
