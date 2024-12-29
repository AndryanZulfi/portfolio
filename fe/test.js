let names = [
    {
        id: 1,
        name: 'Andryan'
    },
    {
        id: 2,
        name: 'Andryan'
    },
    {
        id: 3,
        name: 'Andryan'
    }
]

let fixedTop = names.map((acc, i) => 15 + (3 * i))

let top = 15
// for(names in names){
//     fixedTop.push(top)
//     top += 3
// }

console.log(fixedTop)