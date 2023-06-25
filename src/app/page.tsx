"use client"

import { Amount } from '@/components/Amount'
import { MinesNumber } from '@/components/MinesNumber'
import { StartGame } from '@/components/StartGame'
import { Square } from '@/components/Square'
import { useState } from 'react'

import { generateSquareList } from '@/utils/generateSquares'
import { generateBombsPos } from '@/utils/generateBombPos'

interface SquareProps {
  id: number,
  className: string,
  clickable: boolean
}

const bombsPos = generateBombsPos(10)

export default function Home() {
  const [squares, setSquares] = useState(generateSquareList(false))

  const handleClick = (id: number) => { // Game estar rodando
    const squaresChanged = squares.map((bomb: SquareProps) => {
      if(bomb.id === id && bombsPos.includes(bomb.id)) {
        return { ...bomb, className: "w-[125px] h-[125px] bg-[url('../../public/bomb.png')] rounded-lg shadow-lg cursor-pointer" }
      } else if(bomb.id === id && !bombsPos.includes(bomb.id)) {
        return {...bomb, className: "w-[125px] h-[125px] bg-[url('../../public/diamont.png')] rounded-lg shadow-lg cursor-pointer"}
      }
      return bomb
    })
  
    setSquares(squaresChanged)
  }

  return (
    <main className="w-[1200px] h-[850px] bg-[#1A242D] rounded-lg grid grid-cols-mines">
      <div className="w-full h-full py-6 px-8 flex flex-col border-r-[1px] border-zinc-600">
        <div className="flex flex-col gap-2 w-full">
          <Amount />
          <MinesNumber />
          <StartGame content='Começar o jogo' /> 
        </div>
      </div>

    <div className='grid gap-1 grid-cols-5 grid-row-5 px-20 pt-4'>
      {
        squares.map((square: SquareProps) => (
          <Square 
            key={square.id}
            className={square.className}
            onClick={() => handleClick(square.id)}
            clickable={square.clickable}
          /> 
        ))
      }

    </div>
  </main>
  )
}
