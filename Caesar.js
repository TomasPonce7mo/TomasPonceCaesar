function ConvertirFrase(frase, cantDesplazamiento){
    f = "";
    const lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for(let i=0;i<frase.length;i++){
        if(lc.indexOf(frase.charAt(i)) != -1){
            let index = lc.indexOf(frase.charAt(i)) + cantDesplazamiento;
            if(index>26){
                index = cantDesplazamiento - (26 - lc.indexOf(frase.charAt(i)));
            }
            f += lc[index];
        }
        if(uc.indexOf(frase.charAt(i)) != -1){
            let index = uc.indexOf(frase.charAt(i)) + cantDesplazamiento;
            if(index>26){
                index = cantDesplazamiento - (26 - uc.indexOf(frase.charAt(i)));
            }
            f += uc[index];
        }
    }
    return f;
}