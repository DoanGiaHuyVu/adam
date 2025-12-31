"use client";

import * as Scrollytelling from "~/lib/scrollytelling-client";
import Image from "next/image";
import STICKER_9 from "../../../../public/images/stickers/9.png";
import STICKER_10 from "../../../../public/images/stickers/10.png";
import STICKER_11 from "../../../../public/images/stickers/11.png";
import STICKER_12 from "../../../../public/images/stickers/12.png";
import STICKER_13 from "../../../../public/images/stickers/13.png";
import STICKER_14 from "../../../../public/images/stickers/14.png";
import STICKER_15 from "../../../../public/images/stickers/15.png";
import STICKER_18 from "../../../../public/images/stickers/18.png";
import STICKER_19 from "../../../../public/images/stickers/19.png";
import STICKER_20 from "../../../../public/images/stickers/20.png";

import s from "./last-parallax.module.scss";

export const LastParallax = () => {
  return (
    <Scrollytelling.Root
      start="top bottom"
      scrub={0.75}
      debug={{ label: "Peace Out ✌️" }}
    >
      <section className={s["section"]}>
        <div className="wrapper">
          <Scrollytelling.Waypoint
            at={50}
            tween={{
              target: ["body"],
              to: { background: "white", color: "black" },
              duration: 0.35,
            }}
          />
          <Scrollytelling.Waypoint
            at={75}
            tween={{
              target: [
                "#sticker-9",
                "#sticker-10",
                "#sticker-11",
                "#sticker-12",
                "#sticker-13",
                "#sticker-14",
                "#sticker-15",
                "#sticker-16",
                "#sticker-18",
                "#sticker-19",
                "#sticker-20",
              ],
              fromTo: [
                { opacity: 0, scale: 0.4 },
                { opacity: 1, scale: 1, ease: "elastic.out(1,0.5)" },
              ],
              duration: 1.2,
            }}
          />
          <Image
            alt="Sticker 9"
            className={s["sticker-9"]}
            src={STICKER_9}
            placeholder="blur"
            id="sticker-9"
          />
          <Image
            alt="Sticker 10"
            className={s["sticker-10"]}
            src={STICKER_10}
            placeholder="blur"
            id="sticker-10"
          />
          <Image
            alt="Sticker 11"
            className={s["sticker-11"]}
            src={STICKER_11}
            placeholder="blur"
            id="sticker-11"
          />
          <Image
            alt="Sticker 12"
            className={s["sticker-12"]}
            src={STICKER_12}
            placeholder="blur"
            id="sticker-12"
          />
          <Image
            alt="Sticker 13"
            className={s["sticker-13"]}
            src={STICKER_13}
            placeholder="blur"
            id="sticker-13"
          />
          <Image
            alt="Sticker 14"
            className={s["sticker-14"]}
            src={STICKER_14}
            placeholder="blur"
            id="sticker-14"
          />
          <Image
            alt="Sticker 15"
            className={s["sticker-15"]}
            src={STICKER_15}
            placeholder="blur"
            id="sticker-15"
          />
          <Image
            alt="Sticker 18"
            className={s["sticker-18"]}
            src={STICKER_18}
            placeholder="blur"
            id="sticker-18"
          />
          <Image
            alt="Sticker 19"
            className={s["sticker-19"]}
            src={STICKER_19}
            placeholder="blur"
            id="sticker-19"
          />
          <Image
            alt="Sticker 20"
            className={s["sticker-20"]}
            src={STICKER_20}
            placeholder="blur"
            id="sticker-20"
          />
          <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 100,
              fromTo: [
                {
                  scale: 0,
                },
                {
                  ease: "linear",
                  scale: 1,
                },
              ],
            }}
          >
            <h2 className={s["title"]}>
              THANK YOU, <br />
              Y'ALL
            </h2>
          </Scrollytelling.Animation>
        </div>
      </section>
    </Scrollytelling.Root>
  );
};
