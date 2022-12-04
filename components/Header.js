import styles from 'styles/header.module.css'
import { Container } from './Container';
import Logo from "./Logo";
import Nav from "./Nav";

export function Header() {
    return (
        <header>
            <Container large>
                <div className={styles.flexContainer}>
                    <Logo boxOn />
                    <Nav />
                </div>
            </Container>
        </header>
    )
}
