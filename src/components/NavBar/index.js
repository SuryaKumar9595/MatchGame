import React from 'react'
import './index.css'

const NavBar = ({score, timeLeft}) => (
  <div className="nav-bar">
    <img
      src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
      alt="website logo"
      className="website-logo"
    />
    <div className="score-timer-container">
      <p className="score" data-testid="score">
        Score: {score}
      </p>
      <div className="timer-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer-img"
        />
        <p className="time" data-testid="timer">
          {timeLeft} sec
        </p>
      </div>
    </div>
  </div>
)

export default NavBar
