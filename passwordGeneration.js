let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

for(i=1; i<str.length; i++){
    let char = Math.floor(Math.random() * str.length)
    pass += str.charAt(char)
}

console.log(pass)