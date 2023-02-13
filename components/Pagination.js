import  styles  from "styles/pagination.module.css";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Pagination(props) {
    return(
        <ul className={styles.flexContainer}>
            {props.prevText && props.prevUrl && (
                <li className={styles.prev}>
                    <Link href={props.prevUrl} className={styles.iconText}>
                        <FontAwesomeIcon icon={faChevronCircleLeft} color="var(--gray025)"></FontAwesomeIcon>
                        <span>{props.prevText}</span>
                    </Link>
                </li>
            )}
            {props.nextText && props.nextUrl && (
                <li className={styles.next}>
                    <Link href={props.nextUrl}className={styles.iconText}>
                        <span>{props.nextText}</span>
                        <FontAwesomeIcon icon={faChevronCircleRight} color="var(--gray025)"></FontAwesomeIcon>
                    </Link>
                </li>
            )}
        </ul>
    )
    
}