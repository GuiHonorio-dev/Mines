interface AmountInGameProps {
  amount: string
}

export function AmountInGame({ amount }: AmountInGameProps) {
  return (
    <div className="w-full flex">
      <div className="flex flex-col h-14 w-48 bg-[#0F1923] px-4 pt-2 gap-1 rounded-md relative">
        <label htmlFor="quantity" className="text-[8px] font-semibold  text-zinc-400">Quantia</label>
        <p className="outline-none text-zinc-200 text-sm">{amount}</p>
        <p className="absolute font-bold text-zinc-400 right-5 top-4">R$</p>
      </div>
    </div>
  )
}