import { FaGithub, FaInstagram, FaMedium, FaTelegram } from "react-icons/fa";

import SocialIcon from "./SocialIcon";
import styles from "./SocialIcons.module.css";

const socialAccounts = [
  {
    name: "github",
    href: "https://github.com/M3hTi",
    icon: <FaGithub />,
  },
  {
    name: "medium",
    href: "https://medium.com/@mahdinasir813",
    icon: <FaMedium />,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/mehdi_n_kh78/",
    icon: <FaInstagram />,
  },
  {
    name: "telegram",
    href: "https://t.me/Depression_1999",
    icon: <FaTelegram />,
  },
];

function SocialIcons() {
  return (
    <div className={styles.iconContainer}>
      {Array.from({ length: socialAccounts.length }, (_, i) => (
        <SocialIcon
          acc={socialAccounts.at(i)}
          key={socialAccounts.at(i).name}
        />
      ))}
    </div>
  );
}

export default SocialIcons;
