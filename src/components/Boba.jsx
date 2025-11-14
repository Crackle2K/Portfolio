import React from 'react'

const Boba = ({ onBobaClick, bpc, bobucks }) => {
  const handleClick = () => {
    if (typeof onBobaClick === 'function') onBobaClick()
  }

  return (
    <div className="boba-container">
      <div className="bobucks-display">Bobucks: {bobucks}</div>
      <button className="bobaBtn" onClick={handleClick} aria-label="Boba Button">
        <img src="../src/assets/images/bubbleteaclick.png" alt="Bubble Tea" id="bubbleteaclicker" />
      </button>
    </div>
  )
}

export default Boba