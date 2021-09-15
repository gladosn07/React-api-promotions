import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './Form.css'

const initialValue = {
    title: '',
    url: '',
    imageUrl: '',
    price: 0,
}

const PromotionForm = ({ id }) => {
    const [values, setValues] = useState(id ? null : initialValue);
    const history = useHistory()

    useEffect(() => {
        if(id) {
            axios.get(`http://localhost:5000/promotions/${id}`)
            .then((res) => {
                setValues(res.data)
            })
        }
        
    },[])

    function onChange(e) {
        const { name, value } = e.target;

        setValues({ ...values, [name]: value })
    }

    function onSubmit(e) {
        e.preventDefault();
        
        const method = id ? 'put' : 'post';
        const url = id 
        ? `http://localhost:5000/promotions/${id}` 
        : `http://localhost:5000/promotions`

        axios[method](url, values)
        .then((res) => {
            history.push('/')
        })
    }

    if(!values) {
        return (
            <div>Carregando...</div>
        )
    }

    return (
        <div>
            <h1>Promotion</h1>
            <h2>Nova Promoção</h2>

            <form onSubmit={onSubmit}>
                <div className='promotion-form_group'>
                    <label htmlFor='title'>título</label>
                    <input type='text' id='title' name='title' onChange={onChange} value={values.title}/>
                </div>
                
                <div className='promotion-form_group'>
                    <label htmlFor='url'>Link</label>
                    <input type='url' id='url' name='url' onChange={onChange} value={values.url}/>
                </div>

                <div className='promotion-form_group'>
                    <label htmlFor='imageUrl'>Imagem (URL)</label>
                    <input type='imageUrl' id='imageUrl' name='imageUrl' onChange={onChange} value={values.imageUrl}/>
                </div>

                <div className='promotion-form_group'>
                    <label htmlFor='price'>Preço</label>
                    <input type='number' id='price' name='price' onChange={onChange} value={values.price}/>
                </div>

                <div>
                    <button type='subimit' >Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default PromotionForm
