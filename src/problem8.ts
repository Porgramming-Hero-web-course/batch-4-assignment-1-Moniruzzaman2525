{
    // Problem 8
    interface Person {
        name: string;
        age: number;
        email: string
    }

    const validateKeys = <T extends Person>(obj: T, keys: (keyof T)[]): boolean => {
        const value = keys.every(key => key in obj)
        return value
    }
    const person: Person = { name: "Monir", age: 25, email: "monir@gmail.com" };
    const res : boolean = validateKeys(person, ["name", "age"])
    console.log(res);

    //
}