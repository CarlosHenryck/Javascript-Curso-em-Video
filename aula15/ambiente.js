let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)

if(pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}



// num[3] = 6
// num.push(7)     | Adicionar numero ao vetor
// num.length
// num.sort()      | Organizar vetor em ordem crescente
//num.indexOf(5)   | procurar numero no vetor, retorna -1 caso não encontre o valor