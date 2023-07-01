interface WinProps {
  multiplier: string,
  amount: string
}

export function Win({ amount, multiplier }: WinProps) {
  return (
    <div className="absolute left-2/4 translate-x-[-50%] top-2/4 translate-y-[-55%] flex flex-col justify-between items-center w-[300px] h-[200px] bg-[#03CC70] text-white font-bold text-6xl rounded-lg">
      <div className="h-3/4 w-full flex items-center justify-center">{ `X${multiplier}` }</div>
      <footer className="flex items-center justify-center w-full h-[23%] bg-[#01A55B] text-white font-bold text-2xl rounded-b-lg">
        {`YOU WON $${amount}`}
      </footer>
    </div>
  )
}