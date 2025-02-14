// JavaScript Assincrono
// await async
// Fullfilled
//mongodb+srv://islaianelribeiro:<db_password>@cluster0.r4acz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
import { MongoClient } from "mongodb";

const URI =
    "mongodb+srv://islaianelribeiro:WCovrJ3sIjuALZih@cluster0.r4acz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
