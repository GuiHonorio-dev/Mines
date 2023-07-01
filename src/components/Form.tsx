import { useState } from "react";
import { Amount } from "./Amount";
import { MinesNumber } from "./MinesNumber";
import { StartGame } from "./StartGame";

export function Form() {
  const [amount, setAmount] = useState('')
  const [quantity, setQuantity] = useState('')

  return (
    <>
      <Amount start={start} takeAmount={takeAmount}/>
      <MinesNumber />
      <StartGame content='Começar o jogo' startGame={startGame}
    </>
  )
}