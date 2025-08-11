txt.addEventListener('input', (event) => {
    let text = event.target.value;

    // omitir signos
    text = text.replace(/[$\.¿\?,;]/g, " ");

    // omitir espacios
    text = text.replace(/\s+/g, " ").trim();

    // convertir a mayusculas
    text = text.toUpperCase();

    // convertir un String a un Array a partir de un caracter(en este caso " ")
    const words = text.split(" ");

    // buscar palabras repetidas
    const resultWords = words.reduce((ac, word) => {
        ac.filter(w=>w.word === word).length === 0 ?
            ac.push({
                word: word, total: 1
            }) :
            ac.find(w=>w.word === word).total++

            return ac;
    }, []);

    // mostrar en el div
    result.innerHTML = resultWords.reduce((ac, w)=>{
        return ac +  `<p>
            <label>${w.word}</label>: ${w.total}
        
        </p>`
    }, "");

    console.log(resultWords);
});