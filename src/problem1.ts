{
    // Problem - 1

    const sumArray = (value: number[]): number => {
        let sum = 0
        for (let index = 0; index < value.length; index++) {
            sum += value[index]
        }
        return sum
        
    }

    const res: number = sumArray([1, 2, 3, 4, 5])

    console.log(res);
    
    //
}