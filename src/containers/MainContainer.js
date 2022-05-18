import React, { useState, useEffect} from "react";
import styled from 'styled-components'
import Basket from "../components/Basket";
import ItemList from "../components/ItemList";
import UserContext from "../context/UserContext";
import weaponImage from '../images/weaponImage.jpg' 


const Header = styled.h1`
    text-align: center;
    font-family: 'Macondo', cursive;
    font-size: 3em;
    color: #ff0000;
    background-color: #000000;
    margin: 0;
    padding: 1em;
`

const MainContainer = () => {

    const initialWeapons = [
        {
            name: 'Morningstar',
            image: weaponImage
        },
        {
            name: 'Warhammer',
            image: weaponImage
        },
        {
            name: 'Bludgeon',
            image: weaponImage
        },
        {
            name: 'Dagger',
            image: weaponImage
        },
        {
            name: 'Shortsword',
            image: weaponImage
        },
        {
            name: 'Glaive',
            image: weaponImage
        },
        {
            name: 'Lance',
            image: weaponImage
        },
        {
            name: 'English Longbow',
            image: weaponImage
        },
        {
            name: 'Welsh Longbow',
            image: weaponImage
        },
        {
            name: 'Byzantine Flamethrower',
            image: weaponImage
        },
        {
            name: 'Nzappa Zap',
            image: weaponImage
        }
    ]

    const [weaponsList, setWeaponsList] = useState(initialWeapons)

    const [user, setUser] = useState({
        name: "Jacqot la brute",
        basket: ['Lance', 'Morningstar']
    })


    return(
        <>
            <Header>Allo, guerrier ⚔️</Header>
            <UserContext.Provider value={{user, setUser}}>
                <ItemList weaponsList={weaponsList}/>
                <Basket/>
            </UserContext.Provider>
        </>
    )
}

export default MainContainer;