import {GlassCard} from '../ui/GlassCard/GlassCard';
import {SectionHeader} from '../ui/SectionHeader/SectionHeader';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <SectionHeader label="Background" title="About Me" id="about-heading" />

        <GlassCard className={styles.card}>
          <div className={styles.prose}>
            <p>
              Senior Software Engineer at Shopify. I build frontend architecture and design systems,
              the kind of work where a clean abstraction can save a thousand engineers an hour each.
              Polished UIs at serious scale. That's the stuff.
            </p>
            <p>
              Got my start at IBM, where I shipped across airlines, banking, nonprofits, and a
              moonshot security project through Extreme Blue. Lots of domains, one takeaway: great
              frontend is equal parts craft and systems thinking.
            </p>
            <p>
              Toronto-based. Golfer, skier, wannabe house DJ. I like to work remotely around the
              world, ideally within range of a first tee and a flat white.
            </p>
          </div>

          <aside className={styles.stackBox} aria-label="Current technology stack">
            <p className={styles.stackLabel}>Current stack</p>
            <p className={styles.stackText}>
              React, Angular, TypeScript, GraphQL, Node.js, Ruby on Rails, Python, Java, C/C++
            </p>
          </aside>
        </GlassCard>
      </div>
    </section>
  );
}
