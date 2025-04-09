import styles from './Nav.module.css'

const Nav = ()=>{
    return(
        <nav>
            <div className={`${styles.nav__content} content`}>
                <a href="#">Home</a>
                <ul>
                    <li><a href="#">Educación</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;