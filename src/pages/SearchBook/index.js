import { useContext } from "react";
import { Footer } from "../../components/Footer";
import { SearchForm } from "../../components/SearchForm";
import { BooksContext } from "../../contexts/BookContext";
import { BookListComponents, BookRecord, ChoiceButton, InformationField } from "./styles";

export function SearchBook() {
    const { transactions } = useContext(BooksContext);

    return (
        <BookListComponents>
            <SearchForm />
            {transactions?.map(transaction => {
                return (
                    <BookRecord key={transaction.id}>
                        <img src={transaction.image} alt=""/>
                        <InformationField>
                            <div>
                                <p>Nome: {transaction.name}</p>
                                <p>Autor: {transaction.author}</p>
                                <p>Gênero: {transaction.gender}</p>
                            </div>
                            <ChoiceButton>
                                <button>Quero ler</button>
                                <button>Já li</button>
                            </ChoiceButton>
                        </InformationField>
                    </BookRecord>
                )
            })}
            <Footer />
        </BookListComponents>
    )
}