import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parent from "./pages/parent/Parent";
import Child from "./pages/child/Child";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Parent />} />
          <Route path="/child/:id" element={<Child />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
