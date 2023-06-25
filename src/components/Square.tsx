import { MouseEvent } from 'react'

interface SquareProps {
  key: number,
  className: string,
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  clickable: boolean
}

export function Square({ className, onClick, clickable }: SquareProps) {

  if(clickable) {
    return (
      <div
        className={className}
        onClick={onClick}
      />
    )
  } 
    return (
      <div
        className={className}
        onClick={() => console.log('Nao da para clicar')}
      />
  
    )
}