import React from 'react'

const ToppingButton = ({ upgrades = [], bobucks = 0, purchaseUpgrade }) => {
  return (
    <aside className="upgrades-panel" aria-label="Upgrades">
      <h3 style={{ color: '#fff', marginBottom: 8 }}>Upgrades</h3>
      {upgrades.filter(u => (u.visibleAt || 0) <= bobucks).map((u) => (
        <div key={u.id} className="upgrade-row">
          <div className="upgrade-info">
            <div className="upgrade-name">{u.name}</div>
            <div className="upgrade-owned">Owned: {u.owned}</div>
          </div>
          <div className="upgrade-actions">
            <div className="upgrade-cost">{u.cost}💠</div>
            <button
              className="upgrade-btn"
              onClick={() => purchaseUpgrade(u.id)}
              disabled={bobucks < u.cost}
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </aside>
  )
}

export default ToppingButton