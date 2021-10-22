function tabuada(number) { 
    let output = [];
    for (let counter = 0; counter <= number; counter++) {
        output[counter] = [];
        for (let subcounter = 0; subcounter <= number; subcounter++){
            let mult = counter * subcounter;
            output[counter].push(mult);
        }
    }
    console.table(output)
}

tabuada(12)