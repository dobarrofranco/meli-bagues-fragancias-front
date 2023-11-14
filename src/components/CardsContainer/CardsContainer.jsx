import React from 'react';
import {useSelector} from 'react-redux';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';

const CardsContainer = () => {
    
    const products = useSelector(state => state.products);    
    
    return (
        <div className={style.cardsContainer}>

            {products.map((product) => (
                <Card
                    id={product?.id}
                    key={product?.id}
                    name={product?.name}
                    description={product?.description}
                    price={product?.price}
                    image={product?.image}
                    gender={product?.gender}
                    replica={product?.replica}
                    stock={product?.stock}
                    fragance={product?.fragance}
                />
            ))}

        </div>
    )
}

export default CardsContainer