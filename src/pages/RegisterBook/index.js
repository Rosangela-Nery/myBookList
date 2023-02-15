import { MagnifyingGlass } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { RegisterBookComponents } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";

const registerBookSchema = z.object({
    image: z.string().url(),
    name: z.string(),
    author: z.string(),
    gender: z.string(),
})

export function RegisterBook() {

    const { 
        register,
        handleSubmit,
        formState: {
            isSubmitting
        },
        reset,
    } = useForm({
        resolver: zodResolver(registerBookSchema)
    })

    async function handleCreateNewRegisterBook(data) {
        const { image, name, author, gender } = data;

        await api.post('/book', {
            image,
            name,
            author,
            gender,
            createdAt: new Date(),
        })

        reset();
    }

    return (
        <RegisterBookComponents onSubmit={handleSubmit(handleCreateNewRegisterBook)}>
            <div className="registerBook">
                <input
                    type="text"
                    placeholder="Nome do livro"
                    name="name"
                    {...register('name')}
                    required
                />
                <input
                    type="text"
                    placeholder="Autor"
                    name="autor"
                    {...register('author')}
                    required
                />
                <input
                    type="text"
                    placeholder="Gênero"
                    name="genero"
                    {...register('gender')}
                    required
                />
                <p>Escolha uma foto de capa para o livro:</p> 
                <input
                    type="text"
                    name="url"
                    placeholder="url da imagem"
                    {...register('image')}
                    required
                />
                <button disabled={isSubmitting}>Cadastrar</button>
            </div>
            <NavLink className="navLink" to="/searchbook" title="booklist">
                <button className="button"><MagnifyingGlass size={20} />Procurar livro</button>
            </NavLink>
            <Footer />
        </RegisterBookComponents>
    )
}