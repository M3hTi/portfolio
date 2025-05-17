import { useEffect } from "react";

import { useSideBar } from "../contexts/SideBarContext";

function OpacityContainer({ children }) {
  const { isSideBarOpen, setIsSideBarOpen } = useSideBar();

  // This useEffect hook is used to set the side bar state to false when the component mounts.
  useEffect(() => {
    setIsSideBarOpen(false);
  }, []);

  return <div className={`${isSideBarOpen ? "opacity" : ""}`}>{children}</div>;
}

export default OpacityContainer;
