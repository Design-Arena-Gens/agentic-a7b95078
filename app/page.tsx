import { FeatureCard } from "./components/FeatureCard";
import styles from "./styles/Page.module.css";

const ICON_SIZE = 20;

const Glyph = ({ name }: { name: string }) => (
  <span className={styles.glyph} style={{ fontSize: ICON_SIZE }}>
    <i className={`uis uis-${name}`} aria-hidden />
  </span>
);

export default function Home() {
  return (
    <main className={styles.shell}>
      <section className={styles.hero}>
        <div className={styles.badge}>
          <span className={styles.badgeIcon}>
            <Glyph name="bolt" />
          </span>
          <span>Modality Dojo</span>
        </div>
        <h1>Crafting multisensory mastery with Unicons.</h1>
        <p>
          Rapidly prototype learning flows spanning tactile practice, visual concept
          maps, immersive audio experiences, and AI-guided reflections—all with a
          consistent solid icon system.
        </p>
        <div className={styles.ctaRow}>
          <button className={styles.primaryCta}>
            <Glyph name="bolt" />
            Launch dojo
          </button>
          <button className={styles.secondaryCta}>
            <Glyph name="book-open" />
            Visual syllabus
          </button>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSlug}>
            <Glyph name="brain" />
            Modal pathways
          </span>
          <h2>Spin up balanced modules faster.</h2>
          <p>
            Streamline how learners move between listening, reading, writing, and
            building. Every touchpoint uses legible 20px glyphs for quick scanning.
          </p>
        </div>
        <div className={styles.grid}>
          <FeatureCard
            icon="headphones"
            title="Aural briefings"
            description="Drop listening challenges with adaptive pacing and spatial audio cues for deeper focus."
          />
          <FeatureCard
            icon="book-open"
            title="Read & annotate"
            description="Embed responsive readers that sync highlights with concept flashcards automatically."
          />
          <FeatureCard
            icon="pen"
            title="Write & quiz"
            description="Auto-generate reflective prompts and micro-quizzes tuned to learner mastery."
          />
          <FeatureCard
            icon="cube"
            title="Visual assets"
            description="Create layered diagrams and voxel prototypes that update live during workshops."
          />
          <FeatureCard
            icon="award"
            title="Badge loops"
            description="Reward streaks with verifiable credentials and shareable showcase cards."
          />
          <FeatureCard
            icon="hourglass"
            title="Timeboxing dojo"
            description="Blend timers with focused rituals and breathing cues for team-based sprints."
          />
        </div>
      </section>

      <section className={styles.timeline}>
        <div className={styles.timelineHeader}>
          <Glyph name="bolt" />
          <span>Session flow</span>
        </div>
        <ol>
          <li>
            <span className={styles.dot} />
            <div>
              <h3>Ignite</h3>
              <p>Kick off with bold energy: showcase the solid bolt icon across your CTA matrix.</p>
            </div>
          </li>
          <li>
            <span className={styles.dot} />
            <div>
              <h3>Absorb</h3>
              <p>Guide learners through curated reading paths anchored by the book-open glyph.</p>
            </div>
          </li>
          <li>
            <span className={styles.dot} />
            <div>
              <h3>Experiment</h3>
              <p>Layer writing drills, 3D prompts, and AI nudges—all sharing a consistent 20px motif.</p>
            </div>
          </li>
        </ol>
      </section>
    </main>
  );
}
