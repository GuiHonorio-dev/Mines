"use client"

export function generateBombsPos(bombsNum: number) {
    let bombsPositions:number[] = []
    while(bombsPositions.length < bombsNum) {
      let pos = Math.floor(Math.random() * 25)
      if(!bombsPositions.includes(pos)) {
        bombsPositions.push(pos)
      }
    }

    return bombsPositions
}
