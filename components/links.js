import Link from "next/link";
import styles from "../components/styles/links.module.css";
import Image from "next/image";

const Links = () => {
  return (
    <ul className={styles.links}>
      <li>
        <Image src="/assets/logo.png" alt="me" height="18px" width="18px" />
        <Link href="/">
          <a>ნაკრები</a>
        </Link>
      </li>
      <li>
        {" "}
        <Image src="/assets/image55.png" alt="me" height="18px" width="18px" />
        <Link href="/about">
          <a>ფეხბურთის ფედერაცია</a>
        </Link>
      </li>
      <li>
        {" "}
        <Image src="/assets/image54.png" alt="me" width="18" height="18" />
        <Link href="/about">
          <a> CRYSTALBET ეროვნული ლიგა</a>
        </Link>
      </li>
      <li>
        {" "}
        <Image src="/assets/image54.png" alt="me" width="18" height="18" />
        <Link href="/about">
          <a>ფეხბურთის ფედერაცია </a>
        </Link>
      </li>
      <li>
        {" "}
        <Image src="/assets/image53.png" alt="me" width="12" height="17" />
        <Link href="/about">
          <a>საქართველოს თასი</a>
        </Link>
      </li>
    </ul>
  );
};

export default Links;
