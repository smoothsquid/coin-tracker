import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atoms";
import Router from "./Router";
import { GlobalStyle } from "./styles";
import { darkTheme, lightTheme } from "./theme";

const queryClient = new QueryClient();

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Router />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
export default App;
