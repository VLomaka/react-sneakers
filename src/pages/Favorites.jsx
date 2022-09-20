import React from 'react';
import Card from '../components/Card'


function Favorites({ items, index }) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мої закладки</h1>
            </div>

            <div className="d-flex flex-wrap">
                {items.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default Favorites;