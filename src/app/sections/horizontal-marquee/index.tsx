"use client";

import * as Scrollytelling from "~/lib/scrollytelling-client";
import s from "./horizontal-marquee.module.scss";
import { BASE_PATH } from "~/lib/constants";

// const phrase = "OUR WOR IS SERIOUS WE ARE NOT";
const phrase = "WITH ALL MY MIGHT...";
const splitted = phrase.split("");
const charsLength = splitted.length;

export const HorizontalMarquee = () => {
  return (
    <Scrollytelling.Root
      start="top top+=300px"
      debug={{ label: "Full Send 💨" }}
    >
      <section id="horizontal-marquee-section" className={s.section}>
        <div className={s.pinned}>
          {/* Light-to-dark transition - triggers halfway through sticker animation (90-100%) */}
          <Scrollytelling.Waypoint
            at={85}
            tween={{
              target: ["#horizontal-marquee-section", "body", "#horizontal-marquee-text"],
              fromTo: [
                { background: "white", color: "black" },
                { background: "black", color: "white" },
              ],
              duration: 0.35,
            }}
          />
          <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 90,
              from: { xPercent: 98, ease: "linear" },
            }}
          >
            <div id="horizontal-marquee-text" className={s.animated}>
              <Scrollytelling.Animation
                tween={{
                  start: 90,
                  end: 100,
                  to: { x: "-=50vw", ease: "linear" },
                }}
              >
                <p>
                  {splitted.map((ch, i) => {
                    const charDuration = 90 / charsLength;
                    const charStart = charDuration * i;
                    const charEnd = charStart + charDuration;

                    return (
                      <Scrollytelling.Animation
                        key={i}
                        tween={{
                          start: charStart * 0.7, // make it start a bit sooner, actually
                          end: charEnd,
                          fromTo: [
                            {
                              yPercent: 40,
                              scale: 0.5,
                              autoAlpha: 0,
                              transformOrigin: "center right",
                            },
                            {
                              keyframes: {
                                "0%": { autoAlpha: 0, scale: 0.5 },
                                "50%": { autoAlpha: 1, scale: 1 },
                                "100%": { yPercent: 0 },
                                easeEach: "linear",
                              },
                              ease: "linear",
                            },
                          ],
                        }}
                      >
                        <span
                          data-character
                          style={{
                            display: "inline-block",
                          }}
                        >
                          {ch === " " ? <>&nbsp;</> : ch}
                        </span>
                      </Scrollytelling.Animation>
                    );
                  })}
                </p>
              </Scrollytelling.Animation>

              <Scrollytelling.Animation
                tween={{
                  start: 90,
                  end: 100,
                  fromTo: [
                    { scale: 0.8, opacity: 0 },
                    { scale: 1.45, opacity: 1, ease: "linear" },
                  ],
                }}
              >
                <img
                  className={s.worldSvg}
                  src={`${BASE_PATH}/images/image-removebg-preview.png`}
                  alt="World"
                  loading="lazy"
                />
              </Scrollytelling.Animation>
            </div>
          </Scrollytelling.Animation>
        </div>
      </section>
    </Scrollytelling.Root>
  );
};
