"use client";

import * as Scrollytelling from "~/lib/scrollytelling-client";

import s from "./hero.module.scss";
import Link from "next/link";
import { LogoBasement } from "../../logos/logo";
import { CanvasWithMacModel } from "./mac-model";
import { toVw } from "~/lib/utils";
import { BASE_PATH } from "~/lib/constants";
import { useMedia } from "~/hooks/use-media";

export const Hero = () => {
  const isMobileSize = useMedia("(max-width: 768px)");

  return (
    <Scrollytelling.Root
      defaults={{ ease: "linear" }}
      debug={{ label: "Hello World👋" }}
    >
      <Scrollytelling.Pin
        childHeight={"100vh"}
        pinSpacerHeight={"300vh"}
        pinSpacerClassName={s["pin-spacer"]}
      >
        <header className={s["header"]}>
          <Link title="basement scrollytelling" href="/">
            <LogoBasement className={s["logo"]} />
          </Link>

          <svg
            className={s["star"]}
            fill="none"
            viewBox="0 0 679 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#a)">
              <path
                fill="#922338"
                d="M209.804 73.71a12.593 12.593 0 00-3.901-8.19 12.543 12.543 0 00-8.384-3.43L0 59.49l197.519-2.6c3.12-.058 6.107-1.278 8.378-3.422s3.664-5.06 3.907-8.177L211.568 22l1.829 24.084a12.587 12.587 0 003.642 7.938 12.546 12.546 0 007.923 3.649L249 59.503l-24.038 1.833a12.542 12.542 0 00-7.923 3.644 12.59 12.59 0 00-3.642 7.936L211.568 97l-1.764-23.29z"
              />
            </g>
            <g clipPath="url(#b)">
              <path
                fill="#922338"
                d="M469.196 45.29a12.593 12.593 0 003.901 8.19 12.543 12.543 0 008.384 3.43L679 59.51l-197.519 2.6c-3.12.058-6.107 1.278-8.378 3.422s-3.664 5.06-3.907 8.177L467.432 97l-1.829-24.084a12.587 12.587 0 00-3.642-7.938 12.546 12.546 0 00-7.923-3.649L430 59.497l24.038-1.833a12.542 12.542 0 007.923-3.644 12.59 12.59 0 003.642-7.936L467.432 22l1.764 23.29z"
              />
            </g>
            <Scrollytelling.Animation
              tween={{
                start: 0,
                end: 100,
                to: {
                  transformOrigin: "50% 50%",
                  rotate: 360,
                },
              }}
            >
              <image
                href={`${BASE_PATH}/chicago-logo.png`}
                x="281"
                y="0"
                width="120"
                height="120"
              />
            </Scrollytelling.Animation>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M249 22H0v75h249z" />
              </clipPath>
              <clipPath id="b">
                <path fill="#fff" d="M430 97h249V22H430z" />
              </clipPath>
            </defs>
          </svg>
          <div className={s["cta"]}>
            <div className={s["cta--buttons"]}>
            <a
              href="https://github.com/DoanGiaHuyVu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
              <span>GitHub</span>
            </a>
            </div>
          </div>
        </header>

        <section className={s["section"]}>
          <div className={s["model-container"]}>
            <CanvasWithMacModel />
          </div>

          <div className="wrapper">
            <div className={s["content"]}>
              <div className={s["svg__container"]}>
                <Scrollytelling.Animation
                  tween={{
                    start: 0,
                    end: 100,
                    fromTo: [
                      {
                        attr: {
                          viewBox: "0 0 543 183",
                        },
                        width: toVw(543),
                      },
                      {
                        attr: {
                          viewBox: "0 0 1856 183",
                        },
                        width: isMobileSize ? "100%" : toVw(1856),
                      },
                    ],
                  }}
                >
                  <svg
                    className={s["svg-we"]}
                    viewBox="0 0 543 183"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M210.102 0H124.631L97.6302 136.781H96.1997L62.0471 0H0L45.5965 183H134.644L159.856 55.8385H161.287L183.638 183H286.275L329.904 0H270.003L236.387 140.769H234.956L210.102 0Z"
                      fill="#000"
                    />
                    <path
                      d="M339.823 0V183H400.618V140.769V109.096V71.5577V42.2308V0H339.823Z"
                      fill="#000"
                    />
                    <Scrollytelling.Animation
                      tween={{
                        start: 0,
                        end: 40,
                        fromTo: [
                          {
                            attr: {
                              width: 143,
                            },
                          },
                          {
                            attr: {
                              width: isMobileSize ? 400 : 300,
                            },
                          },
                        ],
                      }}
                    >
                      <rect
                        x="400"
                        y="141"
                        width="143"
                        height="42"
                        fill="#000"
                      />
                    </Scrollytelling.Animation>
                    <Scrollytelling.Animation
                      tween={{
                        start: 0,
                        end: 40,
                        fromTo: [
                          {
                            attr: {
                              width: 143,
                            },
                          },
                          {
                            attr: {
                              width: isMobileSize ? 400 : 300,
                            },
                          },
                        ],
                      }}
                    >
                      <rect
                        x="400"
                        y="71"
                        width="143"
                        height="38"
                        fill="#000"
                      />
                    </Scrollytelling.Animation>
                    <Scrollytelling.Animation
                      tween={[
                        {
                          start: 0,
                          end: 40,
                          fromTo: [
                            {
                              attr: {
                                width: 143,
                              },
                            },
                            {
                              attr: {
                                width: isMobileSize ? 400 : 300,
                              },
                            },
                          ],
                        },
                        {
                          start: 40,
                          end: 100,
                          to: {
                            attr: {
                              width: 1440,
                            },
                          },
                        },
                      ]}
                    >
                      <rect x="400" width="143" height="42" fill="#000" />
                    </Scrollytelling.Animation>
                  </svg>
                </Scrollytelling.Animation>
                <Scrollytelling.Animation
                  tween={{
                    start: 0,
                    end: 40,
                    to: {
                      translateX: "0%",
                      scaleY: 0.613,
                    },
                  }}
                >
                  <svg
                    className={s["svg-make"]}
                    fill="none"
                    viewBox="0 0 950 187"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 76.055 185.502 L 0 185.502 L 0 0.002 L 66.78 0.002 Q 86.125 0.002 100.965 5.832 Q 115.805 11.662 124.285 23.852 Q 132.765 36.042 132.765 54.857 Q 132.765 63.337 127.995 71.552 Q 123.225 79.767 114.745 86.657 Q 126.935 93.282 133.56 104.015 Q 140.185 114.747 140.185 130.382 Q 140.185 148.137 131.97 160.46 Q 123.755 172.782 109.313 179.142 Q 94.87 185.502 76.055 185.502 Z M 47.7 109.182 L 47.7 142.307 L 70.225 142.307 Q 78.97 142.307 84.138 137.537 Q 89.305 132.767 89.305 125.347 Q 89.305 117.927 84.138 113.555 Q 78.97 109.182 70.225 109.182 L 47.7 109.182 Z M 47.7 37.897 L 47.7 70.227 L 63.335 70.227 Q 71.815 70.227 77.115 65.987 Q 82.415 61.747 82.415 54.062 Q 82.415 46.377 77.115 42.137 Q 71.815 37.897 63.335 37.897 L 47.7 37.897 Z" id="0" vector-effect="non-scaling-stroke"/><path d="M 160.06 113.687 L 160.06 0.002 L 209.085 0.002 L 209.085 113.687 Q 209.085 122.962 212.795 129.587 Q 216.505 136.212 223.263 139.657 Q 230.02 143.102 239.56 143.102 Q 249.1 143.102 255.99 139.657 Q 262.88 136.212 266.458 129.587 Q 270.035 122.962 270.035 113.687 L 270.035 0.002 L 319.06 0.002 L 319.06 113.687 Q 319.06 137.007 309.52 153.835 Q 299.98 170.662 282.093 179.672 Q 264.205 188.682 239.03 188.682 Q 214.385 188.682 196.63 179.672 Q 178.875 170.662 169.468 153.835 Q 160.06 137.007 160.06 113.687 Z" id="1" vector-effect="non-scaling-stroke"/><path d="M 397.235 185.502 L 348.21 185.502 L 348.21 0.002 L 397.235 0.002 L 397.235 185.502 Z" id="2" vector-effect="non-scaling-stroke"/><path d="M 554.38 185.502 L 429.035 185.502 L 429.035 0.002 L 478.06 0.002 L 478.06 140.452 L 554.38 140.452 L 554.38 185.502 Z" id="3" vector-effect="non-scaling-stroke"/><path d="M 637.59 185.502 L 575.58 185.502 L 575.58 0.002 L 637.59 0.002 Q 668.065 0.002 691.518 11.927 Q 714.97 23.852 728.22 44.655 Q 741.47 65.457 741.47 92.752 Q 741.47 119.782 728.22 140.717 Q 714.97 161.652 691.518 173.577 Q 668.065 185.502 637.59 185.502 Z M 624.605 46.377 L 624.605 139.127 L 637.59 139.127 Q 649.25 139.127 659.055 135.682 Q 668.86 132.237 676.015 126.142 Q 683.17 120.047 687.145 111.567 Q 691.12 103.087 691.12 92.752 Q 691.12 82.417 687.145 73.937 Q 683.17 65.457 676.015 59.362 Q 668.86 53.267 659.055 49.822 Q 649.25 46.377 637.59 46.377 L 624.605 46.377 Z" id="4" vector-effect="non-scaling-stroke"/>
                  </svg>
                </Scrollytelling.Animation>
              </div>
              <div className={s["svg-coolshit-wrapper"]}>
                <svg
                  className={s["svg-coolshit"]}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-5 -5 2735 230"
                  fill="none"
                >
                  {/* W - Google Blue */}
                  <path
                    fill="#009edb"
                    stroke="#000"
                    strokeWidth="14"
                    fillRule="evenodd"
                    d="M 62.5 218.75 L 31.25 218.75 L 31.25 187.5 L 0 187.5 L 0 0 L 62.5 0 L 62.5 125 L 93.75 125 L 93.75 0 L 125 0 L 125 125 L 156.25 125 L 156.25 0 L 218.75 0 L 218.75 187.5 L 187.5 187.5 L 187.5 218.75 L 156.25 218.75 L 156.25 187.5 L 125 187.5 L 125 156.25 L 93.75 156.25 L 93.75 187.5 L 62.5 187.5 L 62.5 218.75 Z"
                    clipRule="evenodd"
                  />
                  {/* I - Google Red */}
                  <path
                    fill="#EA4335"
                    stroke="#000"
                    strokeWidth="14"
                    fillRule="evenodd"
                    d="M 468.75 218.75 L 281.25 218.75 L 281.25 187.5 L 343.75 187.5 L 343.75 31.25 L 281.25 31.25 L 281.25 0 L 468.75 0 L 468.75 31.25 L 406.25 31.25 L 406.25 187.5 L 468.75 187.5 L 468.75 218.75 Z"
                    clipRule="evenodd"
                  />
                  {/* L - Google Yellow */}
                  <path
                    fill="#FBBC05"
                    stroke="#000"
                    strokeWidth="14"
                    fillRule="evenodd"
                    d="M 718.75 218.75 L 531.25 218.75 L 531.25 0 L 593.75 0 L 593.75 187.5 L 718.75 187.5 L 718.75 218.75 Z"
                    clipRule="evenodd"
                  />
                  {/* D - Google Green */}
                  <path
                    fill="#34A853"
                    stroke="#000"
                    strokeWidth="14"
                    fillRule="evenodd"
                    d="M 906.25 218.75 L 750 218.75 L 750 0 L 906.25 0 L 906.25 31.25 L 937.5 31.25 L 937.5 62.5 L 968.75 62.5 L 968.75 156.25 L 937.5 156.25 L 937.5 187.5 L 906.25 187.5 L 906.25 218.75 Z M 812.5 31.25 L 812.5 187.5 L 875 187.5 L 875 156.25 L 906.25 156.25 L 906.25 62.5 L 875 62.5 L 875 31.25 L 812.5 31.25 Z"
                    clipRule="evenodd"
                  />
                  {/* D - Google Blue */}
                  <path
                    fill="#009edb"
                    stroke="#000"
                    strokeWidth="14"
                    fillRule="evenodd"
                    d="M 1406.25 218.75 L 1250 218.75 L 1250 0 L 1406.25 0 L 1406.25 31.25 L 1437.5 31.25 L 1437.5 62.5 L 1468.75 62.5 L 1468.75 156.25 L 1437.5 156.25 L 1437.5 187.5 L 1406.25 187.5 L 1406.25 218.75 Z M 1312.5 31.25 L 1312.5 187.5 L 1375 187.5 L 1375 156.25 L 1406.25 156.25 L 1406.25 62.5 L 1375 62.5 L 1375 31.25 L 1312.5 31.25 Z"
                    clipRule="evenodd"
                  />
                  {/* R - Google Red */}
                  <path
                    fill="#EA4335"
                    stroke="#000"
                    strokeWidth="14"
                    fillRule="evenodd"
                    d="M 1562.5 218.75 L 1500 218.75 L 1500 0 L 1687.5 0 L 1687.5 31.25 L 1718.75 31.25 L 1718.75 125 L 1656.25 125 L 1656.25 156.25 L 1687.5 156.25 L 1687.5 187.5 L 1718.75 187.5 L 1718.75 218.75 L 1625 218.75 L 1625 187.5 L 1593.75 187.5 L 1593.75 156.25 L 1562.5 156.25 L 1562.5 218.75 Z M 1562.5 31.25 L 1562.5 125 L 1625 125 L 1625 93.75 L 1656.25 93.75 L 1656.25 31.25 L 1562.5 31.25 Z"
                    clipRule="evenodd"
                  />
                  {/* E - Google Yellow */}
                  <path
                    fill="#FBBC05"
                    stroke="#000"
                    strokeWidth="14"
                    fillRule="evenodd"
                    d="M 1968.75 218.75 L 1750 218.75 L 1750 0 L 1968.75 0 L 1968.75 31.25 L 1812.5 31.25 L 1812.5 93.75 L 1937.5 93.75 L 1937.5 125 L 1812.5 125 L 1812.5 187.5 L 1968.75 187.5 L 1968.75 218.75 Z"
                    clipRule="evenodd"
                  />
                  {/* A - Google Green */}
                  <path
                    fill="#34A853"
                    stroke="#000"
                    strokeWidth="14"
                    fillRule="evenodd"
                    d="M 2062.5 218.75 L 2000 218.75 L 2000 62.5 L 2031.25 62.5 L 2031.25 31.25 L 2062.5 31.25 L 2062.5 0 L 2156.25 0 L 2156.25 31.25 L 2187.5 31.25 L 2187.5 62.5 L 2218.75 62.5 L 2218.75 218.75 L 2156.25 218.75 L 2156.25 156.25 L 2062.5 156.25 L 2062.5 218.75 Z M 2062.5 62.5 L 2062.5 125 L 2156.25 125 L 2156.25 62.5 L 2125 62.5 L 2125 31.25 L 2093.75 31.25 L 2093.75 62.5 L 2062.5 62.5 Z"
                    clipRule="evenodd"
                  />
                  {/* M - Google Blue */}
                  <path
                    fill="#009edb"
                    stroke="#000"
                    strokeWidth="14"
                    fillRule="evenodd"
                    d="M 2312.5 218.75 L 2250 218.75 L 2250 0 L 2312.5 0 L 2312.5 31.25 L 2343.75 31.25 L 2343.75 62.5 L 2375 62.5 L 2375 31.25 L 2406.25 31.25 L 2406.25 0 L 2468.75 0 L 2468.75 218.75 L 2406.25 218.75 L 2406.25 93.75 L 2375 93.75 L 2375 156.25 L 2343.75 156.25 L 2343.75 93.75 L 2312.5 93.75 L 2312.5 218.75 Z"
                    clipRule="evenodd"
                  />
                  {/* S - Google Red */}
                  <path
                    fill="#EA4335"
                    stroke="#000"
                    strokeWidth="14"
                    fillRule="evenodd"
                    d="M 2687.5 218.75 L 2531.25 218.75 L 2531.25 187.5 L 2500 187.5 L 2500 156.25 L 2562.5 156.25 L 2562.5 187.5 L 2656.25 187.5 L 2656.25 125 L 2531.25 125 L 2531.25 93.75 L 2500 93.75 L 2500 31.25 L 2531.25 31.25 L 2531.25 0 L 2687.5 0 L 2687.5 31.25 L 2718.75 31.25 L 2718.75 62.5 L 2656.25 62.5 L 2656.25 31.25 L 2562.5 31.25 L 2562.5 93.75 L 2687.5 93.75 L 2687.5 125 L 2718.75 125 L 2718.75 187.5 L 2687.5 187.5 L 2687.5 218.75 Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className={s["svg__container"]}>
                <Scrollytelling.Animation
                  tween={{
                    start: 0,
                    end: 100,
                    fromTo: [
                      {
                        xPercent: 0,
                        width: toVw(415),
                        marginRight: toVw(70),
                        attr: {
                          viewBox: "0 0 415 115",
                        },
                      },
                      {
                        xPercent: 0,
                        width: toVw(125),
                        marginRight: toVw(24),
                        attr: {
                          viewBox: "0 0 125 115",
                        },
                      },
                    ],
                  }}
                >
                  <svg
                    className={s["svg-that"]}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 415 115"
                    fill="none"
                  >
                    <Scrollytelling.Animation
                      tween={{ start: 0, end: 100, to: { scaleX: 0.3 } }}
                    >
                      <path
                        fill="#fff"
                        d="M32.877 113H63.42V26.077h33.057V0H0v26.077h32.877V113ZM101.415 113h30.542V66.351h40.423V113h30.542V0H172.38v40.274h-40.423V0h-30.542v113ZM292.994 0H242.6l-35.573 113h31.89l5.659-19.123h44.914L294.521 113h33.057L292.994 0Zm-41.142 69.249 14.552-48.967h.719l15.271 48.967h-30.542ZM351.401 113h30.542V26.077H415V0h-96.476v26.077h32.877V113Z"
                      />
                    </Scrollytelling.Animation>
                  </svg>
                </Scrollytelling.Animation>

                <Scrollytelling.Animation
                  tween={{ start: 0, end: 100, to: { scaleX: 1.5 } }}
                >
                  <svg
                    className={s["svg-performs"]}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1100 115"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M 194.72 113.92 L 165.12 113.92 L 165.12 1.92 L 196.32 1.92 L 240 63.52 L 240 1.92 L 269.6 1.92 L 269.6 113.92 L 240 113.92 L 194.72 50.08 L 194.72 113.92 Z M 148.16 24.64 L 123.52 39.2 Q 121.28 35.68 117.84 32.96 Q 114.4 30.24 110.32 28.72 Q 106.24 27.2 102.08 27.2 Q 93.76 27.2 87.36 31.12 Q 80.96 35.04 77.28 41.92 Q 73.6 48.8 73.6 57.92 Q 73.6 66.88 77.12 73.92 Q 80.64 80.96 87.28 84.96 Q 93.92 88.96 102.88 88.96 Q 108.64 88.96 113.28 87.04 Q 117.92 85.12 120.88 81.68 Q 123.84 78.24 124.64 73.6 L 100 73.6 L 100 51.2 L 153.12 51.2 L 153.12 67.68 Q 152.64 83.84 145.92 94.56 Q 139.2 105.28 127.92 110.56 Q 116.64 115.84 102.08 115.84 Q 84.8 115.84 71.52 108.4 Q 58.24 100.96 50.72 87.92 Q 43.2 74.88 43.2 57.92 Q 43.2 40.96 50.72 27.92 Q 58.24 14.88 71.52 7.44 Q 84.8 0 102.08 0 Q 113.44 0 122.16 3.2 Q 130.88 6.4 137.28 11.92 Q 143.68 17.44 148.16 24.64 Z M 512 113.92 L 435.84 113.92 L 435.84 1.92 L 510.88 1.92 L 510.88 29.12 L 465.44 29.12 L 465.44 44.64 L 502.24 44.64 L 502.24 71.04 L 465.44 71.04 L 465.44 86.72 L 512 86.72 L 512 113.92 Z M 392 113.92 L 362.4 113.92 L 362.4 29.12 L 330.72 29.12 L 330.72 1.92 L 423.52 1.92 L 423.52 29.12 L 392 29.12 L 392 113.92 Z M 29.6 113.92 L 0 113.92 L 0 1.92 L 29.6 1.92 L 29.6 113.92 Z M 318.4 113.92 L 288.8 113.92 L 288.8 1.92 L 318.4 1.92 L 318.4 113.92 Z"
                    />
                  </svg>
                </Scrollytelling.Animation>
              </div>
              <div className={s["footer"]}>
                <p>
                  I’m Doan Gia Huy Vu or you can call me Adam — a builder focused on AI-powered products and high-performance
                  digital experiences.
                </p>

                <svg viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14 0.226562L24 6.00007L14 11.7736L14 7.00006L0 7.00006V5.00006L14 5.00007L14 0.226562Z"
                    fill="white"
                  />
                </svg>

                <p>
                  I mix research and engineering to turn ideas into real, shippable systems —
                  from LLM workflows and data pipelines to clean UI and production - ready web
                  apps. I build with intention, sweat the details, and keep things fast,
                  clear, and durable.
                </p>

                <p>
                  Big vision or small experiment — if you care about craft and outcomes, I’m
                  down to build.
                </p>
              </div>

            </div>
          </div>
        </section>
      </Scrollytelling.Pin>
    </Scrollytelling.Root>
  );
};
