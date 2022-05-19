import React, { useState, useEffect } from "react";
import Item from "./Item";
import styled from "styled-components"

const WeaponFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const ItemList = ({weaponsList}) => {

    const weaponArray = weaponsList.map((weapon, index) => {
        return <Item key={index} weapon={weapon} />
    })

    return (
        <WeaponFlex>
            {weaponArray}
        </WeaponFlex>
    )
}

export default ItemList