import { useEffect, useState, createContext } from "react";
import { api } from "../lib/axios";

export const BooksContext = createContext({});

export function BookTransactionProvider({ children }) {
    const [transactions, setTransactions] = useState([])

    async function fetchBooks(query) {
        const response = await api.get('/bookTransactions', {
            params: {
                q: query,
            }
        })

        setTransactions(response.data);
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    return (
        <BooksContext.Provider value={{ 
            transactions,
            fetchBooks,
        }}>
            {children}
        </BooksContext.Provider>
    )
}