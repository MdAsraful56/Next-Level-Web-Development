import { MongoClient, ServerApiVersion } from "mongodb";

// MongoDB connection string
const uri = "mongodb+srv://workmdasraful56:workmdasraful56@cluster0.hvhc0.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export default client;