{
    // Asynchronous 

    const createPromiss = () : Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data : string | null = 'Somthing';
            if (data) {
                resolve(data);
            } else {
                reject('Failed to Load Data');
            }
        });
    }

    const showData = async () => {
        const data = await createPromiss(); 
        console.log(data);
        return data;
    }


const result123 = showData();

console.log(result123);

const getToDo = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}

getToDo();















}