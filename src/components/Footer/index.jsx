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
                height="150"
              />
            </a>
          </Link>

          <div>
            <h3>Paiva Gás</h3>
            <ul>
              <li> (14) 99621-3261 </li>
              <li> (14) 3264-1140</li>
              <li>Rua Florencio Jacomo Paccola, 65 - Jd Sta Terezinha</li>
              <li>Lençóis Paulista - SP</li>
              <li></li>
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
                <Link href="https://www.facebook.com/paiva.gas.370">
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
            <p>Seg - Sex: 08:00 - 19:00</p>
            <p>Dom: 08:00 - as 12h</p>
          </div>
        </div>
      </footer>

      <p className={`${styles.copy}`}>
        2022 © Paiva Gás. Todos os direitos reservados.
      </p>
    </>
  );
};
