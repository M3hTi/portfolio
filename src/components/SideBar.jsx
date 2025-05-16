import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

import styles from "./SideBar.module.css";

function SideBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsSideBarOpen(false);
      }
    }
    document.addEventListener("keydown", handleKey);

    return () => document.removeEventListener("keydown", handleKey);
  }, []);
  return (
    <>
      <div className={styles.burgerContainer}>
        <button
          className={styles.menuBtn}
          onClick={() => setIsSideBarOpen((s) => !s)}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      {isSideBarOpen && (
        <>
          <div className={`${styles.menuWrap}`}>
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
