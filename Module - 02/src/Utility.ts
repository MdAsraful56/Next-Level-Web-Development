{
    // Utility  types 



interface Person {
    name: string;
    age: number;
    email?: string;
    contactNo: number;
}

// pick 
type Name = Pick<Person, 'name'>;
type NameAge = Pick<Person, 'name' | 'age'>;

// Omit 
type ContactInfo = Omit<Person, 'name'| 'age'>

//Required
type PersonRequired = Required<Person>

//Partial 
type PersonPartial = Partial<Person>

//Readonly
type PersonReadonly = Readonly<Person>

// Record 
type MyObject = Record<string, string>

const object : MyObject = {
    a: 'Hello',
    b: 'Mama',
    c: 'Valo asen'
}



}