{

    type a1 = number;
    type a2 = undefined;
    
    type x = a1 extends null ? true : false;
    type y = a1 extends null ? true : a2 extends undefined ? true : false;



    type sheikh = {
        bike: string;
        car: string;
    }

    // type checkVehicle<T> = T extends 'bike' | 'car' ? true : false;
    type checkVehicle<T> = T extends keyof sheikh ? true : false;

    type HasTractor = checkVehicle<'tractor'>;












}