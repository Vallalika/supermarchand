import React, { useState, useEffect, useContext} from "react";
import UserContext from "../context/UserContext";
import styled from "styled-components";

const WeaponImage = styled.img`
    width: 150px;
    height: 150px;
    margin: 0;
    padding: 1em;
`

const ItemFlex = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 21%;
    margin: 16px;
    width: 250px;
    height: 250px;
    justify-content: space-between;
    align-items: center;
    border: 5px solid black;
    background-color: silver;
    font-weight: bold;
`

const AddToBasket = styled.button`
    margin: 16px;
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
                <AddToBasket onClick={handleClick}>Add to basket</AddToBasket>
            </ItemFlex>

        </>
    )
}

export default Item