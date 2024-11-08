{
    // 
    type Person = {
        name: string;
        age: number
    }

    const getProperty =<T, Q extends keyof T> (obj: T, key: Q): T[Q]=> {
        return obj[key]
    }

    const person: Person = {
        name: 'Md Monir',
        age: 25
    }
    const res = getProperty(person, 'name')
    console.log(res);
    //

}