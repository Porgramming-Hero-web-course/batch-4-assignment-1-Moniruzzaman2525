{
    //
        interface Profile {
            name: string;
            age: number;
            email: string
        }


        const updateProfile = (obj: Profile, updates: Partial<Profile>) : Profile => {
            const update = {...obj, ...updates}
            return update
        }

        const myProfile: Profile = { name: "Monir", age: 25, email: "monir@gmail.com" };
        console.log(updateProfile(myProfile, { age: 26 }));

    //

}