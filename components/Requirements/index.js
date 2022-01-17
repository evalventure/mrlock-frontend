import s from "./s.module.css";
import { PlusIcon } from "../Icons";

export function Requirements() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.title}>WHAT DO I NEED TO GET A REPLACEMENT KEY?</div>
        <div className={s.childContainer}>
          <div className={s.child}>
            <div className={s.plusSignContainer}>
              <PlusIcon className={s.plusSign} />
            </div>
            A form of ID, which could be a driving license.
          </div>
          <div className={s.child}>
            <div className={s.plusSignContainer}>
              <PlusIcon className={s.plusSign} />
            </div>
            Your car’s vehicle identification number (VIN).
          </div>
          <div className={s.child}>
            <div className={s.plusSignContainer}>
              <PlusIcon className={s.plusSign} />
            </div>
            Your V5C logbook to prove you own the car.
          </div>
          <div className={s.child}>
            <div className={s.plusSignContainer}>
              <PlusIcon className={s.plusSign} />
            </div>
            Your car’s make and model.
          </div>
        </div>
      </div>
    </section>
  );
}
