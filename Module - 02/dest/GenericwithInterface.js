"use strict";
{
    const person01 = {
        name: 'AShraful',
        computer: {
            brand: 'HP',
            price: 120000,
        },
        smartWatch: {
            brand: 'MI',
            price: 3000
        }
    };
    const person02 = {
        name: 'Rain',
        computer: {
            brand: 'mac',
            price: 140000
        },
        smartWatch: {
            brand: 'Apple',
            price: 12000,
            healthCheak: true,
            display: 'OLED'
        }
    };
    console.log(person02.smartWatch.display);
}
