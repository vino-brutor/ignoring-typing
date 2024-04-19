//colocando o "?" torna a tipagem opcional

function sendSpaceship(spaceShip: {pilot:string, copilot?:string}){
    //...
}


sendSpaceship({pilot: 'han solo', copilot: 'Chewbaca'})
sendSpaceship({pilot: `Luke`})

// colocando o tipo de "unkown" faz com q o tipo da variável seja desconhecido

let input: unknown

input = 'test'
input = 11
input = []

let text: string

// text = input dá erro porém o contrário da certo
input = text

//tbm tem o "any" que ignora completamente as regras, mas n deve ser mt usado pq nem faz sentido usar

let inputANY: any

input = 'texto'
input = 20

text = inputANY

//o never faz com que a variável n consiga receber valor nenhum, serve mais pra informar a si mesmo de q certo tipo nunca deveria ser usado em certa ocasião
