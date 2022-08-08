import React, {useState} from 'react';

export const SessionContext = React.createContext();


export default function SessionProvider (props){
    const {children} = props;
    const [cart] =useState([]);

    return (
        <SessionContext.Provider value={{cart}}>
            {children}
        </SessionContext.Provider>
    );
}