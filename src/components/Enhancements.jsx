import React from 'react'

const Enhancements = ({ enhancements = [], bobucks = 0, purchaseEnhancement }) => {
  return (
  <aside className="enhancements-panel" aria-label="Enhancements">
      <h3 style={{ color: '#fff', marginBottom: 8 }}>Enhancements</h3>
      {enhancements.filter(e => (e.visibleAt || 0) <= bobucks).map((e) => (
        <div key={e.id} className="upgrade-row">
          <div className="upgrade-info">
            <div className="upgrade-name">{e.name}</div>
            <div className="upgrade-owned">Owned: {e.owned}</div>
          </div>
          <div className="upgrade-actions">
            <div className="upgrade-cost">{e.cost}💠</div>
            <button
              className="upgrade-btn"
              onClick={() => purchaseEnhancement(e.id)}
              disabled={bobucks < e.cost}
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </aside>
  )
}

export default Enhancements
