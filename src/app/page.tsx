"use client"

import { Amount } from '@/components/Amount'
import { AmountInGame } from '@/components/AmountInGame'
import { MinesNumber } from '@/components/MinesNumber'
import { StartGame } from '@/components/StartGame'
import { Square } from '@/components/Square'
import { InfosInGame } from '@/components/InfosInGame'
import { MinesDiamontInfo } from '@/components/MinesDiamontInfo/MinesDiamontInfo'

import { useCallback,  useEffect,  useState } from 'react'

import { generateSquareList } from '@/utils/generateSquares'
import { generateBombsPos } from '@/utils/generateBombPos'
import { multiplier } from '@/utils/multiplier'
import { Win } from '@/components/Win'
import { Header } from '@/components/Header'


interface SquareProps {
  id: number,
  className: string,
  clickable: boolean
}

interface GameInfosProps {
  amount: string,
  minesNumber: string,
  diamontNumber: string
}

export default function Home() {
  const [squares, setSquares] = useState(generateSquareList(false))
  const [start, setStart] = useState(false)
  const [stop, setStop] = useState(false)
  const [gameInfos, setGameInfos] = useState<GameInfosProps>({
    'amount': '0',
    'minesNumber': '0',
    'diamontNumber': '0'
  })
  const [bombsPos, setBombsPos] = useState<number[]>(generateBombsPos(0))

  
  // const bombsPos = generateBombsPos(Number(gameInfos.minesNumber))
  let earns = multiplier(gameInfos.minesNumber, gameInfos.diamontNumber)


  const handleClick = (id: number) => { 
    const squaresChanged = squares.map((bomb: SquareProps) => {
      if(bomb.id === id && bombsPos.includes(bomb.id)) {
          setStart(false)
          squares.map(square => {
            if(bomb.id === id && bombsPos.includes(square.id)) {
              square.className = "w-[125px] h-[125px] bg-[url('../../public/bomb.png')] rounded-lg shadow-lg cursor-pointer" 
              square.clickable = false
            } else if(bomb.id === id && !bombsPos.includes(square.id)) {
              square.className = "w-[125px] h-[125px] bg-[url('../../public/diamont.png')] rounded-lg shadow-lg cursor-pointer"
              square.clickable = false
            }
          })
          return { ...bomb, className: "w-[125px] h-[125px] bg-[url('../../public/bomb.png')] rounded-lg shadow-lg cursor-pointer", clickable: false }
        } else if(bomb.id === id && !bombsPos.includes(bomb.id)) {
          const newGemsNum = (Number(gameInfos.diamontNumber) - 1).toString()
          setGameInfos(gameInfos => ({...gameInfos, 'diamontNumber': newGemsNum}))
          return {...bomb, className: "w-[125px] h-[125px] bg-[url('../../public/diamont.png')] rounded-lg shadow-lg cursor-pointer", clickable: false}
        }
        return bomb
    })
  
    setSquares(squaresChanged)
  }

    const takeGameInfos = useCallback(
      (info: string, where: string) => {
        if(where === 'amount') {
          setGameInfos(gameInfos => ({...gameInfos, 'amount': info}))
        } else {
          setGameInfos(gameInfos => ({...gameInfos, 'minesNumber': info, 'diamontNumber': (25 - Number(info)).toString()}))
        }
      }, [setGameInfos]
    )

    const startGame = useCallback(
      () => {
        setStart(true)
        setStop(false)  
        setSquares(generateSquareList(true))
        setGameInfos({
        'amount': '0',
        'minesNumber': '0',
        'diamontNumber': '0'})
      }, [setStart]
    )

    const stopGame = useCallback(
      (stop: boolean) => {
      if(stop) {
        setStop(true)
        setStart(false)
      }        
    }, [setStop])

    useEffect(() => {
      if(gameInfos.minesNumber != '0') {
        setBombsPos(generateBombsPos(Number(gameInfos.minesNumber)))
      }
    }, [gameInfos.amount])

    

  return (
    <div className='flex flex-col items-center pb-8 h-screen w-screen'>
      <Header />
      <main className="w-[1200px] h-[800px] bg-[#1A242D] rounded-lg grid grid-cols-mines shadow-xl mt-16">
        <div className="w-full h-full py-6 px-8 flex flex-col border-r-[1px] border-zinc-600">
        <div className="flex flex-col gap-2 w-full">
          {
            !start ? (
              <>
                <Amount start={start} takeAmount={takeGameInfos} display/>
                <MinesNumber start={start} takeMinesNumber={takeGameInfos} display/>
                <StartGame content='Começar o jogo' start startGame={startGame} stopGame={stopGame}/> 
              </>
            ) : (
              <>
                <Amount start={start} takeAmount={takeGameInfos} display={false}/>
                <MinesNumber start={start} takeMinesNumber={takeGameInfos} display={false}/>
                <AmountInGame amount={gameInfos.amount}/>
                <InfosInGame title="multiplicador atual" value={earns.actualMultiplier}/>
                <InfosInGame title="próximo multiplicador" value={earns.nextMultiplier}/>
                <MinesDiamontInfo bombsNum={gameInfos.minesNumber} gemsNum={gameInfos.diamontNumber}/>
                <StartGame startGame={startGame} start={false} stopGame={stopGame} content={`Retirar ${(Number(gameInfos.diamontNumber) + 100).toFixed(2)}` }/>
              </>
            )
          }  
        </div>
        </div>

        <div className='grid gap-1 grid-cols-5 grid-row-5 px-20 pt-4 relative '>
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
      { 
        stop ? <Win multiplier={Number(earns.actualMultiplier).toFixed(2)} amount={gameInfos.amount}/> : <></>
      }


        </div>
      </main>
    </div>
    
  )
}
