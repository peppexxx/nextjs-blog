import styles from './alert.module.css'
// classnames è una libreria che consente di alternare facilmente i nomi delle classi
import cn from 'classnames' 

export default function Alert({children, type}) {
    return (
        <div className={cn({
            [styles.success]: type === 'success',
            [styles.error]: type === 'error'
        })}>
            {children}
        </div>
    )
}