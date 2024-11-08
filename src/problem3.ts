{
    // Problem 3

    const countWordOccurrences  = (value: string, word: string): number => {
        const sentence = value.split(/\b/);
        const count = sentence.filter((w: string) => w.toLocaleLowerCase() === word.toLocaleLowerCase()).length
        return count
        
    }

    const res = countWordOccurrences("I love typescript", "typescript")
    console.log(res);
    //
}