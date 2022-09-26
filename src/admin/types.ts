import * as mongoDB from "mongodb"

export const collections:{users?: mongoDB.Collection}={}
export const Questions:{ques?: mongoDB.Collection}={}

export async function connectToDatabase() {
    const client:mongoDB.MongoClient=new mongoDB.MongoClient(
        "mongodb+srv://suresh:suresh2003@cluster0.wj06ere.mongodb.net/?retryWrites=true&w=majority"
   
    )

    await client.connect()

    const db:mongoDB.Db=client.db("db")
    
    const users:mongoDB.Collection=db.collection("user")
    const ques:mongoDB.Collection=db.collection("ques")
    collections.users=users
    Questions.ques=ques
}