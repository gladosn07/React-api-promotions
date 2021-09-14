import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './Form.css'

const initialValue = {
    title: '',
    url: '',
    imageUrl: '',
    price: 0,
}

const PromotionForm = () => {
    const [values, setValues] = useState(initialValue);
    const history = useHistory()

    function onChange(e) {
        const { name, value } = e.target;

        setValues({ ...values, [name]: value })
    }

    function onSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:5000/promotions', values)
        .then((res) => {
            history.push('/')
        })
    }

    return (
        <div>
            <h1>Promotion</h1>
            <h2>Nova Promoção</h2>

            <form onSubmit={onSubmit}>
                <div className='promotion-form_group'>
                    <label htmlFor='title'>título</label>
                    <input type='text' id='title' name='title' onChange={onChange}/>
                </div>
                
                <div className='promotion-form_group'>
                    <label htmlFor='url'>Link</label>
                    <input type='url' id='url' name='url' onChange={onChange}/>
                </div>

                <div className='promotion-form_group'>
                    <label htmlFor='imageUrl'>Imagem (URL)</label>
                    <input type='imageUrl' id='imageUrl' name='imageUrl' onChange={onChange}/>
                </div>

                <div className='promotion-form_group'>
                    <label htmlFor='price'>Preço</label>
                    <input type='number' id='price' name='price' onChange={onChange}/>
                </div>

                <div>
                    <button type='subimit' >Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default PromotionForm
