import { Footer } from "../../components/Footer";
import { SearchForm } from "../../components/SearchForm";
import { BookListComponents, BookRecord, ChoiceButton, InformationField } from "./styles";

export function SearchBook() {
    return (
        <BookListComponents>
            <SearchForm />
            <BookRecord>
                <img src="https://m.media-amazon.com/images/I/51zhRn-CtUL.jpg" alt=""/>
                <InformationField>
                    <div>
                        <p>Nome: Bird Box</p>
                        <p>Autor: Josh Malerman</p>
                        <p>Gênero: Supense</p>
                    </div>
                    <ChoiceButton>
                        <button>Quero ler</button>
                        <button>Já li</button>
                    </ChoiceButton>
                </InformationField>
            </BookRecord>
            <BookRecord>
                <img src="https://m.media-amazon.com/images/I/917oLDiFT+S.jpg" alt=""/>
                <InformationField>
                    <div>
                        <p>Nome: O melhor de Mim</p>
                        <p>Autor: Nicholas Sparks</p>
                        <p>Gênero: Romance</p>
                    </div>
                    <ChoiceButton>
                        <button>Quero ler</button>
                        <button>Já li</button>
                    </ChoiceButton>
                </InformationField>
            </BookRecord>
            <BookRecord>
                <img src="https://m.media-amazon.com/images/I/91kAw3CSBzL.jpg" alt=""/>
                <InformationField>
                    <div>
                        <p>Nome: Um Porto Seguro</p>
                        <p>Autor: Nicholas Sparks</p>
                        <p>Gênero: Romance</p>
                    </div>
                    <ChoiceButton>
                        <button>Quero ler</button>
                        <button>Já li</button>
                    </ChoiceButton>
                </InformationField>
            </BookRecord>
            <BookRecord>
                <img src="https://m.media-amazon.com/images/I/91MEkXRlNjS.jpg" alt=""/>
                <InformationField>
                    <div>
                        <p>Nome: Uma Longa Jornada</p>
                        <p>Autor: Nicholas Sparks</p>
                        <p>Gênero: Romance</p>
                    </div>
                    <ChoiceButton>
                        <button>Quero ler</button>
                        <button>Já li</button>
                    </ChoiceButton>
                </InformationField>
            </BookRecord>
            <BookRecord>
                <img src="https://m.media-amazon.com/images/I/A1s+6nCSdmL.jpg" alt=""/>
                <InformationField>
                    <div>
                        <p>Nome: viagem ao centro da terra</p>
                        <p>Autor: Jules Verne</p>
                        <p>Gênero: Ação e aventura</p>
                    </div>
                    <ChoiceButton>
                        <button>Quero ler</button>
                        <button>Já li</button>
                    </ChoiceButton>
                </InformationField>
            </BookRecord>
            <Footer />
        </BookListComponents>
    )
}