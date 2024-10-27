import { useParams } from 'react-router-dom';
import s from './Product.module.css';
import { OrderFormModal } from '../Modal/Modal';
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Мем 1',
        description: 'React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, когда в ответ на изменение одного элемента меняется всё остальное. Основная идея React — создание компонентов. React используют для создания одностраничных и многостраничных приложений, разработки крупных сайтов.',
        price: 50,
        image: 'https://i.pinimg.com/564x/11/df/a6/11dfa6f60d0f3c16e47734bf852c83f7.jpg',
        quantity: 0
    },

    {
        id: 2,
        title: 'Мем 2',
        description: 'React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, когда в ответ на изменение одного элемента меняется всё остальное. Основная идея React — создание компонентов. React используют для создания одностраничных и многостраничных приложений, разработки крупных сайтов.',
        price: 20,
        image: 'https://i.pinimg.com/736x/44/39/ad/4439ad3d8ee55c01c9eca1e96b9a04b7.jpg',
        quantity: 7
    },
    {
        id: 3,
        title: 'Мем 3',
        description: 'React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, когда в ответ на изменение одного элемента меняется всё остальное. Основная идея React — создание компонентов. React используют для создания одностраничных и многостраничных приложений, разработки крупных сайтов.',
        price: 300,
        image: 'https://i.pinimg.com/736x/de/f3/5c/def35cf6f1784cdcbaf7054153c56aa2.jpg',
        quantity: 4
    },
    {
        id: 4,
        title: 'Мем 4',
        description: 'React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, когда в ответ на изменение одного элемента меняется всё остальное. Основная идея React — создание компонентов. React используют для создания одностраничных и многостраничных приложений, разработки крупных сайтов.',
        price: 44,
        image: 'https://i.pinimg.com/736x/49/c6/23/49c62360921420bb855bf2cb4ae7f4ef.jpg',
        quantity: 0
    },

    {
        id: 5,
        title: 'Мем 5',
        description: 'React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, когда в ответ на изменение одного элемента меняется всё остальное. Основная идея React — создание компонентов. React используют для создания одностраничных и многостраничных приложений, разработки крупных сайтов.',
        price: 13,
        image: 'https://i.pinimg.com/736x/59/83/c5/5983c58dfa85c57a8a9cfaa1d0a73c28.jpg',
        quantity: 2
    },
    {
        id: 6,
        title: 'Мем 6',
        description: 'React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, когда в ответ на изменение одного элемента меняется всё остальное. Основная идея React — создание компонентов. React используют для создания одностраничных и многостраничных приложений, разработки крупных сайтов.',
        price: 666,
        image: 'https://i.pinimg.com/564x/35/4d/b1/354db1c860df312393d0fbb94fea320d.jpg',
        quantity: 5
    }
    
];

export function ProductPage() {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));
    
    const [isModalOpen, setModalOpen] = useState(false);

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    const handleOrderClick = () => {
        setModalOpen(true);
    };

    return (
        <div className={s.Productda}>
            <img className={s.ProductImage} src={product.image} alt={product.title} />
            <div className={s.Producttext}>
                <h1 className={s.ProductTitle}>{product.title}</h1>
                <p className={s.ProductDesc}>{product.description}</p>
                <div className={s.btnopis}>
                    <h3 className={s.ProductTsena}>{product.price}₽</h3>
                    {product.quantity === 0 ? (
                        <button onClick={handleOrderClick} className={s.AddKorzin}>Заказать</button>
                    ) : (
                        <button className={s.AddKorzin}>Добавить в корзину</button>
                    )}
                </div>
            </div>
            <OrderFormModal   
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)} 
                product={product} 
            />
        </div>
    );
}