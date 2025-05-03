{

    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            price: number;
        };
        smartWatch: T
    }


    const person01 : Developer<{brand: string, price: number}> = {
        name: 'AShraful',
        computer: {
            brand: 'HP',
            price: 120000,
        },
        smartWatch: {
            brand: 'MI',
            price: 3000
        }
    }


    interface Watch {
        brand: string;
        price: number;
        healthCheak: boolean;
        display: string
    }



    const person02 : Developer<Watch> = {
        name: 'Rain',
        computer: {
            brand: 'mac',
            price: 140000
        },
        smartWatch : {
            brand: 'Apple',
            price: 12000,
            healthCheak: true,
            display: 'OLED'
        }
    }

console.log(person02.smartWatch.display);


}