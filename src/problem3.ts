{
    // Problem 3

    const countWordOccurrences  = (value: string, word: string): number => {
        const sentence = value.split(/\b/);
        const count = sentence.filter((w: string) => w.toLocaleLowerCase() === word.toLocaleLowerCase()).length
        return count
        
    }

    const res = countWordOccurrences("TypeScript is great. I love TypeScript!. this is typescript code", "typescript")
    console.log(res);
    //
}