import React, { useState } from 'react'
import style from './SearchBar.module.css'
import { searchByName } from '../../redux/Actions/actions'
import { useDispatch } from 'react-redux'
import { FaSearch } from 'react-icons/fa'
 
const SearchBar = () => {

    const dispatch = useDispatch(); 

    const [name, setName] = useState()

    const [nameError, setNameError] = useState(false);

    const changeHandler = (event) => {
        event.preventDefault();
        setName(event.target.value)
    } 

    const dispathHandler = () => {
        dispatch(searchByName(name));
    }

    return (
        <div className={style.searchContainer}>

            <input type="search" name="searchBar" onChange={changeHandler} value={name} className={style.searchBar} placeholder='¿Qué estás buscando?' />
            <button className={style.btnSearch} onClick={dispathHandler} ><FaSearch className={style.searchLogo}/></button>

        </div>
    )
}

export default SearchBar