"use client"
import { CaretDown, CaretUp } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18 ,19, 20, 21, 22, 23, 24]

interface MinesNumberProps {
  start: boolean
  takeMinesNumber: (amount: string, type: string) => void
  display: boolean
}

export function MinesNumber({ takeMinesNumber, start, display }: MinesNumberProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [minesNumber, setMinesNumber] = useState<string>('2')

  useEffect(() => {
    if(start) {
      takeMinesNumber(minesNumber, 'minesNumber')
    }
  }, [start])

  if(display) {
    return (
      <div className="relative f lex flex-col items-start w-full h-12 mt-3">
       <p className="text-zinc-400 text-[10px] font-bold">NÚMERO DE MINAS</p>
         <button 
           onClick={() => setIsOpen((prev) => !prev)} 
           className="bg-[#0F1923] p-4 w-full flex items-center justify-between rounded-md text-zinc-200">
           {minesNumber}
   
           {
             !isOpen ? (
               <CaretDown size={16} weight="bold" color="#ACB1CD" />
             ) : (
               <CaretUp size={16} weight="bold" color="#ACB1CD" />
             )
           }
           </button>
   
           {isOpen && (
             <div 
               className="absolute bg-[#0F1923] top-16 flex flex-col items-start rounded-lg h-[400px] w-[90%] overflow-y-scroll">
               
               {
                 numbers.map((items, i) => (
                   <div 
                     className="text-zinc-200 px-4 hover:bg-blue-500 w-full" key={i}
                     onClick={() => {setMinesNumber(items.toString()); setIsOpen(false)} }
                     >
                     {items}
                   </div>
                 ))
               }
               
             </div>
           )}
      </div>)
  }
  return (
    <></>
  )

  
}