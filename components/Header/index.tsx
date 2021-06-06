import Link from "next/link";

import styles from "./Header.module.css";
import { Logo } from "./logo";

const Header: React.FC = () => (
    <header className={styles.header}>
        <div className={styles.headerInner}>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            <nav className={styles.nav}>
                <a href="https://wunnle.com/">Blog</a>
                <a
                    className={styles.contactLink}
                    href="mailto:tja.theau54@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact
                </a>
            </nav>
        </div>
    </header>
);

export default Header;
