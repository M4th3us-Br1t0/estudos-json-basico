const objs = [
    {
        nome: "Matheus",
        idade: 19,
        estar_trabalhando: true,
        detahles_profissao:{
            profissao: "Programador",
            empresa: "Empresa X"
        },
        hobbies: ["Programar", "Correr", "Ler"]
    },
    {
        nome: "João",
        idade: 25,
        estar_trabalhando: false,
        detahles_profissao:{
            profissao: null,
            empresa: null
        },
        hobbies: ["Jogar", "Academia"]
 
    }
]

// JSON
// converter objeto para json
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// converter json para objeto
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})