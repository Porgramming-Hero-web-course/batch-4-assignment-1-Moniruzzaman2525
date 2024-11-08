{
    // Problem 7 

    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year
        }

        getCarAge (): number {
            // const currentYear = new Date().getFullYear();
            const currentYear = 2024
            const currentCarYear = currentYear - this.year;
            return currentCarYear
        } 
    }

    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge());
    //
}