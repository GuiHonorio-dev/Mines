"use-client"

interface InfosInGameProps {
  title: string,
  value: string,
}

export function InfosInGame({ title, value }: InfosInGameProps) {
  return(
    <div className="flex flex-col justify-center gap-1 mt-3">
      <p className="text-[10px] font-bold ml-1  text-zinc-400">{title.toUpperCase()}</p> 
      <div className="flex flex-col justify-center h-14 w-full bg-[#0F1923] px-4  gap-1 rounded-md relative text-zinc-200 text-sm">
        {value}
      </div>
    </div>
    
  )
}