import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import StoreProvider from "./StoreProvider";
import { Header } from "@/components/layout";

export const metadata = {
  title: "ARC ERP",
  description:
    "ARC ERP is a modern, ERP system for small and medium-sized businesses.",
};

const Layout = ({ children }) => {
  return (
    <div style={{ with: "100%", minHeight: "100vh" }}>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 80px)",
          background:
            "linear-gradient(246.54deg, #36456A -19.2%, #2B3758 41.17%, #1A243D 101.55%)",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <StoreProvider>
              <Layout children={children} />
            </StoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
