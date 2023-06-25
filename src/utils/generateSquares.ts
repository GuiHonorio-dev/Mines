export function generateSquareList(clickable: boolean) {
  let squareList = []

  for(let i = 0; i < 25; i++) {
    squareList[i] = {
      id: i,
      className: 'w-[125px] h-[125px] bg-[#1D2730] rounded-lg shadow-lg cursor-pointer',
      clickable
    } 
  }
  return squareList
}