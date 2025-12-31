import clsx from "clsx";
import * as Scrollytelling from "~/lib/scrollytelling-client";

import s from "./intro.module.scss";

import { BASE_PATH } from "~/lib/constants";

export const LabIntro = () => {
  return (
    <Scrollytelling.Root
      start="top bottom"
      end="bottom top"
      scrub={1.1}
      debug={{ label: "The Lab 🧪" }}
    >
      <div className={s.container}>
        <Scrollytelling.Parallax
          tween={{
            start: 0,
            end: 100,
            movementY: { value: 40, unit: "px" },
          }}
        >
          <img
            src={`${BASE_PATH}/images/stickers/21.png`}
            alt="background sticker"
            className={s.backgroundSvg}
          />
        </Scrollytelling.Parallax>

        <Scrollytelling.Parallax
          tween={{
            start: 0,
            end: 100,
            movementY: { value: -40, unit: "px" },
          }}
        >
          <h2 className={s.title}>What I have been building</h2>
        </Scrollytelling.Parallax>
        <p className={s.subtitle}>
          <svg
            width="9"
            height="153"
            viewBox="0 0 9 153"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={s.arrowDown}
          >
            <path
              d="M4.14645 152.354C4.34171 152.549 4.65829 152.549 4.85355 152.354L8.03553 149.172C8.2308 148.976 8.2308 148.66 8.03553 148.464C7.84027 148.269 7.52369 148.269 7.32843 148.464L4.5 151.293L1.67157 148.464C1.47631 148.269 1.15973 148.269 0.964466 148.464C0.769204 148.66 0.769204 148.976 0.964466 149.172L4.14645 152.354ZM5 152L4.99999 -2.18557e-08L3.99999 2.18557e-08L4 152L5 152Z"
              fill="#EFEFEF"
            />
          </svg>
          I am pushing past “just prototypes” by fusing deep AI engineering with product-minded design—building end-to-end pipelines and turning them into real, measurable apps that people can use.
        </p>
      </div>
    </Scrollytelling.Root>
  );
};
