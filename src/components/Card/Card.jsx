import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({ id, name, price, image }) => {


    return (
        <NavLink className={style.navLink} to={`/detail/${id}`}>
            <div className={style.cardContainer}>
                <h2>{name}</h2>
                <h2>$ {price}</h2>
                <img className={style.imgCard} src={image} alt={`Product ${name}`} />
                <div className={style.comprarContainer}>
                    <h2 className={style.textComprar}>Comprar</h2>
                </div>
            </div>
        </NavLink>

    )
}

export default Card