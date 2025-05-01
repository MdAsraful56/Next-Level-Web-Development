{


    // Never,unknown and nullable type

    const searchName = (value : string | null) => {
        if (value) {
            console.log('searching.....');
        } else {
            console.log('No is not good');
        }
    }

    searchName(null)


    // unknow types 

    const getSpeedInMeterPerSecond = (value : unknown) => {
        if (typeof value === 'number') {
            const convaterdSpeed = (value * 1000) /3600;
            console.log(`The Speed is ${convaterdSpeed}`);
        } 
        else if (typeof value === 'string') {
            const [result, unit] = value;
            const convaterdSpeed = (parseFloat(result) * 1000) /3600;
            console.log(`The Speed is ${convaterdSpeed}`);
        } 
        else {
            console.log(`Wrong Input`);
        }
    }

    getSpeedInMeterPerSecond(1234);



    const throwError = (mgs:string) : never => {
        throw new Error(mgs);
    }
    

    throwError('Main problems is not run ts is vs code');








}