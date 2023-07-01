# bombNum = int(input())
# diamontNum = 25 - bombNum


# if bombNum == 0:
#   for c in range(25):
#     bombNum = c + 1
#     initialMultiplier = bombNum * 0.2126
#     print(f'Multiplicador inicial de {c + 1}: {initialMultiplier}')


for c in range(25):
  bombNum = c + 1
  diamontNum = 25 - bombNum
  print(f'Numero de bombas: {bombNum}')
  for k in range(diamontNum):
    initialMultiplier = bombNum * 0.2126
    chanceDeErro = diamontNum / 25
    risk = (bombNum / diamontNum) + chanceDeErro 
    nextMultiplier = initialMultiplier + risk
    print(f'      Numero de diamantes: {diamontNum}; Multiplicador Inicial: {initialMultiplier}; Proximo Multiplicador: {nextMultiplier}')
    diamontNum -= 1