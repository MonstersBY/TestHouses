import styles from "./small.module.scss";
import Image from "next/image";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image
      className={styles.logo_img}
      src="/logo.svg"
      alt="logo"
      width={64}
      height={64}/>
      <div className={styles.logo_container}>
        <div className="text3">Строительные решения</div>
        <div className="text5">строительная компания</div>
      </div>
    </div>
  )
}

export {Logo}