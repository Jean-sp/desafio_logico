
let nomeHeroi = "Dok"
let expHeroi = 10001
let nivel = ""

function texto(nivel){
    console.log("O heroi "+ nomeHeroi +" esta no nivel "+ nivel)
}

if (expHeroi <= 1000){
    nivel = "Ferro"
}else if (expHeroi <= 2000){
    nivel = "Bronze"
}else if (expHeroi <= 5000){
    nivel = "Prata"
}else if (expHeroi <= 7000){
    nivel = "Ouro"
}else if (expHeroi <= 8000){
    nivel = "Platina"
}else if (expHeroi <= 9000){
    nivel = "Ascendente"
}else if (expHeroi <= 10000){
    nivel = "Imortal"
}else{
    nivel = "Radiante"
}

texto(nivel)