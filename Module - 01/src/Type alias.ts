{
    // Type alias

    type Student = {
        name : string;
        age : number;
        adderss ?: string;
        contact ?: number
    }

    const student1 : Student = {
        name: 'Ashraful',
        age: 20,
        adderss: 'Dosmontara',
        contact: +8801889245756
    }

    const student2 : Student = {
        name: 'Rain',
        age: 23,
        adderss: 'Madra',
        contact: +8801278541555
    }
    const student3 : Student = {
        name: 'Shanto',
        age: 20,
        adderss: 'Dosmontara',
    }



    type UserName = string ;
    type IsAdmin = boolean ;
    
    const DJName : UserName = "Saiful DJ";
    const isAdmin : IsAdmin = false;



    type Sum = (x : number, y : number) => number

    const sum : Sum = (number1, number2) => number1 + number2;


}