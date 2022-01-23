import styles from '../styles/loader.module.css';

const Loader = () => (
    <div className={styles.loader}>
        <svg className={styles.circularLoader}
             viewBox="25 25 50 50">
            <circle
                className={styles.loaderPath}
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="#70c542"
                strokeWidth = "2" />
        </svg>
    </div>
    )
;
export default Loader;
