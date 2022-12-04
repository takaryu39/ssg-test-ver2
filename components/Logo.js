import styles from 'styles/logo.module.css'
import Link from "next/link";

export default function Logo(props) {
    return (
        <Link href="/" className={props.boxOn ? styles.box : styles.basic}>
            CUBE
        </Link>
    )

}