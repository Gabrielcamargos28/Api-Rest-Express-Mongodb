import mongoose from "mongoose";

mongoose.connect("mongodb+srv://gabrielCamargos:gabriel28988751014@cluster0.odkcenz.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;