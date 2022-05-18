import React, { useState, useEffect, useContext} from "react";
import UserContext from "../context/UserContext";
import styled from "styled-components";

const WeaponImage = styled.img`
    width: 15%;
    height: 15%;
    margin: 0;
    padding: 1em;
`

const ItemFlex = styled.div`
    display: flex;
    flex-direction: column;
`

const Item = ({weapon}) => {

    const {user, setUser} = useContext(UserContext)

    const handleClick = () => {
        const temp = {...user}
        temp.basket.push(weapon.name)
        setUser(temp)
    }

    return (
        <>
            <ItemFlex>
                <WeaponImage src={weapon.image}/>
                {weapon.name}
                <button onClick={handleClick}>Add to basket</button>
                <br />
            </ItemFlex>

        </>
    )
}

export default Item