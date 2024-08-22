"use client";
import Image from "next/image";
import Link from "next/link";

import avatar from "../public/assets/photo_2023-02-27 19.38.53.jpeg";
import { useRef, useState } from "react";

export default function InfoCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect();
      const cursorX = e.clientX - left;
      const cursorY = e.clientY - top;

      setPosition({ x: cursorX, y: cursorY });
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const touch = e.touches[0];
      const { left, top } = containerRef.current.getBoundingClientRect();
      const cursorX = touch.clientX - left;
      const cursorY = touch.clientY - top;

      setPosition({ x: cursorX, y: cursorY });
      setIsHovered(true);
    }
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div className="border-cardBorder flex w-full flex-row items-center justify-between gap-4 rounded-3xl border bg-cardBackground p-4">
      <Image
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="aspect-square rounded-full object-cover hover:cursor-none"
        height={80}
        width={100}
        src={avatar}
        alt="profile picture"
      />
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col">
          <span className="text-xl font-bold">Rafael Khachikyan</span>
          <span className="text-xs font-bold text-white/60">
            Front-end developer | LA
          </span>
        </div>
        <div className="flex flex-row items-center justify-end gap-2">
          <Link href="">
            <svg
              width="199"
              height="201"
              viewBox="0 0 199 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 rounded-full"
            >
              <rect width="199" height="201" rx="25" fill="#1DA1F2" />
              <g clipPath="url(#clip0_101_677)">
                <path
                  d="M161.375 183H37.625C26.24 183 17 173.76 17 162.375V38.625C17 27.24 26.24 18 37.625 18H161.375C172.76 18 182 27.24 182 38.625V162.375C182 173.76 172.76 183 161.375 183Z"
                  fill="#1DA1F2"
                />
                <path
                  d="M80.36 142.41C119.259 142.41 140.544 110.153 140.544 82.2263C140.544 81.3188 140.544 80.4113 140.503 79.5038C144.628 76.5338 148.216 72.7801 151.063 68.5313C147.268 70.2226 143.184 71.3363 138.894 71.8726C143.266 69.2738 146.608 65.1076 148.216 60.1576C144.133 62.5913 139.595 64.3238 134.769 65.2726C130.891 61.1476 125.405 58.5901 119.341 58.5901C107.668 58.5901 98.18 68.0776 98.18 79.7513C98.18 81.4013 98.3863 83.0101 98.7163 84.5776C81.1438 83.7113 65.5513 75.2551 55.115 62.4676C53.3 65.6026 52.2688 69.2326 52.2688 73.1101C52.2688 80.4526 56.0225 86.9288 61.6737 90.7238C58.2087 90.6001 54.95 89.6513 52.1038 88.0838V88.3726C52.1038 98.6026 59.405 107.183 69.0575 109.121C67.2837 109.616 65.4275 109.864 63.4887 109.864C62.1275 109.864 60.8075 109.74 59.5288 109.493C62.21 117.908 70.0475 124.013 79.2875 124.178C72.0275 129.87 62.9113 133.253 53.0113 133.253C51.32 133.253 49.6288 133.17 47.9788 132.964C57.3013 138.904 68.4388 142.41 80.36 142.41Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_101_677">
                  <rect
                    width="165"
                    height="165"
                    fill="white"
                    transform="translate(17 18)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href="">
            <svg
              width="199"
              height="201"
              viewBox="0 0 199 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 rounded-full"
            >
              <rect width="199" height="201" rx="25" fill="#1DA1F2" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M99.5 28.3125C59.6357 28.3125 27.3125 61.4414 27.3125 102.337C27.3125 135.047 48.002 162.762 76.6836 172.559C80.293 173.235 81.6143 170.947 81.6143 168.981C81.6143 167.209 81.5498 162.568 81.5176 156.381C61.4404 160.86 57.1865 146.455 57.1865 146.455C53.8994 137.915 49.1621 135.627 49.1621 135.627C42.6201 131.019 49.6455 131.115 49.6455 131.115C56.8965 131.631 60.6992 138.753 60.6992 138.753C67.1445 150.064 77.5859 146.81 81.7109 144.908C82.3555 140.139 84.2246 136.852 86.2871 135.015C70.2705 133.146 53.416 126.797 53.416 98.4375C53.416 90.3486 56.2197 83.7422 60.8281 78.5859C60.0869 76.7168 57.6055 69.1758 61.5371 58.9922C61.5371 58.9922 67.5957 56.9941 81.3887 66.5654C87.1572 64.9219 93.3125 64.1162 99.4678 64.084C105.591 64.1162 111.778 64.9219 117.547 66.5654C131.34 56.9941 137.366 58.9922 137.366 58.9922C141.298 69.1758 138.816 76.7168 138.075 78.5859C142.684 83.7744 145.487 90.3809 145.487 98.4375C145.487 126.861 128.601 133.113 112.52 134.95C115.098 137.238 117.418 141.75 117.418 148.646C117.418 158.54 117.321 166.532 117.321 168.949C117.321 170.915 118.61 173.235 122.284 172.494C151.03 162.729 171.688 135.015 171.688 102.337C171.688 61.4414 139.364 28.3125 99.5 28.3125Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link href="">
            <svg
              width="199"
              height="201"
              viewBox="0 0 199 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 rounded-full"
            >
              <rect width="199" height="201" rx="25" fill="#1DA1F2" />
              <g clipPath="url(#clip0_101_676)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M182 38.625C182 27.2416 172.758 18 161.375 18H37.625C26.2416 18 17 27.2416 17 38.625V162.375C17 173.758 26.2416 183 37.625 183H161.375C172.758 183 182 173.758 182 162.375V38.625Z"
                  fill="#1DA1F2"
                />
                <path
                  d="M64.3128 75.5784H36.6753V158.711H64.3128V75.5784Z"
                  fill="white"
                />
                <path
                  d="M50.6806 35.4927C41.225 35.4927 35.0469 41.7092 35.0469 49.857C35.0469 57.8337 41.0371 64.2217 50.3149 64.2217H50.4934C60.1301 64.2217 66.1284 57.8337 66.1284 49.857C65.9496 41.7092 60.1307 35.4927 50.6806 35.4927Z"
                  fill="white"
                />
                <path
                  d="M132.138 73.6235C117.479 73.6235 110.912 81.6857 107.235 87.3485V75.5784H79.6046C79.971 83.3763 79.6046 158.71 79.6046 158.71H107.235V112.283C107.235 109.798 107.413 107.314 108.146 105.538C110.14 100.575 114.689 95.4345 122.323 95.4345C132.317 95.4345 136.321 103.061 136.321 114.231V158.71H163.952V111.038C163.952 85.5022 150.319 73.6235 132.138 73.6235Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_101_676">
                  <rect
                    width="165"
                    height="165"
                    fill="white"
                    transform="translate(17 18)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: `${position.y + 50}px`,
            left: `${position.x + 110}px`,
            transform: "translate(-50%, 0)",
          }}
          className="absolute z-50 flex h-max w-max max-w-72 flex-col gap-1 rounded-md bg-black/80 p-4"
        >
          <span className="text-sm font-bold text-white/90">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
        </div>
      )}
    </div>
  );
}
