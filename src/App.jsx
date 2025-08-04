import { useState } from 'react'
import panicQuotes from './db.js'
import './App.css'

function App() {
  const [currentQuote, setCurrentQuote] = useState('')
  const [isGlowing, setIsGlowing] = useState(false)
  const [isFading, setIsFading] = useState(false)

  const handlePanicButton = () => {
    // Trigger glow effect
    setIsGlowing(true)
    setTimeout(() => setIsGlowing(false), 300)
    
    if (currentQuote) {
      // If there's already a quote, fade it out first
      setIsFading(true)
      setTimeout(() => {
        // Get new random quote
        const randomIndex = Math.floor(Math.random() * panicQuotes.length)
        setCurrentQuote(panicQuotes[randomIndex])
        setIsFading(false)
      }, 300)
    } else {
      // If no quote, show new one immediately
      const randomIndex = Math.floor(Math.random() * panicQuotes.length)
      setCurrentQuote(panicQuotes[randomIndex])
    }
  }

  const handleShareOnX = () => {
    const tweetText = `${currentQuote}\n\n#DoNotPanic\ndonotpanic.sol`
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
    window.open(twitterUrl, '_blank')
  }

  return (
    <div className="panic-app">
      <div className="stars"></div>
      <div className="content">
        <div className="header">
          <h1 className="title">PANIC LEVEL REDUCER</h1>
          <p className="description">
            Feeling overwhelmed? Stressed? Having a complete meltdown? 
            <br />
            <strong>Fear not!</strong> Our scientifically questionable Panic Reduction System™ 
            is here to save the day with premium-grade nonsense logic.
            <br />
            <span className="sub-description">
              Just press the big red button below and let absurdity wash away your worries!
            </span>
          </p>
        </div>

        <div className={`button-container ${currentQuote ? 'compact' : ''}`}>
          <button 
            className={`panic-button ${isGlowing ? 'active' : ''} ${currentQuote ? 'compact' : ''}`}
            onClick={handlePanicButton}
          >
            <div className="button-inner">
              <span className="button-text">DO NOT PANIC!</span>
              <div className="button-glow"></div>
            </div>
          </button>
        </div>

        {currentQuote && (
          <div className="quote-container">
            <div className="quote-box">
              <p className={`quote-text ${isFading ? 'fading' : ''}`}>{currentQuote}</p>
              <button className="share-button" onClick={handleShareOnX}>
                <span className="share-icon">🐦</span>
                Share on X
              </button>
              <div className="quote-border"></div>
            </div>
          </div>
        )}

        <div className="footer">
          <p>⚠️ Warning: Side effects may include uncontrollable giggling and existential clarity ⚠️</p>
        </div>
      </div>
    </div>
  )
}

export default App
