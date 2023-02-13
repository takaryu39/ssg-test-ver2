import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import styles from 'styles/post-header.module.css'
import ConvertDate from './ConvartDate'

export default function PostHeader(props) {
    return(
        <div className={styles.stack}>
            <p className={styles.subtitle}>{props.subtitle}</p>
            <h1 className={styles.title}>{props.title}</h1>
            {props.publish && (
                <div className={styles.publish}>
                    <FontAwesomeIcon icon={faClock} size="lg" color='var(--gray-25)'></FontAwesomeIcon>
                    <ConvertDate dateISO={props.publish}/>
                    </div>
            )}
        </div>
        
    )
}