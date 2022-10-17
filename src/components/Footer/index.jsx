import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Footer = ({ children, link = "/" }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`mainContainer ${styles.footerWrap}`}>
          <Link href="/">
            <a className={styles.logo}>
              <Image
                src="/icons/logo_transparente.png"
                alt="Logo"
                width="300"
                height="110"
              />
            </a>
          </Link>

          <div>
            <h3>Eder Refrigeração</h3>
            <ul>
              <li> (14) 99648-5764 </li>
              <li> (14) 3269-6999</li>
              <li>Avenida ubirama, 177</li>
              <li>Lençóis Paulista - SP</li>
              <li>comercial@minettorefrigeracao.com.br</li>
              <li className={styles.social}>
                <Link href="/">
                  <a target="_blank">
                    <Image
                      src="/icons/instaFooter.svg"
                      alt="Logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>
                <Link href="https://www.facebook.com/minettoclimatizacao.oficial/">
                  <a target="_blank">
                    <Image
                      src="/icons/faceFooter.svg"
                      alt="Logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>
                {/* <Link href="/">
                  <a>
                    <Image
                      src="/icons/youtubeFooter.svg"
                      alt="Logo"
                      width="32"
                      height="27"
                    />
                  </a>
                </Link> */}
              </li>
            </ul>
          </div>

          <div>
            <h3> </h3>
            <p> </p>
            <p> </p>
          </div>

          <div>
            <h3>Atendimento</h3>
            <p>Seg - Sex: 08:00 - 18:00</p>
            <p>Sáb: até 12h - Dom: Fechado</p>
          </div>
        </div>
      </footer>

      <p className={`${styles.copy}`}>
        2022 © Minetto Climatização. Todos os direitos reservados.
      </p>
    </>
  );
};
