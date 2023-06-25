"use client"
interface StartGameProps {
  content: string,
}

export function StartGame({ content }: StartGameProps) {
  return (
    <button 
      className="w-full h-[60px] rounded-md flex items-center justify-center 
        font-bold text-white bg-[#F12C4C] 
        cursor-pointer hover:opacity-90 mt-8" 
      onClick={() => {
        console.log('Clicou')
      }}
    >
      {content}</button>
  )
}