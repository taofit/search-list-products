import { useState, useEffect } from 'react';
import styles from '../styles/products.module.css';
import { ProductInfor } from '../types/types';
import Loader from './loader';
import ProductCard from "./productCard";

const ProductsPage = () => {
    const [products, setProducts] = useState<ProductInfor[]>([]);
    const [keywords, setKeywords] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const searchProducts = (keywords: string) => {
        if (keywords === '') {
            setMessage('');
            setProducts([]);
            return;
        }
        const url = `https://search-pj-campaigns-index-oyaq7ruf3du2owxiiiuhyqcgcm.eu-west-1.es.amazonaws.com/campaign-se-4-deals/_search`;
        const body = {
            "query": {
                "match" : {
                    "product.name" : keywords
                }
            }
        };
        setLoading(true);

        fetchProducts(url, body).then(data => {
            setProducts(data.hits.hits);
            if (data.hits.hits.length === 0) {
                setMessage('No result!');
            } else {
                setMessage('');
            }
            setLoading(false);
        });
    };

    // Fetch data from external API
    const fetchProducts = async (url: string, body: object) => {
        const response = await fetch(url, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(body)
        });

        return await response.json();
    }
    const onchange = (value: string) => {
        setKeywords(value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            searchProducts(keywords);
        }, 1000);

        return () => {clearTimeout(timer)};
    }, [keywords]);

    return (
        <div className={styles.wrapper}>
            <input value={keywords} onChange={({target: {value}}) => onchange(value)} type={`text`} placeholder={`Search products`} />
            {
                loading && <Loader />
            }
            {
                products.length > 0 && (
                    <ul className={styles.row}>
                        {
                            products.map(product => (
                                <ProductCard product={product} key={product._id}/>
                            ))
                        }
                    </ul>
                )
            }
            {
                message && products.length === 0 && (<div className={styles.message}>{message}</div>)
            }
        </div>);
};

export default ProductsPage;

