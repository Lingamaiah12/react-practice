import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shirt from '../Images/Shirt.jpeg';
import '../Shopper/product.css';
import women from '../Images/women.jpeg';
import kids from '../Images/kids.jpeg';
import jewelery from '../Images/jewelery.jpeg';
import Jeans from '../Images/pant.jpeg';
import Tv from '../Images/tv.jpeg';
import electronics from '../Images/electronics.jpeg';
import tshirt from '../Images/TShirts.webp';

const ItemDetails = ({ logged }) => {
    const [seemore, setSeemore] = useState('');
    console.log(logged);
    const Data = [
        {
            category: "men's clothing",
            image: shirt,
            offers: 'Up to 40% off | Styles for men'
        },
        {
            category: "women's clothing",
            image: women,
            offers: 'Up to 60% off | Styles for women'
        },
        {
            category: "jewelry",
            image: jewelery,
            offers: 'Up to 70% off | Jewelry | Gold'
        },
        {
            category: "electronics",
            image: electronics,
            offers: 'Up to 50% off | Electronics'
        },
        {
            category: "jewelry",
            image: Tv,
            offers: 'Starting ₹99 | All your home needs'
        },
        {
            category: "electronics",
            image: Jeans,
            offers: 'Appliances for your home | Up to 55% off'
        },
        {
            category: "jewelry",
            image: kids,
            offers: 'Get the perfect screen size TVs Starting ₹6,999'
        },
        {
            category: "electronics",
            image: shirt,
            offers: 'Up to 50% off | Electronics'
        }
    ];

    useEffect(() => {
        console.log(seemore);
        if (logged) {
            setSeemore('/products')
        } else {
            setSeemore('/login')
        }

    }, []);

    return (
        <div className="d-flex flex-wrap">
            {Data.map((ele, index) => (
                <div key={index} className='card w-25 mt-3 category-item'>
                    <div className='m-5'>
                        <h6>{ele.offers}</h6>
                        <img src={ele.image} alt={ele.category} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <Link to={seemore}>see more...</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemDetails;
