import React, {useState, useContext} from "react";
import Movie from './movie';
import {Kino} from './contex';

const MoveiList = ()=> {
    const [data, setData] = useContext(Kino);
    return (
        <div>
            {
                data.map((value, index)=> {
                    return(
                        <Movie key={value.id} data={value}/>
                    )
                })
            }
        </div>
    )
}

export default MoveiList



























