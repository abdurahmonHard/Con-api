import React, {useState, createContext} from "react";

export const Kino = createContext();

export const KinoProvider = ({children}) => {
    const [data, setData] = useState([
        {id:1, name: "Harry pottor", price: '100$'},
        {id:2, name: "Borilar", price: '200$'},
        {id:3, name: "bolalar", price: '300$'},
        {id:4, name: "emris", price: '400$'},
    ])

    return(
        <Kino.Provider value={[data, setData]} >
            {children}
        </Kino.Provider>
    )
}










