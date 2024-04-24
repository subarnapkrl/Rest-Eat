import React from 'react';
import {data} from '../restApi.json'

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">Popular Dishes</h1>
                <p>Discover our culinary treasures in the menu section. Indulge in a feast for the senses as you explore our popular dishes. From savory starters to delectable mains, each dish promises an unforgettable dining experience. Treat yourself to a world of flavor and delight at our restaurant</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element=>{
                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt="" />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Menu