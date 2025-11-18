import React from "react";


const Achievements = () => {
  return (
    <section className="section achievements">
      <h2>Certifications</h2>

      <div className="achievements-list">

        <div className="achievement-item">

          <div className="achievement-content">
            <h3>Bronze Medallion</h3>
            <p>
              Completed the Bronze Medallion certification, gaining essential water-rescue
              skills, strong judgment in emergency situations, and foundational training
              for the lifeguard pathway.
            </p>

            <div className="tech-tags">
              <span className="tech-tag">Lifesaving</span>
              <span className="tech-tag">First Aid</span>
              <span className="tech-tag">Water Safety</span>
            </div>
          </div>
        </div>

        <div className="achievement-item">

          <div className="achievement-content">
            <h3>Bronze Cross</h3>
            <p>
              Earned the Bronze Cross certification, advancing my rescue skills,
              decision-making, and readiness for National Lifeguard training.
            </p>

            <div className="tech-tags">
              <span className="tech-tag">Lifesaving</span>
              <span className="tech-tag">First Aid</span>
              <span className="tech-tag">Water Safety</span>
            </div>
          </div>
        </div>

        <div className="achievement-item">
          <div className="achievement-content">
            <h3>Introduction to Front-End Development</h3>
            <p>
              Learned the basics of Front-End Development, primarily focusing on HTML and CSS. Worked a little bit with Bootstrap CSS as well.
            </p>

            <div className="tech-tags">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">Bootstrap CSS</span>
            </div>
          </div>
        </div>

        <div className="achievement-item">
          <div className="achievement-content">
            <h3>Game Design with Unreal Engine</h3>
            <p>
              Worked in Unreal Engine, creating a simple third-person parkour game through UE5 Blueprints. Also learned how to implement UI elements into UE5, creating menus and win screens.
            </p>

            <div className="tech-tags">
              <span className="tech-tag">UE5</span>
              <span className="tech-tag">Blueprints</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
