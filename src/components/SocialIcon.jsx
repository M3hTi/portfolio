import styles from "./SocialIcon.module.css";

function SocialIcon({ acc }) {
  const { name, href, icon } = acc;
  return (
    <a href={href} target="_blank" className={styles.socialIcon}>
      <img src={icon} alt={name} />
    </a>
  );
}

export default SocialIcon;
