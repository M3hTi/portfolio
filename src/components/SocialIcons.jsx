import SocialIcon from "./SocialIcon";
import styles from "./SocialIcons.module.css";

const socialAccounts = [
  {
    name: "github",
    href: "https://github.com/M3hTi",
    icon: "/public/github.png",
  },
  {
    name: "medium",
    href: "https://medium.com/@mahdinasir813",
    icon: "/public/medium.png",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/mehdi_n_kh78/",
    icon: "/public/instagram.png",
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
