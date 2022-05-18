import React, { useState, useEffect} from "react";
import Item from "./Item";

const ItemList = ({weaponsList}) => {

    const weaponArray = weaponsList.map((weapon, index) => {
        return <Item key={index} weapon={weapon} />
    })

    return (
        <>
            {weaponArray}
        </>
    )
}

export default ItemList