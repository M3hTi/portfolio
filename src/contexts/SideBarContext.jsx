import { createContext, useContext, useState } from "react";

const SideBarContext = createContext();

function SideBarProvider({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  function toggle() {
    setIsSideBarOpen((s) => !s);
  }
  return (
    <SideBarContext.Provider
      value={{ isSideBarOpen, toggle, setIsSideBarOpen }}
    >
      {children}
    </SideBarContext.Provider>
  );
}

export function useSideBar() {
  const context = useContext(SideBarContext);
  return context;
}

export default SideBarProvider;
