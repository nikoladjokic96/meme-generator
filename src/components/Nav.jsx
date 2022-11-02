import React from 'react'
import trollface from '../components/trollface.png'

export default function Nav() {
  return (
    <header className="nav">
      <div className="title">
        <img className="logo--face" src={trollface} />
        <h2>MemeGenerator</h2>
      </div>
    </header>
  )
}
