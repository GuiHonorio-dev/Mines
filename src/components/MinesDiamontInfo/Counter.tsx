interface CounterProps {
  title: string,
  value: string
}

export function Counter({ title, value }: CounterProps) {
  return(
      <div className="flex flex-col gap-1 justify-center">
      <p className="text-[10px] font-bold ml-1  text-zinc-400">{title.toUpperCase()}</p>
      <div className="flex items-center h-14 w-[9.5rem] bg-[#0F1923] px-4 gap-1 rounded-md relative">
        <p className="text-sm ml-1  text-zinc-200">{value}</p>
      </div>
    </div>

  )
}