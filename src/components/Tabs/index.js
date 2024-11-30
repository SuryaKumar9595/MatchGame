import React from 'react'
import './index.css'

const Tabs = ({tabsList, activeTabId, onClickTab}) => (
  <div className="tabs-container">
    {tabsList.map(tab => (
      <button
        type="button"
        className={`tab-button ${
          activeTabId === tab.tabId ? 'active-tab' : ''
        }`}
        key={tab.tabId}
        onClick={() => onClickTab(tab.tabId)}
      >
        {tab.displayText}
      </button>
    ))}
  </div>
)

export default Tabs
