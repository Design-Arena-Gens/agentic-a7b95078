import styles from "../styles/FeatureCard.module.css";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  accent?: boolean;
}

export function FeatureCard({ icon, title, description, accent }: FeatureCardProps) {
  return (
    <article className={`${styles.card} ${accent ? styles.accent : ""}`}>
      <div className={styles.icon} aria-hidden>
        <i className={`uis uis-${icon}`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
