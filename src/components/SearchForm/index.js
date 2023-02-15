import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { BooksContext } from "../../contexts/BookContext";

const searchFormSchema = z.object({
    query: z.string(),
})

export function SearchForm() {
    const { fetchBooks } = useContext(BooksContext);

    const { 
        register, 
        handleSubmit,
        formState: { isSubmitting }
    } = useForm({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSearchTransactionsBooks(data) {
        await fetchBooks(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactionsBooks)}>
            <input
                type="text"
                placeholder="Qual livro você procura?"
                {...register('query')}
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormContainer>
    )
}