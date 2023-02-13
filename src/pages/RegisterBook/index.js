import { MagnifyingGlass } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { RegisterBookComponents } from "./styles";

export function RegisterBook() {
    return (
        <RegisterBookComponents>
            <div className="registerBook">
                <input
                    type="text"
                    placeholder="Nome do livro"
                    name="name"
                    required
                />
                <input
                    type="text"
                    placeholder="Autor"
                    name="autor"
                    required
                />
                <input
                    type="text"
                    placeholder="Gênero"
                    name="genero"
                    required
                />
                <p>Escolha uma foto de capa para o livro:</p> 
                <input
                    type="file"
                    name="arquivos"
                    class="btn btn-success"
                    accept="image/png, image/jpeg"
                    multiple
                />
                <button>Cadastrar</button>
            </div>
            <NavLink className="navLink" to="/searchbook" title="booklist">
                <button className="button"><MagnifyingGlass size={20} />Procurar livro</button>
            </NavLink>
            <Footer />
        </RegisterBookComponents>
    )
}