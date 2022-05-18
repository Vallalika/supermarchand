import React, { useState, useEffect, useContext} from "react";
import UserContext from "../context/UserContext";
import BasketItem from "./BasketItem";
// import Item from "./Item";

const Basket = () => {

    const {user, setUser} = useContext(UserContext)

    const userWeapons = user.basket.map((weapon, index) => {
        return <><BasketItem key={index} weapon={weapon} /></>
    })

    return (
        <>
            <h2>{user.name}</h2>
            <ul>
                { userWeapons }
            </ul>

        </>
    )
}

export default Basket