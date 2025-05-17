import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SideBarProvider from "./contexts/SideBarContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000,
      },
    },
  });
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <SideBarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SideBarProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
