import styles from "../styles/products.module.css";
import Image from "next/image";
import { ProductInfor } from "../types/types";

interface ProductCardProps {
    product: ProductInfor
}

const ProductCard: ({product}: ProductCardProps) => JSX.Element = ({product}) => (
    <li key={product._id} className={styles.singleProduct}>
        <Image src={product._source.product.media.product_images.first["140"]} alt={product._source.product.name} width={140} height={140} />
        <h3 className={styles.productTitle}>{product._source.product.name}</h3>
        <h4 className={styles.productOldPrice}>{product._source.price.display.previousPrice}</h4>
        <h4 className={styles.productPrice}>{product._source.price.display.offer} ({product._source.price.diff_percentage}%) </h4>
        <h4 className={styles.p}></h4>
    </li>
);

export default ProductCard;
