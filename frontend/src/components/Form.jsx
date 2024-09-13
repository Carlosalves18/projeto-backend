import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import { FormContainer, Label, Input, Button } from '../styles/Form'
import axios from "axios"

const Form = () => {

  const ref = useRef();

  const handleSubmit = async(event) => {
    event.preventDefault();

    const book = ref.current;

    if(!book.titulo.value || !book.autor.value || !book.editora.value) {
      return toast.warn("Preencha todos os campos do formulário!")
    }

    await axios.post("http://localhost:7777", {
      titulo: book.titulo.value,
      autor: book.autor.value,
      editora: book.editora.value
    })
    .then(()=> toast.success("Cadastrado com sucesso"))
    .catch(()=> toast.error("Não foi possivel cadastra"))
  }

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
        <Label>Titulo</Label>
        <Input name='titulo' />
        <Label>Autor(a)</Label>
        <Input name='autor'/>
        <Label>Editora</Label>
        <Input name='editora'/>
        <Button type='submit'>ADICIONAR</Button>
    </FormContainer>
  )
}

export default Form