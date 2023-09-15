import styles from '@/app/page.module.css'

export const MkHeader = () => {
  console.log('MkHeader')

  return (
    <header className={styles.header}>
      <p>Next.js ミートアップ【鹿児島.mk】 サンプルブログ</p>
    </header>
  )
}
