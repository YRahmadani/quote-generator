import React from 'react'
import { quotes, colors } from './constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

// ! NOT RESPONSIVE YET
const App = () => {
  const findQuote = (id) => {
    return quotes.find((qu) => qu.id === id)
  }
  const [color, setColor] = useState('#27374D')
  const [quote, setQuote] = useState(findQuote(1))
  const [author, setAuthor] = useState(false)

  const randomQuote = () => {
    let randomColor = Math.floor(Math.random() * colors.length)
    setColor(colors[randomColor])
    let randomQuotes = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomQuotes])
  }

  return (
    <div className={`w-full h-screen flex flex-col justify-center items-center`} style={{ backgroundColor: color }}>
      <div className={`w-[390px] py-16 bg-white flex flex-col items-center justify-center rounded ${author ? 'gap-4' : 'gap-0'}`}>
        {author ? (
          // if author is selected, display filtered quotes
          quotes.filter((qu) => qu.author === quote.author).map((newqu) => (
            <div key={newqu} className='w-full h-full flex flex-col items-center justify-center'>
              <span className='w-[73%] text-left flex gap-2'>
                <FontAwesomeIcon icon={faQuoteLeft} className='text-2xl' style={{ color: color }} />
                <p className='font-quicksand text-lg' style={{ color: color }}>{newqu.quote}</p>
              </span>
            </div>
          ))
        ) : (
          <div key={quote.id} className='w-full h-full flex flex-col items-center justify-center'>

            {/* Quotes */}
            <span className='w-[73%] text-left flex gap-2'>
              <FontAwesomeIcon icon={faQuoteLeft} className='text-2xl' style={{ color: color }} />
              <p className='font-quicksand text-lg' style={{ color: color }}>{quote.quote}</p>
            </span>

            {/* Author & Genre */}
            <span className='text-right w-[73%] mt-6 flex flex-col items-end'>
              <h3 className='font-extrabold font-quicksand text-sm cursor-pointer' style={{ color: color }} onClick={() => { setAuthor((prev) => !prev) }}>— {quote.author}</h3>
              <p className={`text-xs font-quicksand cursor-pointer ${author ? 'hidden' : 'flex'}`} style={{ color: color }}>{quote.genre}</p>
            </span>

            {/* Icons & Next Quote */}
            <span className={`w-[73%] mt-8 flex justify-between items-center ${author ? 'hidden' : 'flex'}`}>
              <span className='flex gap-3'>
                <FontAwesomeIcon icon={faTwitter} className='text-2xl hover:scale-125 cursor-pointer duration-200' style={{ color: color }} />
                <FontAwesomeIcon icon={faInstagram} className='text-2xl hover:scale-125 cursor-pointer duration-200' style={{ color: color }} />
              </span>
              <button className='py-2 px-5 rounded cursor-pointer' style={{ backgroundColor: color }} onClick={randomQuote}>
                <p className='text-white text-sm font-quicksand'>Next Quote</p>
              </button>
            </span>
          </div>
        )}
        <span className={`w-[73%] justify-end ${author ? 'flex' : 'hidden'}`}>
        <h3 className={`font-extrabold font-quicksand text-sm cursor-pointer`} style={{ color: color }} onClick={() => { setAuthor((prev) => !prev) }}>— {quote.author}</h3>
        </span>
      </div>
      <div className='absolute bottom-4 right-1/2 translate-x-1/2'>
        <p className='font-poppins text-sm text-white tracking-wide'>create by <span className='font-bold'>YRahmadani </span>- devChallenges.io</p>
      </div>
    </div>
  )
}

export default App
