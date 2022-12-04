import styles from 'styles/hero.module.css'
import React from 'react'
import Image from 'next/image'
import cube from 'public/images/cube.jpg'
export function Hero(props) {
    return (
        <div>
            <div className={styles.flexContainer}>
                <div className={styles.text}>
                    <h1 className={styles.title} >{props.title}</h1>
                    <p className={styles.subtitle}>{props.subtitle}</p>
                </div>
                {props.imageOn &&
                    <figure className={styles.image}>
                        <Image
                            src={cube}
                            alt=""
                            layout='responsive'
                            sizes='(min-width:1152px) 576px,(min-width:768px) 50vw ,100vw'
                            priority
                            placeholder='blur'
                        />
                    </figure>
                }
            </div>
        </div>
    )
}
