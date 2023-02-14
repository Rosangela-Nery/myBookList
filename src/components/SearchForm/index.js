import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
    const { register, handleSubmit } = useForm();

    return (
        <SearchFormContainer>
            <input
                type="text"
                placeholder="Qual livro você procura?"
            />
            <button type="submit">
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormContainer>
    )
}