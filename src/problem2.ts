{
    // Problem 2

    const removeDuplicates = (value: number[]): number[] => {
        const removeDuplicateArray =  value.filter((num, index) => value.indexOf(num) === index);

        return removeDuplicateArray
    }

    // const res: number[] = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    const res: number[] = removeDuplicates([5,5,3, 1, 4, 2, 2])

    console.log(res);
    

    //
}