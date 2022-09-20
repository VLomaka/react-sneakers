import React from 'react';
import Card from '../components/Card'


function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart
}) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>{searchValue ? `Пошук: '"${searchValue}"` : 'Колекція кросівок'}</h1>
                <div className="search-block d-flex">
                    <img width={14} src="/react-sneakers/img/search.svg" alt="search" />
                    {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/react-sneakers/img/delete.svg" alt="clear" />}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Пошук..." />
                </div>
            </div>

            <div className="d-flex flex-wrap">
                {items
                    .filter((item) => item.title.toLowerCase().includes(searchValue))
                    .map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Home;