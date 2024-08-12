import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import cityImg from "../assets/city.jpg";
import heroImg from "../assets/hero.png";

export default function WelcomePage() {
  const { scrollY } = useScroll();

  const yCity = useTransform(scrollY, [0, 200], [0, -100]);
  const opacityCity = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );
  const yHero = useTransform(scrollY, [0, 200], [0, -150]);
  const opacityHero = useTransform(scrollY, [0, 300, 500], [1, 1, 0]);
  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 300]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]);

  // Animation hooks for content sections
  const revealY = useTransform(scrollY, [300, 600], [50, 0]);
  const revealOpacity = useTransform(scrollY, [300, 600], [0, 1]);

  return (
    <>
      <header id="welcome-header">
        <motion.div
          id="welcome-header-content"
          style={{ scale: scaleText, y: yText }}
        >
          <h1>Ready for a challenge?</h1>
          <Link id="cta-link" to="/challenges">
            Get Started
          </Link>
        </motion.div>
        <motion.img
          style={{ opacity: opacityCity, y: yCity }}
          src={cityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
        <motion.img
          style={{ y: yHero, opacity: opacityHero }}
          src={heroImg}
          alt="A superhero wearing a cape"
          id="hero-image"
        />
      </header>
      <main id="welcome-content">
        <motion.section style={{ opacity: revealOpacity, y: revealY }}>
          <h2>There's never been a better time.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it's personal growth, professional
            achievements, or just for fun, we've got you covered.
          </p>
        </motion.section>

        <motion.section style={{ opacity: revealOpacity, y: revealY }}>
          <h2>Why Challenge Yourself?</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </motion.section>

        <motion.section style={{ opacity: revealOpacity, y: revealY }}>
          <h2>Features</h2>
          <ul>
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>Mark and move challenges to completed or failed.</li>
            <li>
              Keep track of your challenges through actve, completed, and failed
              sections.
            </li>
          </ul>
        </motion.section>

        <motion.section style={{ opacity: revealOpacity, y: revealY }}>
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
            “It's a fun and effective way of being consistent with your goals. It's super easy and intuitive.” - User.
          </p>
        </motion.section>
      </main>
    </>
  );
}
