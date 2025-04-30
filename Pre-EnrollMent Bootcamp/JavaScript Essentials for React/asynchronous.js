function fetchData(callback) {
    setTimeout( () => {
        callback("Hay, Nayma I like You")
    } ,2000)
}

fetchData((data)=> console.log(data));


