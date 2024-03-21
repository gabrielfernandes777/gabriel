print('****************************')
print('bem vindo, ao JOGO DAS CORES')
print('****************************')

#Definindo a cor secreta
corSecreta = roxo

#Definindo o numeros de tentativa
numerosTentativa = 5
rodada = 1

while(rodada <= numerosTentativa):

    print('tentativa' ,rodada, 'de' , numerosTentativa)

#Recebendo o cute do jogador
    chuteString = input('Digite uma cor: ')

    chute = int(chuteString)

#Declaração as condiçoes
    if (corSecreta == chute):
        print('Voce acertou!')
        break
    elif(chute>corSecreta):
        print('Voce errou!! O numero secreto é um numero menor')
    else:
        print('Voce errou!! O numero secreto é um numero maior')
        
#numerosTentativas = numerosTentativa - 1
    roadada = rodada + 1