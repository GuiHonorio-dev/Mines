export function multiplier(bombsNum: string, gemNum: string) {
  let actualMultiplier = (Number(Number(gemNum) - 1) * 0.2126).toString()
  let nextMultiplier = (Number(actualMultiplier) + 1).toString()

  return {
    actualMultiplier,
    nextMultiplier
  }
}