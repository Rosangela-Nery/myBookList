import { useState } from "react";
import { createContext } from "use-context-selector";

export const BookContext = createContext({});

export function BookTransactionProvider({ children }) {
    const [transactions, setTransactions] = useState([])

}