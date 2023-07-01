export function generateSquareList(clickable: boolean) {
  let squareList = []

  for(let i = 0; i < 25; i++) {
    squareList[i] = {
      id: i,
      className: 'w-[125px] h-[125px] bg-[#262D38] rounded-md shadow-lg cursor-pointer opacity-6',
      clickable
    } 
  }
  return squareList
}