import { useState, useEffect } from 'react';
import styles from '../../styles/products.module.css';
import Image from "next/image";
import { ProductInfor} from '../../types/types';
import Loader from '../../components/loader';

const ProductsPage = () => {
    const [products, setProducts] = useState<ProductInfor[]>([]);
    const [keywords, setKeywords] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    // Fetch data from external API
    const getProducts = (keywords: string) => {
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
        const fetchProducts = async () => {
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
        fetchProducts().then(data => {
            setProducts(data.hits.hits);
            if (data.hits.hits.length === 0) {
                setMessage('No result!');
            } else {
                setMessage('');
            }
            setLoading(false);
        });
    };

    const onchange = (value: string) => {
        setKeywords(value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            getProducts(keywords);
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
                                <li key={product._id} className={styles.singleProduct}>
                                    <Image src={product._source.product.media.product_images.first["140"]} alt={product._source.product.name} width={140} height={140} />
                                    <h3 className={styles.productTitle}>Name: {product._source.product.name}</h3>
                                    <h4 className={styles.productOldPrice}>Price: {product._source.price.display.previousPrice}</h4>
                                    <h4 className={styles.productPrice}>Price: {product._source.price.display.offer}</h4>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
            {
                message && products.length === 0 && (<div>{message}</div>)
            }
        </div>);
};

export default ProductsPage;

