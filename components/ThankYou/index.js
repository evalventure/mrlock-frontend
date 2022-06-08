import s from "./s.module.css";
import { WebsiteHead } from "../WebsiteHead";
import { Header } from "../Header";
import { Footer } from "../Footer";

export function ThankYou() {
  return (
    <div className={s.container}>
      <WebsiteHead />
      <Header />
      <div className={s.content}>
        <h1>Thank you!</h1>
        <p>We will reach back to you as soon as possible</p>
      </div>
      <Footer />
    </div>
  );
}
