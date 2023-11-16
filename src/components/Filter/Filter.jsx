import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { combinatedFilter, getAllFragances, getProducts } from '../../redux/Actions/actions'
import { useDispatch } from 'react-redux'
import style from './Filter.module.css'

const Filter = () => {

    const fragances = useSelector(state => state.fragances);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllFragances())
    }, []);

    const [filters, setFilters] = useState({
        orderName: '',
        orderPrice: '',
        gender: '',
        tribute: '',
        fragance: ''
    })

    const [selectedFilter, setSelectedFilter] = useState('');

    const handleFilters = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const { value, name } = event.target;

        // Usa el segundo argumento de setFilters para asegurar que el estado esté actualizado
        setFilters(prevFilters => {
            let updatedFilters = { ...prevFilters };

            if (value === 'max-min' || value === 'min-max') {
                updatedFilters.orderPrice = value;
            } else if (value === 'A-Z' || value === 'Z-A') {
                updatedFilters.orderName = value;
            } else if (value === 'Femenino' || value === 'Masculino' || value === 'Unisex') {
                updatedFilters.gender = value;
            }

            else if (value === 'Tribute') {
                updatedFilters.tribute = true;
            }

            if (name === 'fraganceSelect') {
                if (value === 'Todos') {
                    updatedFilters = {
                        orderPrice: '',
                        orderName: '',
                        gender: '',
                        fragance: '',
                        tribute: ''
                    };
                    dispatch(getProducts());
                } else {
                    updatedFilters = {
                        orderPrice: '',
                        orderName: '',
                        gender: '',
                        fragance: '',
                        tribute: ''
                    };
                    updatedFilters.fragance = value;
                }
            }

            // console.log(updatedFilters);

            // Llamar a la acción con el estado actualizado
            dispatch(combinatedFilter(updatedFilters));

            return updatedFilters;
        });

        setSelectedFilter('');
    }

    return (
        <div className={style.filterContainer}>
            <button onClick={handleFilters} className={style.allBtn} name='fraganceSelect' value="Todos">Todas los perfumes</button>
            <label style={{ fontSize: '14px', marginRight: '10px' }}>Filtros:</label>

            {/* Primer select */}
            <select onChange={handleFilters} className={style.select} id="filtroSelect" name="filtroSelect" value={selectedFilter}>
                <option value="" disabled>Seleccionar</option>
                <option value=" " disabled> </option>
                <option value='max-min'>
                    Precio: Mayor a Menor
                </option>
                <option value='min-max'>
                    Precio: Menor a Mayor
                </option>
                <option disabled value=" "> </option>
                <option value='A-Z'>
                    Nombre: A - Z
                </option>
                <option value='Z-A'>
                    Nombre: Z - A
                </option>
                <option disabled value=" "> </option>
                <option value="Femenino">
                    Género: Femenino
                </option>
                <option value="Masculino">
                    Género: Masculino
                </option>
                <option value="Unisex">
                    Género: Unisex
                </option>
                <option disabled value=" ">--------------------------------</option>
                <option value="Tribute">
                    Homenajes
                </option>
            </select>

            {/* Segundo select */}
            <label style={{ fontSize: '14px', marginRight: '10px' }}>Fragancias:</label>
            <select onChange={handleFilters} className={style.select} id="fraganceSelect" name="fraganceSelect" value={selectedFilter}>
                <option disabled value="">Seleccionar</option>
                {fragances.map(fragance => (
                    <option key={fragance.id} value={fragance.name}>
                        {fragance.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Filter