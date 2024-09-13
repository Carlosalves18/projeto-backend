import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
import { TableContainer, Th, Thead, Tr, Td, Tbody, Button } from '../styles/Table'

const Table = ({users, setBooks}) => {
  const deleteRow = async (id) =>{
    await axios.delete(`http://localhost:7777/${id}`)
    .then(({data})=>{
      toast.success((data))
    })
    .catch(()=> console.error("Não foi possivel deleta"))
  }

  return (
    <TableContainer>
        <Thead>
            <Tr>
                <Th>Título</Th>
                <Th>Autor(a)</Th>
                <Th>Editora</Th>
            </Tr>
        </Thead>
        <Tbody>
          {
            users.map((item, i) => (
              <Tr key={i}>
                <Td>{item.titulo}</Td>
                <Td>{item.autor}</Td>
                <Td>{item.editora}</Td>
                <Td><Button onClick={() => deleteRow(item.id)}>EXCLUIR</Button></Td>
              </Tr>
            ))
          }
        </Tbody>
    </TableContainer>
  )
}

export default Table