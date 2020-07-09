import Link from 'next/link'
import styles from './Nav.module.scss'


function Nav() {
    return (
        <nav className={styles.nav}>
            <h1>Other Places To Go</h1>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About Us</a>
                </Link>
            </li>
        </ul>
        </nav>
    )
}

export default Nav
