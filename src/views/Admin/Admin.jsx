import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllFragances, getProducts } from '../../redux/Actions/actions';
import { FaTrashCan } from 'react-icons/fa6'
import axios from 'axios';
import style from './Admin.module.css'

const Admin = () => {

    const fragances = useSelector(state => state.fragances);

    const products = useSelector(state => state.productsCopy);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllFragances())
    }, [dispatch])

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
            setRememberMe(true);
        }
    }, []);

    const [userData, setUserData] = useState({
        user: '',
        password: ''
    });

    const [validated, setValidated] = useState(false);

    const [modifying, setModifying] = useState(false);
    const [modifyingDel, setModifyingDel] = useState(false);

    const [productId, setProductId] = useState({
        productId: ''
    });

    const [productName, setProductName] = useState()

    const [secure, setSecure] = useState(false);

    const [form, setForm] = useState({
        name: '',
        price: '',
        description: '',
        gender: '',
        image: '',
        replica: '',
        stock: '',
        fragance: ''
    })

    const [formMod, setFormMod] = useState({
        name: '',
        price: '',
        description: '',
        gender: '',
        image: '',
        replica: '',
        stock: '',
        fragance: ''
    })

    const [rememberMe, setRememberMe] = useState(false);

    const secureHandler = (event) => {
        event.preventDefault();
        const value = event.target.value;

        if (value === 'Si') {
            setSecure(true)
        } else {
            setSecure(false)
        }
    }

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const checked = event.target.checked;

        if (type === 'checkbox') {
            setRememberMe(checked)
        } else {
            setUserData({
                ...userData,
                [property]: value
            })
        }

        setForm({
            ...form,
            [property]: value
        })

    }

    const handleChangeMod = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setFormMod({
            ...formMod,
            [property]: value
        })

    }

    const handleChangeProductValue = (event) => {
        const value = event.target.value;
        setProductId(value);

        if (value !== ' ') {
            setModifying(true);
        } else {
            setModifying(false);
        }
    }
    const handleChangeDeleteValue = (event) => {
        const value = event.target.value;
        setProductName(value);

        if (value !== ' ') {
            setModifyingDel(true);
        } else {
            setModifyingDel(false);
        }
    }

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setForm({
            ...form,
            image: imageFile,
        });
    };

    const handleImageChangeMod = (event) => {
        const imageFile = event.target.files[0];
        setFormMod({
            ...formMod,
            image: imageFile,
        });
    };

    const handleSubmitLogin = (event) => {
        event.preventDefault();

        axios.post('/admin', userData)
            .then(response => {
                if (response.data.success === true) {
                    setValidated(true)

                    if (rememberMe) {
                        localStorage.setItem('userData', JSON.stringify(userData));
                    }
                } else {
                    alert('datos incorrectos');
                    window.location.href = '/';
                }
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleSumbitForm = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('price', form.price);
        formData.append('description', form.description);
        formData.append('gender', form.gender);
        formData.append('image', form.image);
        formData.append('replica', form.replica);
        formData.append('stock', form.stock);
        formData.append('fragance', form.fragance);

        if (!form.name || !form.price || !form.description || !form.gender || !form.replica || !form.stock || !form.fragance) {
            alert('Debes rellenar todos los campos')
            return
        }

        try {
            await axios.post('/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Manejar la respuesta si es necesario
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    }

    const dispatchDelete = async () => {

        try {

            axios.delete(`/products/${productName}`)
                .then(alert(`${productName} eliminado`))
                .then(window.location.href = '/');

        } catch (error) {
            console.log('No se ha podido eliminar el producto ' + { productName }, error);
        }
    }

    const handleSubmitFormMod = async (event) => {
        event.preventDefault();

        const formDataMod = new FormData();

        if (formMod.name) {
            formDataMod.append('name', formMod.name);
        }
        if (formMod.price) {
            formDataMod.append('price', formMod.price);
        }
        if (formMod.description) {
            formDataMod.append('description', formMod.description);
        }
        if (formMod.gender) {
            formDataMod.append('gender', formMod.gender);
        }
        if (formMod.image) {
            formDataMod.append('image', formMod.image);
        }
        if (formMod.replica) {
            formDataMod.append('replica', formMod.replica);
        }
        if (formMod.stock) {
            formDataMod.append('stock', formMod.stock);
        }
        if (formMod.fragance) {
            formDataMod.append('fragance', formMod.fragance);
        }

        try {
            await axios.put(`/products/${productId}`, formDataMod, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Manejar la respuesta si es necesario
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    }

    return (
        <div>

            {validated === false ?
                <form onSubmit={handleSubmitLogin}>
                    <p style={{ fontSize: '14px' }}>usuario</p>
                    <input onChange={handleChange} type="text" name='user' value={userData.user} />
                    <p style={{ fontSize: '14px' }}>contraseña</p>
                    <input onChange={handleChange} type="password" name='password' value={userData.password} />
                    <br />
                    <input type="checkbox" />
                    <label>Recuérdame</label>
                    <br />
                    <button>Ingresar</button>
                </form>
                :
                null
            }

            {validated === true ?
                <div className={style.containerAdmin}>
                    <div className={style.formularios}>
                        <form encType='multipart/form-data' onSubmit={handleSumbitForm}>
                            <p style={{ fontSize: '14px' }}>Crear producto</p>
                            <p>Nombre</p>
                            <input type="text" onChange={handleChange} name='name' value={form.name} />
                            <p>Precio</p>
                            <input type="number" min='0' onChange={handleChange} name='price' value={form.price} />
                            <p>Descripción</p>
                            <textarea className={style.description} type="text" onChange={handleChange} name='description' value={form.description} />
                            <p>Género</p>
                            <select onChange={handleChange} name='gender' value={form.gender}>
                                <option>Femenino</option>
                                <option>Masculino</option>
                            </select>
                            <p>Imagen</p>
                            <input type="file" onChange={handleImageChange} name='image' />
                            <p>Réplica</p>
                            <input type="text" onChange={handleChange} name='replica' value={form.replica} />
                            <p>Stock</p>
                            <input type="number" onChange={handleChange} min='0' name='stock' value={form.stock} />
                            <p>Fragancia</p>
                            <select onChange={handleChange} value={form.fragance} name="fragance">
                                {fragances.map(fragance => (
                                    <option key={fragance.id} value={fragance.id}>
                                        {fragance.name}
                                    </option>
                                ))}
                            </select>
                            <p></p>
                            <button>Crear Producto</button>
                        </form>

                        <form encType='multipart/form-data' onSubmit={handleSubmitFormMod}>
                            <p style={{ fontSize: '14px' }}>Modificar productos</p>
                            <p>Perfumes disponibles:</p>
                            <select onChange={handleChangeProductValue}>
                                <option value={' '}> </option>
                                {products.map(product => (
                                    <option key={product.id} value={product.id}>{product.name}</option>
                                ))}
                            </select>
                            {modifying === true
                                ? <div>
                                    <p>Nuevo Nombre</p>
                                    <input type="text" onChange={handleChangeMod} name='name' value={formMod.name} />
                                    <p>Precio</p>
                                    <input type="number" min='0' onChange={handleChangeMod} name='price' value={formMod.price} />
                                    <p>Descripción</p>
                                    <textarea className={style.description} type="text" onChange={handleChangeMod} name='description' value={formMod.description} />
                                    <p>Género</p>
                                    <select onChange={handleChangeMod} name='gender' value={formMod.gender}>
                                        <option>Femenino</option>
                                        <option>Masculino</option>
                                    </select>
                                    <p>Imagen</p>
                                    <input type="file" onChange={handleImageChangeMod} name='image' />
                                    <p>Réplica</p>
                                    <input type="text" onChange={handleChangeMod} name='replica' value={formMod.replica} />
                                    <p>Stock</p>
                                    <input type="number" onChange={handleChangeMod} min='0' name='stock' value={formMod.stock} />
                                    <p>Fragancia</p>
                                    <select onChange={handleChangeMod} value={formMod.fragance} name="fragance">
                                        {fragances.map(fragance => (
                                            <option key={fragance.id} value={fragance.id}>
                                                {fragance.name}
                                            </option>
                                        ))}
                                    </select>
                                    <p></p>
                                    <button>Actualizar producto</button>
                                </div>

                                : null
                            }
                        </form>

                        <form >
                            <p style={{ fontSize: '14px' }}>Eliminar productos</p>
                            <p>Perfumes disponibles:</p>
                            <select onChange={handleChangeDeleteValue}>
                                <option value={' '}> </option>
                                {products.map(product => (
                                    <option key={product.id} value={product.name}>{product.name}</option>
                                ))}
                            </select>
                            {modifyingDel === true
                                ?
                                <div >
                                    <p style={{ fontSize: '14px' }}>Usted va a eliminar <strong>{productName}</strong></p>

                                    <div className={style.secureDiv}>
                                        <label>¿Está seguro?</label>
                                        <div className={style.siNo}>
                                            <select onChange={secureHandler}>
                                                <option value=" "> </option>
                                                <option value='Si' >Si</option>
                                                <option value='No' >No</option>
                                            </select>
                                        </div>
                                    </div>

                                    {secure === true
                                        ?
                                        <div className={style.deleteBtnContainer}>
                                            <button onClick={dispatchDelete} >Eliminar <FaTrashCan className={style.trashIcon} /> </button>
                                        </div>
                                        : null
                                    }


                                </div>
                                : null}


                        </form>

                    </div>

                    <div className={style.fragancesContainer}>
                        <h1>Listado de fragancias:</h1>

                        {products.map(product => (
                            <div className={style.fraganceList}>
                                <h3>{product.name} - </h3>
                                <div className={style.fraganceInfo}>
                                    <img key={product.id} className={style.imgInfo} src={product.image} alt="" />
                                    <h3>Precio: ${product.price} -</h3>
                                    <h3>Stock: {product.stock} -</h3>
                                    <h3>Réplica: {product.replica} -</h3>
                                    <h3>Género: {product.gender} -</h3>
                                    <h3>Fragancia: {product.fragance}</h3>
                                </div>
                            </div>
                        ))}

                    </div>


                </div>

                :
                null
            }

        </div>
    )
}

export default Admin