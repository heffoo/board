import React from 'react'

import './cardHeader.scss'

export function CardHeader({setTitle, inputValue, setInputValue}) {
    return (
        <form className="header-form" name="setHeader" onSubmit={setTitle}>
        <div className="task-header">
          <p> give me a name!</p>
          <input
            type="text"
            className="input-for-header"
            autoFocus
            value={inputValue}
            name="headerInput"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </form>
    )
} 