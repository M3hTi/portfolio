import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./components/shared.module.css";
import Spinner from "./ui/Spinner";

// import SideBarProvider from "./contexts/SideBarContext";
const SideBarProvider = lazy(() => import("./contexts/SideBarContext"));
// import About from "./pages/About";
const About = lazy(() => import("./pages/About"));
// import Contact from "./pages/Contact";
const Contact = lazy(() => import("./pages/Contact"));
// import Home from "./pages/Home";
const Home = lazy(() => import("./pages/Home"));
// import NotFound from "./pages/NotFound";
const NotFound = lazy(() => import("./pages/NotFound"));
// import ProjectsPage from "./pages/ProjectsPage";
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
// import SkillsPage from "./pages/SkillsPage";
const SkillsPage = lazy(() => import("./pages/SkillsPage"));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000,
      },
    },
  });

  return (
    <Suspense
      fallback={
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        <SideBarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="skills" element={<SkillsPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SideBarProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
