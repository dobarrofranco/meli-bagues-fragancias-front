import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../redux/Actions/actions'
// import Carousel from '../../components/Carousel/Carousel'
import Filter from '../../components/Filter/Filter'
import CardsContainer from '../../components/CardsContainer/CardsContainer'
import SearchBar from '../../components/SearchBar/SearchBar'
import style from './Home.module.css'


const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    },[])
    
    return (
        <div className={style.backHome}>

            <SearchBar />

            <p className={style.fraganciaName}>Fragancias</p>

            <Filter />
            {/* <Carousel /> */}

            <CardsContainer />

        </div>
    )
}

export default Home