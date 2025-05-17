import styles from "./SocialIcon.module.css";

function SocialIcon({ acc }) {
  const { href, icon } = acc;
  return (
    <a href={href} target="_blank" className={styles.socialIcon}>
      <span style={{ fontSize: "48px", color: "black" }}>{icon}</span>
    </a>
  );
}

export default SocialIcon;
