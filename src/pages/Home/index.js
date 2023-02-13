import desenho from "../../assets/drawing.svg"
import { HomeComponents } from "./styles"
import { NavLink } from "react-router-dom"

export function Home() {
    return (
        <HomeComponents>
            <NavLink to="/book" title="Register Book">
                <button>Cadastrar livro</button>
            </NavLink>
            <button>Lista de livros para ler</button>
            <button>Lista de livros que já li</button>

            <img src={desenho} alt="" />
        </HomeComponents>
    )
}