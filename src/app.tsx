import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { DBScreen } from "./screens/DBScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainLayout } from "./layout/MainLayout";

// Create a client
const queryClient = new QueryClient();

const root = createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="db/:db" element={<DBScreen />} />
        </Route>
      </Routes>
    </Router>
  </QueryClientProvider>
);
