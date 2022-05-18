import React, { useState, useEffect, useContext} from "react";
import UserContext from "../context/UserContext";


const BasketItem = ({weapon}) => {

    return (
        <>
            <br/>
            {weapon}

        </>
    )
}

export default BasketItem