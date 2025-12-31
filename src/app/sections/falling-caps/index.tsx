"use client";

import * as Scrollytelling from "@bsmnt/scrollytelling";
import Image from "next/image";

import s from "./falling-caps.module.scss";
import { useMemo } from "react";

import STICKER_1 from "../../../../public/images/stickers/1.png";
import STICKER_2 from "../../../../public/images/stickers/2.png";
import STICKER_3 from "../../../../public/images/stickers/3.png";
import STICKER_4 from "../../../../public/images/stickers/4.png";
import STICKER_5 from "../../../../public/images/stickers/5.png";
import STICKER_6 from "../../../../public/images/stickers/6.png";
import STICKER_7 from "../../../../public/images/stickers/7.png";
import STICKER_8 from "../../../../public/images/stickers/8.png";

const splitText = (text: string, wordClass?: string) => {
  const wordsArray = text.split(" ");

  const htmlWords = wordsArray.map((word, i) => {
    const hasLineBreak = word.includes("\n");

    return (
      <span className={wordClass} key={i}>
        {word}
        {i < wordsArray.length - 1 && " "}
        {hasLineBreak && <br />}
      </span>
    );
  });

  return htmlWords;
};

const lines = ["I want to help", "build something", "people want."];

export const FallingCaps = () => {
  const splittedText = useMemo(
    () =>
      lines
        .map((line, lineIdx) => {
          const isLast = lineIdx === lines.length - 1;
          const wordElements = splitText(
            line + "\n",
            isLast ? s["highlight"] : undefined
          );

          return wordElements;
        })
        .flat(),
    []
  );

  return (
    <Scrollytelling.Root end="bottom bottom" debug={{ label: "Dream Big 🚀" }}>
      <section className={s["spacer"]}>
        <div className={s["pin"]}>
          {/* Sticker waypoints - appear immediately after text reveal at 50% */}
          <Scrollytelling.Waypoint
            at={50}
            tween={{
              target: ["#sticker-1"],
              fromTo: [
                { opacity: 0, scale: 0.4 },
                { opacity: 1, scale: 1, ease: "elastic.out(1,0.5)" },
              ],
              duration: 1.2,
            }}
          />
          <Scrollytelling.Waypoint
            at={57}
            tween={{
              target: ["#sticker-2"],
              fromTo: [
                { opacity: 0, scale: 0.4 },
                { opacity: 1, scale: 1, ease: "elastic.out(1,0.5)" },
              ],
              duration: 1.2,
            }}
          />
          <Scrollytelling.Waypoint
            at={64}
            tween={{
              target: ["#sticker-3"],
              fromTo: [
                { opacity: 0, scale: 0.4 },
                { opacity: 1, scale: 1, ease: "elastic.out(1,0.5)" },
              ],
              duration: 1.2,
            }}
          />
          <Scrollytelling.Waypoint
            at={71}
            tween={{
              target: ["#sticker-4"],
              fromTo: [
                { opacity: 0, scale: 0.4 },
                { opacity: 1, scale: 1, ease: "elastic.out(1,0.5)" },
              ],
              duration: 1.2,
            }}
          />
          <Scrollytelling.Waypoint
            at={78}
            tween={{
              target: ["#sticker-5"],
              fromTo: [
                { opacity: 0, scale: 0.4 },
                { opacity: 1, scale: 1, ease: "elastic.out(1,0.5)" },
              ],
              duration: 1.2,
            }}
          />
          <Scrollytelling.Waypoint
            at={85}
            tween={{
              target: ["#sticker-6"],
              fromTo: [
                { opacity: 0, scale: 0.4 },
                { opacity: 1, scale: 1, ease: "elastic.out(1,0.5)" },
              ],
              duration: 1.2,
            }}
          />
          <Scrollytelling.Waypoint
            at={92}
            tween={{
              target: ["#sticker-7"],
              fromTo: [
                { opacity: 0, scale: 0.4 },
                { opacity: 1, scale: 1, ease: "elastic.out(1,0.5)" },
              ],
              duration: 1.2,
            }}
          />
          <Scrollytelling.Waypoint
            at={99}
            tween={{
              target: ["#sticker-8"],
              fromTo: [
                { opacity: 0, scale: 0.4 },
                { opacity: 1, scale: 1, ease: "elastic.out(1,0.5)" },
              ],
              duration: 1.2,
            }}
          />

          {/* New sticker images 1-8 */}
          <Image
            alt="Sticker 1"
            className={`${s["sticker"]} ${s["sticker-1"]}`}
            src={STICKER_1}
            placeholder="blur"
            id="sticker-1"
          />
          <Image
            alt="Sticker 2"
            className={`${s["sticker"]} ${s["sticker-2"]}`}
            src={STICKER_2}
            placeholder="blur"
            id="sticker-2"
          />
          <Image
            alt="Sticker 3"
            className={`${s["sticker"]} ${s["sticker-3"]}`}
            src={STICKER_3}
            placeholder="blur"
            id="sticker-3"
          />
          <Image
            alt="Sticker 4"
            className={`${s["sticker"]} ${s["sticker-4"]}`}
            src={STICKER_4}
            placeholder="blur"
            id="sticker-4"
          />
          <Image
            alt="Sticker 5"
            className={`${s["sticker"]} ${s["sticker-5"]}`}
            src={STICKER_5}
            placeholder="blur"
            id="sticker-5"
          />
          <Image
            alt="Sticker 6"
            className={`${s["sticker"]} ${s["sticker-6"]}`}
            src={STICKER_6}
            placeholder="blur"
            id="sticker-6"
          />
          <Image
            alt="Sticker 7"
            className={`${s["sticker"]} ${s["sticker-7"]}`}
            src={STICKER_7}
            placeholder="blur"
            id="sticker-7"
          />
          <Image
            alt="Sticker 8"
            className={`${s["sticker"]} ${s["sticker-8"]}`}
            src={STICKER_8}
            placeholder="blur"
            id="sticker-8"
          />

          <p className={s["paragraph"]}>
            <Scrollytelling.Stagger
              overlap={0}
              tween={{
                start: 0,
                end: 50,
                fromTo: [
                  {
                    opacity: 0.2,
                  },
                  {
                    opacity: 1,
                    ease: "power2.out",
                  },
                ],
              }}
            >
              {splittedText}
            </Scrollytelling.Stagger>
          </p>
        </div>
      </section>
    </Scrollytelling.Root>
  );
};
