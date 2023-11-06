import styles from "@/styles/Navbar.module.css"

export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <ul className={styles.ul}>
                <li className={styles.li}>Home</li>
                <li className={styles.li}>Produtos</li>
                <li className={styles.li}>Contato</li>
            </ul>
            <ul className={styles.ul}>
                <li className={styles.li}>Login</li>               
                <li className={styles.li}>Register</li>
            </ul>
            
        </nav>
    )
    
}