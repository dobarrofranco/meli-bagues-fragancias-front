import React from 'react'
import { useSelector } from 'react-redux'
import { orderName, orderPrice, filterGender } from '../../redux/Actions/actions'
import { useDispatch } from 'react-redux'
import style from './Filter.module.css'

const Filter = () => {

    const dispatch = useDispatch();

    const handleFilters = (event) => {
        const value = event.target.value; 

        if (value === 'min-max' || value === 'max-min') {
            dispatch(orderPrice(value));
        }

        else if (value === 'A-Z' || value === 'Z-A') {
            dispatch(orderName(value));
        }

        else if (value === 'Femenino' || value === 'Masculino') {
            dispatch(filterGender(value));
        }
        

    }

    return (
        <div className={style.filterContainer}>
            <label style={{fontSize: '14px', marginRight: '10px'}}>Filtros:</label>
            <select onChange={handleFilters} className={style.select} id="filtroSelect" name="filtroSelect">
                <option disabled style={{textAlign: 'center'}} >Seleccionar</option>
                <option value="" placeholder='Seleccionar'> </option>
                <option value='max-min'>
                    Precio: Mayor a Menor
                </option>
                <option value='min-max'>
                    Precio: Menor a Mayor
                </option>
                <option value=" "> </option>
                <option value='A-Z'>
                    Nombre: A - Z
                </option>
                <option value='Z-A'>
                    Nombre: Z - A
                </option>
                <option value=" "> </option>
                <option value="Femenino">
                    Género: Femenino
                </option>
                <option value="Masculino">
                    Género: Masculino
                </option>
            </select>

        </div>
    )
}

export default Filter