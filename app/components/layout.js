import Head from 'next/head'
import styles from './layout.module.css'

export const siteTitle = 'NextJS PWA Template ✨'
export const siteDesc = 'NextJS 💖 PWA'

export default function Layout({ children }) {
  return (
    <>
        <div className={styles.container}>
        
            <Head>

                <title>{siteTitle}</title>
                <meta name='description' content={siteDesc} />
                <meta name='keywords' content={siteDesc} />
                
            </Head>
            
            <main>{children}</main>

        </div>
    </>
  )
}