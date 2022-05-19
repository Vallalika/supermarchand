import React, { useState, useEffect, useContext} from "react";
import UserContext from "../context/UserContext";
import BasketItem from "./BasketItem";
import styled from 'styled-components';

const BasketStyle = styled.section`
    color: white;
`

const JacquotStyle = styled.h2`
    margin: 16px;
`

const Basket = () => {

    const {user, setUser} = useContext(UserContext)

    const userWeapons = user.basket.map((weapon, index) => {
        return <BasketItem key={index} weapon={weapon} />
    })

    return (
        <>
            <BasketStyle>
                <JacquotStyle>{user.name}'s basket</JacquotStyle>
                <ul>
                    { userWeapons }
                </ul>
            </BasketStyle>
        </>
    )
}

export default Basket