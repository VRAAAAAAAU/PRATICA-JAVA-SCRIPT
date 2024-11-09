var v = [2, 3, 5, 4, 1, 6,19]
v.push(7)
v.sort((a, b) => a - b);

console.log(v)

for(let p = 0; p < v.length; p++){
    console.log(`posição ${p} contem ${v[p]}`)
    
    }
    console.log(``)
    
    for(let p in v){
        console.log(`posição ${p} contem ${v[p]}`)
    }