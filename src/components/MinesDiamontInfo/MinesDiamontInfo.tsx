import { Counter } from "./Counter";

interface MinesDiamontInfoProps {
  bombsNum: string,
  gemsNum: string
}

export function MinesDiamontInfo({ bombsNum, gemsNum }: MinesDiamontInfoProps) {
  return (
    <div className="flex items-center gap-2 mt-2">
      <Counter title="Bombs" value={bombsNum}/>
      <Counter title="Gems" value={gemsNum}/>
    </div>
  )
}