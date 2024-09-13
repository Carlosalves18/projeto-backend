import { db } from "../db.js"

export const getBooks = (request, response) => {

    const query = "SELECT * FROM books"

    db.query(query, (error, data) => {
        if(error){
            return response.json(error)
        }
        return response.status(200).json(data)
    })
}
export const addBook = (request, response) => {

    const query = "INSERT INTO books(`titulo`, `autor`, `editora`) VALUES (?)"

    const values = [
        request.body.titulo,
        request.body.autor,
        request.body.editora
    ]

    db.query(query, [values], (error) => {
        if(error){
            return response.json(error)
        }

        return response.status(200).json("Livro cadastrado com sucesso!")
    })
}
export const updateBook = (request, response)=>{

    const query =  "update books set  `titulo` = ?, `autor` = ?, `editora` = ? where `id` = ?"

    const values = [
        request.body.titulo,
        request.body.autor,
        request.body.editora,
    ]

    db.query(query, [...values, request.params.id], (error)=>{
        if(error){
            return response.json(error)
        }

        response.status(200).json("Livro atualizado com sucesso!")
    })
}
export const deleteBook = (request, response)=>{
    const query = "delete from books where `id` = ?";

    db.query(query, [request.params.id], (error) =>{
        if(error){
            return response.status(500).json(error)
        }

        return response.json("Registro deletato com sucesso!")
    })
}