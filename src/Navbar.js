import  React, {useContext} from 'react'
import  {Container,Item } from './NavbarStyle'
import {Kino} from './contex'
const Navbar  = ()=>{
    const [data, setData] = useContext(Kino)
    return(
        <Container>
            <Item>MoviList</Item>
            <Item>{data.length}</Item>
        </Container>
    )
}

export default Navbar;




