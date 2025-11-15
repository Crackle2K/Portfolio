import React from 'react'

const Achievements = () => {
  return (
    <section className="section achievements">
      <h2>Certifications</h2>
      <div className="achievements-list">
        <div className="achievement-item">
          <div className="achievement-image">
            <img src="../src/assets/images/achievements/bronzemed.png" alt="Bronze Medallion" />
          </div>
          <div className="achievement-content">
            <h3>Bronze Medallion</h3>
            <p>Completed the Bronze Medallion certification, gaining essential water-rescue skills, strong judgment in emergency situations, and foundational training for the lifeguard pathway.</p>
            <div className="tech-tags">
              <span className="tech-tag">Lifesaving</span>
              <span className="tech-tag">First Aid</span>
              <span className="tech-tag">Water Safety</span>
            </div>
          </div>
        </div>
        <div className="achievement-item">
          <div className="achievement-image">
            <img src="../src/assets/images/achievements/bronzecross.png" alt="Bronze Cross" />
          </div>
          <div className="achievement-content">
            <h3>Bronze Cross</h3>
            <p>Earned the Bronze Cross certification, advancing my rescue skills, decision-making, and readiness for National Lifeguard training.</p>
            <div className="tech-tags">
              <span className="tech-tag">Lifesaving</span>
              <span className="tech-tag">First Aid</span>
              <span className="tech-tag">Water Safety</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
