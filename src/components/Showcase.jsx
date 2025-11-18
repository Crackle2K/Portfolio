import React from "react";

import machinalytics from "../assets/images/showcase/machinalytics.png";
import projectseverance from "../assets/images/showcase/projectseverance.png";
import baguettes from "../assets/images/showcase/baguettes.png";
import riveote from "../assets/images/showcase/riveote.png";
import colorfullamp from "../assets/images/showcase/colorfullamp.png";
import blast from "../assets/images/showcase/blast.png";
import effective from "../assets/images/showcase/effective.png";

const Showcase = () => {
  const GithubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );

  const YoutubeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  );

  return (
    <section className="section showcase">
      <h2>Featured</h2>

      <div className="showcase-section">
        <div className="project-grid">

          <div className="project-card">
            <div className="project-image">
              <img src={machinalytics} alt="Machinalytics" />
            </div>

            <div className="project-content">
              <h3>Machinalytics</h3>
              <p>
                Machinalytics is an all-in-one platform for exploring, visualizing, and collaborating on machine learning projects.
                It combines data visualization, model analysis, and real-time communication into a single, seamless app.
              </p>

              <div className="tech-tags">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Figma</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/MisplacedOrange/Rythm-Hacks" target="_blank" rel="noopener noreferrer" className="project-link">
                  <GithubIcon /> GitHub
                </a>
                <a href="https://www.youtube.com/watch?v=O0SSgzEZgnY" target="_blank" rel="noopener noreferrer" className="project-link">
                  <YoutubeIcon /> Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={projectseverance} alt="Project Severance" />
            </div>

            <div className="project-content">
              <h3>Project Severance</h3>
              <p>
                Project Severance was born from our fascination with psychological horror and the thrill of being hunted.
                As two high-school students, we wanted to challenge ourselves to create something way bigger than expected.
              </p>

              <div className="tech-tags">
                <span className="tech-tag">UE5</span>
                <span className="tech-tag">Blueprints</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/Deific-Games/Project-Severance" target="_blank" rel="noopener noreferrer" className="project-link">
                  <GithubIcon /> GitHub
                </a>
                <a href="https://www.youtube.com/watch?v=rjIQ288c1-U" target="_blank" rel="noopener noreferrer" className="project-link">
                  <YoutubeIcon /> Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={baguettes} alt="Baguettes" />
            </div>

            <div className="project-content">
              <h3>Baguettes</h3>
              <p>
                This mod adds Baguettes to Minecraft! Crafted from 3 bread, this item fully restores hunger and saturation.
              </p>

              <div className="tech-tags">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Gradle</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/Crackle2K/Baguettes" target="_blank" rel="noopener noreferrer" className="project-link">
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="showcase-section">
        <h3 className="section-heading">Collaborative Projects</h3>
        <div className="project-grid">

          <div className="project-card">
            <div className="project-image">
              <img src={riveote} alt="Riveote" />
            </div>

            <div className="project-content">
              <h3>Riveote</h3>
              <p>
                Riveote is a minimalist quote generator designed to inspire creativity and focus.
                Featuring a clean UI, it delivers motivational quotes you can instantly copy.
              </p>

              <div className="tech-tags">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Tailwind CSS</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/MisplacedOrange/Riveote" target="_blank" rel="noopener noreferrer" className="project-link">
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="showcase-section">
        <h3 className="section-heading">Contributed To</h3>
        <div className="contributed-grid">

          <div className="contributed-card">
            <div className="contributed-image">
              <img src={colorfullamp} alt="Colorful Lamps" />
            </div>

            <div className="contributed-content">
              <h4>Colorful Lamps</h4>
              <p>
                Colorful Lamp adds craftable redstone lamps in every color, perfect for decorating and customizing your builds.
              </p>

              <div className="tech-tags">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Gradle</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/SunPhoen1x/Colorful-Lamp" target="_blank" rel="noopener noreferrer" className="project-link">
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="contributed-card">
            <div className="contributed-image">
              <img src={blast} alt="Blast" />
            </div>

            <div className="contributed-content">
              <h4>Blast</h4>
              <p>
                Blast is a Fabric Minecraft mod adding throwable bombs and explosive blocks.
              </p>

              <div className="tech-tags">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Gradle</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/Ladysnake/BLAST" target="_blank" rel="noopener noreferrer" className="project-link">
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="contributed-card">
            <div className="contributed-image">
              <img src={effective} alt="Effective" />
            </div>

            <div className="contributed-content">
              <h4>Effective</h4>
              <p>
                The mod adds various effects like water splashes, waterfall clouds, fireflies, improved visual effects, screen shake and many more.
              </p>

              <div className="tech-tags">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Gradle</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/Ladysnake/Effective" target="_blank" rel="noopener noreferrer" className="project-link">
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Showcase;
