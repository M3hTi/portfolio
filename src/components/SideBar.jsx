import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

import { useSideBar } from "../contexts/SideBarContext";
import { useOutsideClick } from "../hooks/useOutsideClick";
import styles from "./SideBar.module.css";

function SideBar() {
  // const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const { setIsSideBarOpen, isSideBarOpen, toggle } = useSideBar();

  const { ref } = useOutsideClick(() => setIsSideBarOpen(false));

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsSideBarOpen(false);
      }
    }
    document.addEventListener("keydown", handleKey);

    return () => document.removeEventListener("keydown", handleKey);
  }, [setIsSideBarOpen]);
  return (
    <>
      <div className={styles.burgerContainer}>
        <button className={styles.menuBtn} onClick={() => toggle()}>
          <GiHamburgerMenu />
        </button>
      </div>
      {isSideBarOpen && (
        <>
          <div className={`${styles.menuWrap}`} ref={ref}>
            <div className={styles.menu}>
              <nav className={styles.itemList}>
                <ul>
                  <li>
                    <NavLink to="/" className="clear-nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className="clear-nav-link">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects" className="clear-nav-link">
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/skills" className="clear-nav-link">
                      Skills
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className="clear-nav-link">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.crossBtn}>
              <button onClick={() => setIsSideBarOpen(false)}>
                <IoClose />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SideBar;
