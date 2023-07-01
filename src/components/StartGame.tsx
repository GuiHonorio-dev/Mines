"use client"
interface StartGameProps {
  content: string,
  startGame: (button: boolean) => void
  start: boolean 
  stopGame: (yes: boolean) => void
}

export function StartGame({ content, startGame, start, stopGame }: StartGameProps) {
  if(start) {
    return (
      <button 
        className="w-full h-[60px] rounded-md flex items-center justify-center 
          font-bold text-white bg-[#F12C4C] 
          cursor-pointer hover:opacity-90 mt-8" 
        onClick={() => {
          startGame(true)
        }}
      >
        {content}</button>
    )
  } 
  return (
    <button 
        className="w-full h-[60px] rounded-md flex items-center justify-center 
          font-bold text-white bg-[#F12C4C] 
          cursor-pointer hover:opacity-90 mt-8" 
        onClick={() => {
          stopGame(true)
        }}
      >
        {content}</button>
  )
  
}