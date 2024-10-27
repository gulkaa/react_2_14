import { PoiskTovarov } from '../Poisk/Poisk';
import { Tovar } from '../tovar/tovar'
import s from './catalogtovarov.module.css'
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Мем 1',
        price: 50,
        image: 'https://i.pinimg.com/564x/11/df/a6/11dfa6f60d0f3c16e47734bf852c83f7.jpg',
        quantity: 0,
        category: 'С умными мыслями'
    },

    {
        id: 2,
        title: 'Мем 2',
        price: 20,
        image: 'https://i.pinimg.com/736x/44/39/ad/4439ad3d8ee55c01c9eca1e96b9a04b7.jpg',
        quantity: 7,
        category: 'Жизненно'
    },
    {
        id: 3,
        title: 'Мем 3',
        price: 300,
        image: 'https://i.pinimg.com/736x/de/f3/5c/def35cf6f1784cdcbaf7054153c56aa2.jpg',
        quantity: 4,
        category: 'Жизненно'
    },
    {
        id: 4,
        title: 'Мем 4',
        price: 44,
        image: 'https://i.pinimg.com/736x/49/c6/23/49c62360921420bb855bf2cb4ae7f4ef.jpg',
        quantity: 0,
        category: 'С умными мыслями'
    },

    {
        id: 5,
        title: 'Мем 5',
        price: 13,
        image: 'https://i.pinimg.com/736x/59/83/c5/5983c58dfa85c57a8a9cfaa1d0a73c28.jpg',
        quantity: 2,
        category: 'Просто мем'
    },
    {
        id: 6,
        title: 'Мем 6',
        price: 666,
        image: 'https://i.pinimg.com/564x/35/4d/b1/354db1c860df312393d0fbb94fea320d.jpg',
        quantity: 5,
        category: 'Просто мем'
    }
];


export function Catalogtovarov() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const sortProducts = (products) => {
        if (sortCriteria === 'priceAsc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'priceDesc') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortCriteria === 'quantityAsc') {
            return products.sort((a, b) => a.quantity - b.quantity);
        } else if (sortCriteria === 'quantityDesc') {
            return products.sort((a, b) => b.quantity - a.quantity);
        }
        return products;
    };

    const filterProducts = (products) => {
        if (selectedCategory) {
            return products.filter(product => product.category === selectedCategory);
        }
        return products; 
    };

    const filteredProducts = filterProducts(products).filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = sortProducts(filteredProducts);

    return (
        <div className={s.catalogszag}>
        <h1 className={s.Zagolovktov}>Каталог товаров</h1>
        <div className={s.PoiskFiltr}>
            <input className={s.Pole}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Поиск товаров..."
            />
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Все категории</option>
                <option value="С умными мыслями">С умными мыслями</option>
                <option value="Жизненно">Жизненно</option>
                <option value="Просто мем">Просто мем</option>
            </select>
            <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                <option value="">Без сортировки</option>
                <option value="priceAsc">Цена: по возрастанию</option>
                <option value="priceDesc">Цена: по убыванию</option>
                <option value="quantityAsc">Количество: по возрастанию</option>
                <option value="quantityDesc">Количество: по убыванию</option>
            </select>
        </div>
            <div className={s.catalogs}>
                <div className={s.catalog}>
                    {sortedProducts.map((product) => (
                        <Tovar 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            price={product.price} 
                            image={product.image} 
                            quantity={product.quantity} 
                            category={product.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}