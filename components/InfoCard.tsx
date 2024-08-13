import Image from "next/image";
import Link from "next/link";

import avatar from "../public/assets/photo_2023-02-27 19.38.53.jpeg";

export default function InfoCard() {
  return (
    <div className="flex w-full flex-row items-center justify-between gap-4 rounded-3xl bg-cardBackground p-4">
      <Image
        className="aspect-square rounded-full object-cover"
        src={avatar}
        alt="picture"
        width={100}
        height={80}
      />
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col">
          <span className="text-xl font-bold">Rafael Khachikyan</span>
          <span className="text-xs font-bold">Front-end developer | LA</span>
        </div>
        <div className="flex flex-row items-center justify-end gap-2">
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              // xmlnsSerif="http://www.serif.com/"
              viewBox="0 0 512 512"
              className="h-8 w-8 rounded-full"
            >
              <g>
                <path
                  id="Dark_Blue"
                  d="M448,512h-384c-35.328,0-64-28.672-64-64V64c0-35.328 28.672-64 64-64h384c35.328,0 64,28.672 64,64v384c0,35.328-28.672,64-64,64Z"
                  fill="#1da1f2"
                  fillRule="nonzero"
                />
                <path
                  id="Logo__x2014__FIXED"
                  d="M196.608,386.048c120.704,0 186.752,-100.096 186.752,-186.752c0,-2.816 0,-5.632 -0.128,-8.448c12.8,-9.216 23.936,-20.864 32.768,-34.048c-11.776,5.248 -24.448,8.704 -37.76,10.368c13.568,-8.064 23.936,-20.992 28.928,-36.352c-12.672,7.552 -26.752,12.928 -41.728,15.872c-12.032,-12.8 -29.056,-20.736 -47.872,-20.736c-36.224,0 -65.664,29.44 -65.664,65.664c0,5.12 0.64,10.112 1.664,14.976c-54.528,-2.688 -102.912,-28.928 -135.296,-68.608c-5.632,9.728 -8.832,20.992 -8.832,33.024c0,22.784 11.648,42.88 29.184,54.656c-10.752,-0.384 -20.864,-3.328 -29.696,-8.192v0.896c0,31.744 22.656,58.368 52.608,64.384c-5.504,1.536 -11.264,2.304 -17.28,2.304c-4.224,0 -8.32,-0.384 -12.288,-1.152c8.32,26.112 32.64,45.056 61.312,45.568c-22.528,17.664 -50.816,28.16 -81.536,28.16c-5.248,0 -10.496,-0.256 -15.616,-0.896c28.928,18.432 63.488,29.312 100.48,29.312"
                  fill="#fff"
                  fillRule="nonzero"
                />
              </g>
            </svg>
          </Link>
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              className="h-8 w-8 rounded-full"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7C480,134.8,379.7,32,256,32z"
              />
            </svg>
          </Link>
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              // xmlnsSerif="http://www.serif.com/"
              viewBox="0 0 512 512"
              className="h-8 w-8 rounded-full"
            >
              <g id="g5891">
                <path
                  id="background"
                  d="M512,64c0,-35.323 -28.677,-64 -64,-64h-384c-35.323,0 -64,28.677 -64,64v384c0,35.323 28.677,64 64,64h384c35.323,0 64,-28.677 64,-64v-384Z"
                  fill="#2867b2"
                />
                <g id="shapes">
                  <rect
                    id="rect11"
                    x="61.053"
                    y="178.667"
                    width="85.76"
                    height="257.962"
                    fill="#fff"
                  />
                  <path
                    id="path13-0"
                    d="M104.512,54.28c-29.341,0 -48.512,19.29 -48.512,44.573c0,24.752 18.588,44.574 47.377,44.574h0.554c29.903,0 48.516,-19.822 48.516,-44.574c-0.555,-25.283 -18.611,-44.573 -47.935,-44.573Z"
                    fill="#fff"
                    fillRule="nonzero"
                  />
                  <path
                    id="path15"
                    d="M357.278,172.601c-45.49,0 -65.866,25.017 -77.276,42.589v-36.523h-85.738c1.137,24.197 0,257.961 0,257.961h85.737v-144.064c0,-7.711 0.554,-15.42 2.827,-20.931c6.188,-15.4 20.305,-31.352 43.993,-31.352c31.012,0 43.436,23.664 43.436,58.327v138.02h85.741v-147.93c0,-79.237 -42.305,-116.097 -98.72,-116.097Z"
                    fill="#fff"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
