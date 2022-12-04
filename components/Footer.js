import styles from 'styles/footer.module.css'
import { Container } from './Container';
import Logo from "./Logo";
import { Social } from './Social';
export function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    <div>
                        <Logo />
                        <Social/>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
