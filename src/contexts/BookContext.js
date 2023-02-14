import { useEffect, useState } from "react";
import { createContext } from "use-context-selector";

export const BooksContext = createContext({});


export function BookTransactionProvider({ children }) {
    const [transactions, setTransactions] = useState([])

    async function loadTransactions() {
        const response = await fetch('http://localhost:3005/bookTransactions');
        const data = await response.json();

        setTransactions(data);
    }

    useEffect(() => {
        loadTransactions();
    }, [])

    return (
        <BooksContext.Provider value={{ transactions }}>
            {children}
        </BooksContext.Provider>
    )
}