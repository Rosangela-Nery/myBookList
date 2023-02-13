import { Footer } from "../../components/Footer";
import { BookListComponents, BookRecord } from "./styles";

export function BookList() {
    return (
        <BookListComponents>
            <BookRecord>
                <div>
                    <img src="https://m.media-amazon.com/images/I/51zhRn-CtUL.jpg" alt=""/>
                </div>
                <div>
                    <div>
                        <p>Nome: Bird Box</p>
                        <p>Autor: Josh Malerman</p>
                        <p>Gênero: Supense</p>
                    </div>
                    <div>
                        <button>Quero ler</button>
                        <button>Já li</button>
                    </div>
                </div>
            </BookRecord>
            <BookRecord>
                <div>
                    <img src="https://m.media-amazon.com/images/I/917oLDiFT+S.jpg" alt=""/>
                </div>
                <div>
                    <div>
                        <p>Nome: O melhor de Mim</p>
                        <p>Autor: Nicholas Sparks</p>
                        <p>Gênero: Romance</p>
                    </div>
                    <div>
                        <button>Quero ler</button>
                        <button>Já li</button>
                    </div>
                </div>
            </BookRecord>
            <BookRecord>
                <div>
                    <img src="https://m.media-amazon.com/images/I/91kAw3CSBzL.jpg" alt=""/>
                </div>
                <div>
                    <div>
                        <p>Nome: Um Porto Seguro</p>
                        <p>Autor: Nicholas Sparks</p>
                        <p>Gênero: Romance</p>
                    </div>
                    <div>
                        <button>Quero ler</button>
                        <button>Já li</button>
                    </div>
                </div>
            </BookRecord>
            <BookRecord>
                <div>
                    <img src="https://m.media-amazon.com/images/I/91MEkXRlNjS.jpg" alt=""/>
                </div>
                <div>
                    <div>
                        <p>Nome: Uma Longa Jornada</p>
                        <p>Autor: Nicholas Sparks</p>
                        <p>Gênero: Romance</p>
                    </div>
                    <div>
                        <button>Quero ler</button>
                        <button>Já li</button>
                    </div>
                </div>
            </BookRecord>
            <BookRecord>
                <div>
                    <img src="https://m.media-amazon.com/images/I/A1s+6nCSdmL.jpg" alt=""/>
                </div>
                <div>
                    <div>
                        <p>Nome: viagem ao centro da terra</p>
                        <p>Autor: Jules Verne</p>
                        <p>Gênero: Ação e aventura</p>
                    </div>
                    <div>
                        <button>Quero ler</button>
                        <button>Já li</button>
                    </div>
                </div>
            </BookRecord>
            <Footer />
        </BookListComponents>
    )
}