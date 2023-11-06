import styles from '@/styles/Home.module.css'

type MyCardProps = React.PropsWithChildren<{
  title: string

}>

export default function MyCard({title, children}: MyCardProps) {
  return (
        <div className={styles.card}>
            <header className={styles.cardTitle}>{title}</header>
            <div className={styles.cardContent}>{children}</div>            
        </div>
  )
}