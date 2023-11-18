import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../../redux/Actions/actions';

import style from './Detail.module.css';

const Detail = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const product = useSelector(state => state.productDetail);

    const productDetail = product[0];

    useEffect(() => {
        dispatch(getProductsById(id))
    }, [dispatch, id])

    return (
        <div className={style.backDetail}>
            <div className={style.detailContainer}>
                <div className={style.nameContainer}>
                    <h1 className={style.tittleDetail}>{productDetail?.name} - $ {productDetail?.price}</h1>
                    {productDetail?.tribute ? <p className={style.textDetailFragance}>Homenaje</p> : null}
                </div>
                <div className={style.imgContainer}>
                    <img className={style.imgDetail} src={productDetail?.image} alt={productDetail?.name} />
                </div>
                <div className={style.descDetail}>
                    <p className={style.textDetail}>Descripción: </p>
                    <p className={style.textDetail}>{productDetail?.description}</p>
                    <div className={style.detailFragance}>
                        <p className={style.textDetailFragance}>Fragancia: {productDetail?.fragance}</p>
                        <p className={style.textDetailFragance}>Género: {productDetail?.gender}</p>
                    </div>
                </div>

            </div>

            <div className={style.buttonPosition}>
                <a className={style.buttonPosition} href="https://wa.me/message/4PVYWNFCXZEHC1" target='_blank'>
                    <img className={style.wspImage} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="" />
                    <button className={style.button}>Comprar</button>
                </a>
                <div className={style.stockContainer}>
                    <h3>Stock: {productDetail?.stock}</h3>
                </div>
            </div>
        </div>
    )
}

export default Detail