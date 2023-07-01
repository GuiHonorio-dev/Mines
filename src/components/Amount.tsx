"use client"

import { useEffect, useState } from "react"

interface AmountProps {
  start: boolean
  takeAmount: (amount: string, type: string) => void
  display: boolean
}

export function Amount({ takeAmount, start, display }: AmountProps) {
  const [money, setMoney] = useState('')
  
  if(money === '0') {
    setMoney('')
  }
  useEffect(() => {
    if(start) {
      takeAmount(money, 'amount')
    }
  }, [start])
  

  if(display) {
    return (
      <div className="w-full flex">
        <div className="flex flex-col h-14 w-48 bg-[#0F1923] px-4 pt-2 gap-1 rounded-md relative">
          <label htmlFor="quantity" className="text-[8px] font-semibold  text-zinc-400">Quantia</label>
          <input 
            onChange={(event) => setMoney(event.target.value)} 
            name="quantity" 
            type="number" 
            className="outline-none text-zinc-200 text-sm" 
            value={money}
          />
          <p className="absolute font-bold text-zinc-400 right-5 top-4">R$</p>
          </div>
  
          <div 
          className=
          "flex items-center justify-center h-14 w-16 text-sm text-[#ACB1CD] font-semibold border-[1px] rounded-md border-zinc-600 cursor-pointer"
          >
            ½
          </div>
          
          <div 
          className=
          "flex items-center justify-center h-14 w-16 text-sm text-[#ACB1CD] font-semibold border-[1px] rounded-md border-zinc-600 cursor-pointer">
            2x
          </div>
        </div>
    )
  } else {
    return (
      <></>
    )
  }
  
}