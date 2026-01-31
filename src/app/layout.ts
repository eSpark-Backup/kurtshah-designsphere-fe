import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          <StoreProvider>
            <Container>
              {children}
            </Container>
          </StoreProvider>
          <ToastContainer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
