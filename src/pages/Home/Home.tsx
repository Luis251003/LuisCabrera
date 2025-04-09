import Nav from "../../components/Nav/Nav";
import styles from "./Home.module.css";

import sobre_mi__01 from "../../assets/sobre-mi--01.jpg"
import sobre_mi__02 from "../../assets/sobre-mi--02.jpg"
import sobre_mi__03 from "../../assets/sobre-mi--03.jpg"

import logros__01 from "../../assets/logros--01.jpg"
import logros__02 from "../../assets/certificado--cibertec.jpg"
import logros__03 from "../../assets/Proyecto--02.png"
import logros__04 from "../../assets/logros--04.jpg"

import proyecto__01 from "../../assets/Proyecto--01.png"
import proyecto__02 from "../../assets/Proyecto--02.png"
import proyecto__03 from "../../assets/Proyecto--03.png"
import proyecto__04 from "../../assets/Proyecto--04.jpeg"

const Home = () => {
    return (
        <>
            <header className={styles.header}>
                <Nav/>
                <div className={`${styles.banner} content`}>
                    <h1 className={styles.banner__title}>Hola soy Luis <span>&lt;Software Developer/&gt;</span></h1>
                    <p className={styles.banner__text}>Programador dedicado al desarrollo de aplicaciones web, mejorando en un 80% la eficiencia en los sistemas.</p>
                    <a className={styles.banner__btn} href="https://wa.me/51972226417?text=Hola%2C%20vi%20tu%20perfil%20y%20me%20gustar%C3%ADa%20conversar"><i className="ico fa-regular fa-comment-dots"></i> Escribeme</a>
                </div>
            </header>
            <main>
                <section className={`${styles.section__me} section`}>
                    <div className={`${styles.section__me__content} content`}>
                        <div className={styles.img__container}>
                            <div className={styles.img__content}>
                                <img src={sobre_mi__01} alt="" />
                            </div>
                            <div className={styles.img__content}>
                                <img src={sobre_mi__02} alt="" />
                            </div>
                            <div className={styles.img__content}>
                                <img src={sobre_mi__03} alt="" />
                            </div>
                        </div>
                        <div className={styles.section__info}>
                            <h2 className={styles.section__title}>Sobre mi</h2>
                            <p>
                                Soy un ingeniero de sistemas apasionado por el desarrollo de productos de software de alto nivel. A lo largo de mi carrera, he desarrollado sólidas habilidades analíticas y lógicas, permitiéndome diseñar y crear sistemas robustos y escalables para la automatización de procesos y el aumento de la productividad empresarial.
                                <br /><br />
                                Mi enfoque está en la eficiencia y optimización de cada solución tecnológica, garantizando calidad y rendimiento en cada proyecto.
                            </p>
                        </div>
                    </div>
                </section>
                <section className={`${styles.section__logros} section`}>
                    <div className="content">
                        <h2 className={styles.section__title}>Logros</h2>
                        <div className={styles.logros__content}>

                            <div className={styles.main__logros}>
                                <div className={styles.main__img}>
                                    <img src={logros__01} alt="" />
                                </div>
                                <div className={styles.main__info}>
                                    <h3 className={styles.main__title}>Work and travel</h3>
                                    <p className={styles.main__date}>
                                        Diciembre 2024 - Marzo 2025
                                    </p>
                                    <p className={styles.main__text}>
                                    Participé durante dos años consecutivos en un programa de intercambio cultural en Estados Unidos, lo que me brindó la oportunidad de mejorar mis habilidades en el idioma inglés y ampliar mi comprensión de la cultura norteamericana.
                                    </p>
                                    <p className={styles.main__locate}>Burlington - Vermont</p>
                                </div>
                            </div>

                            <div className={styles.cards__logros}>
                                <div className={styles.card}>
                                    <div className={styles.card__img}>
                                        <img src={logros__02} alt="" />
                                    </div>
                                    <div className={styles.card__info}>
                                        <h3 className={styles.card__title}>Cibertec</h3>
                                        <p className={styles.card__date}>Diciembre 2023</p>
                                        <p className={styles.card__text}>Alcance  el primer puesto en la feria de proyectos en el curso de Desarrollo de Paginas Web.</p>
                                    </div>
                                </div>

                                <div className={styles.card}>
                                    <div className={styles.card__img}>
                                        <img src={logros__03} alt="" />
                                    </div>
                                    <div className={styles.card__info}>
                                        <h3 className={styles.card__title}>Ip address tracker</h3>
                                        <p className={styles.card__date}>Diciembre 2024</p>
                                        <p className={styles.card__text}>Desarrolle una aplicacion web enfocada en la localización geografica mediante la busqueda de su IP pública.</p>
                                        <p>#React  #APIIntegration</p>
                                    </div>
                                </div>

                                <div className={styles.card}>
                                    <div className={styles.card__img}>
                                        <img src={logros__04} alt="" />
                                    </div>
                                    <div className={styles.card__info}>
                                        <h3 className={styles.card__title}>Doubletree by hilton</h3>
                                        <p className={styles.card__date}>Diciembre 2025</p>
                                        <p className={styles.card__text}>Trabajé en uno de los hoteles más prestigiosos de Estados Unidos a nivel internacional, desempeñando el cargo de Room Attendant.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${styles.section__proyectos} section`}>
                    <div className="content">
                        <h2 className={styles.section__title}>Proyectos</h2>
                        <div className={styles.cards__proyectos}>
                            <div className={styles.card}>
                                <img src={proyecto__01} alt="" />
                                <div className={styles.card__info}>
                                    <h3>IP Address Tracker</h3>
                                    <p>Plataforma de busqueda geografica mediante IP Address</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <img src={proyecto__02} alt="" />
                                <div className={styles.card__info}>
                                    <h3>Mr. Shop</h3>
                                    <p>Plataforma de minimarket para ventas de productos</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <img src={proyecto__03} alt="" />
                                <div className={styles.card__info}>
                                    <h3>EasyBank</h3>
                                    <p>Landing page de una institución financiera</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <img src={proyecto__04} alt="" />
                                <div className={styles.card__info}>
                                    <h3>Telotel</h3>
                                    <p>Sistemas de reservaciones y mantenimiento de un hotel</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${styles.section__habilidades} section`}>
                    <div className="content">
                        <h2 className={styles.section__title}>Habilidades</h2>
                        <p>Mi enfoque está en la eficiencia y optimización de cada solución tecnológica, garantizando calidad y rendimiento en cada proyecto.</p>
                        <div className={styles.cards__habilidades}>
                            <div className={styles.card}>
                                <div className={styles.card__header}>
                                    <i className={`fa-regular fa-window-restore ${styles.card__ico}`}></i>
                                    <h3>Front-End</h3>
                                </div>
                                <div className={styles.card__body}>
                                    <p>Durante el desarrollo de la parte visual tengo experiencia trabajando con React y Angular para minimizar la complejidad y maximizar la eficiencia.</p>
                                </div>
                                <ul className={styles.card__skills}>
                                    <li><i className="fa-brands fa-html5"></i></li>
                                    <li><i className="fa-brands fa-css3-alt"></i></li>
                                    <li><i className="fa-brands fa-react"></i></li>
                                    <li><i className="fa-brands fa-angular"></i></li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.card__header}>
                                    <i className={`fa-solid fa-code ${styles.card__ico}`}></i>
                                    <h3>Back-End</h3>
                                </div>
                                <div className={styles.card__body}>
                                    <p>En el desarrollo del lado del servidor tengo experiencia trabajando con Java mediante su Framework SpringBoot.</p>
                                </div>
                                <ul className={styles.card__skills}>
                                    <li><i className="fa-brands fa-java"></i></li>
                                    <li><i className="fa-brands fa-python"></i></li>
                                    <li><i className='bx bxl-spring-boot'></i></li>
                                    <li><i className='bx bxl-django' ></i></li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.card__header}>
                                    <i className={`fa-solid fa-cloud-arrow-up ${styles.card__ico}`}></i>
                                    <h3>API's</h3>
                                </div>
                                <div className={styles.card__body}>
                                    <p>Diseño e implemento APIs personalizadas para gestionar peticiones REST y la integración con librerías de Google, optimizando el rendimiento.</p>
                                </div>
                                <ul className={styles.card__skills}>
                                    <li><i className='bx bxl-javascript' ></i></li>
                                    <li><i className='bx bxl-typescript' ></i></li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.card__header}>
                                    <i className={`fa-solid fa-database ${styles.card__ico}`}></i>
                                    <h3>Base de Datos</h3>
                                </div>
                                <div className={styles.card__body}>
                                    <p>Experto en persistencia de datos en gestores como MySQL y Postgre, por otro lado, tambien manejo gestores no relacionales como MongoDB.</p>
                                </div>
                                <ul className={styles.card__skills}>
                                    <li><i className='bx bxl-postgresql' ></i></li>
                                    <li><i className='bx bxl-mongodb'></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className={styles.footer}>
                <div className={styles.footer__main}>
                    <div className={`content ${styles.footer__content}`}>
                        <div className={styles.footer__info}>
                            <h3 className={styles.footer__title}>Portafolio Luis Cabrera Ortiz</h3>
                            <ul>
                                <li>Todo el contenido de este portafolio es propiedad de Luis Antonio y no puede ser reproducido sin autorización.</li>
                                <li>No nos responsabilizamos por el contenido de los sitios web externos a los que se enlaza desde este portafolio.</li>
                                <li>Podemos modificar estos Términos y Condiciones en cualquier momento. Revisa esta página periódicamente para estar al tanto de los cambios.</li>
                            </ul>
                        </div>
                        <div className={styles.footer__redes}>
                            <div className={styles.redes}>
                                <h3 className={styles.footer__title}>Sigueme</h3>
                                <ul>
                                    <li><a href="https://www.facebook.com/luis.cabreraortiz.39"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="https://www.instagram.com/luis_ortiz2503/"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/luis-cabrera-ortiz-0b3011212/"><i className="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href="https://wa.me/51972226417?text=Hola%2C%20vi%20tu%20perfil%20y%20me%20gustar%C3%ADa%20conversar"><i className="fa-brands fa-whatsapp"></i></a></li>
                                </ul>
                            </div>
                            <div className={styles.email}>
                                <h3 className={styles.footer__title}>Escribeme</h3>
                                <p><i className="fa-solid fa-envelope"></i> luisortiz251003@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={styles.footer__sign}>Developed By <span>Luis Cabrera Ortiz</span></p>
            </footer>
        </>
    );
}
export default Home;