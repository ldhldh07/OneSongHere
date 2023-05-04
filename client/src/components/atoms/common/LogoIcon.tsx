import React from 'react';
import { Link } from 'react-router-dom';
import Size from 'types/Size';

interface LogoIconProps {
  goHome?: boolean;
  size?: 'small' | 'medium' | 'large';
}
const LogoIcon = ({ goHome = false, size = Size.Medium }: LogoIconProps) => {
  const setWidth = (sizeLevel: string) => {
    switch (sizeLevel) {
      case Size.Small:
        return 100;
      case Size.Medium:
        return 150;
      case Size.Large:
        return 200;
      default:
        return 150;
    }
  };

  const svgWidth = setWidth(size);
  const svgHeight = (svgWidth * 48) / 156;

  if (goHome) {
    return (
      <Link to="/">
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox="0 0 156 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.741 0.999998V36H46.241V28.75H32.191V0.999998H23.741ZM48.057 24.5C48.057 26.9 48.6237 29 49.757 30.8C50.8904 32.6 52.457 34 54.457 35C56.457 36 58.707 36.5 61.207 36.5C63.707 36.5 65.9404 36 67.907 35C69.907 34 71.4737 32.6 72.607 30.8C73.7737 29 74.357 26.9 74.357 24.5C74.357 22.0667 73.7737 19.95 72.607 18.15C71.4737 16.35 69.907 14.95 67.907 13.95C65.9404 12.95 63.707 12.45 61.207 12.45C58.707 12.45 56.457 12.95 54.457 13.95C52.457 14.95 50.8904 16.35 49.757 18.15C48.6237 19.95 48.057 22.0667 48.057 24.5ZM55.807 24.5C55.807 23.3 56.057 22.2667 56.557 21.4C57.057 20.5333 57.707 19.8667 58.507 19.4C59.307 18.9333 60.207 18.7 61.207 18.7C62.1737 18.7 63.057 18.9333 63.857 19.4C64.6904 19.8667 65.3404 20.5333 65.807 21.4C66.307 22.2667 66.557 23.3 66.557 24.5C66.557 25.7 66.307 26.7333 65.807 27.6C65.3404 28.4333 64.6904 29.0833 63.857 29.55C63.057 30.0167 62.1737 30.25 61.207 30.25C60.207 30.25 59.307 30.0167 58.507 29.55C57.707 29.0833 57.057 28.4333 56.557 27.6C56.057 26.7333 55.807 25.7 55.807 24.5ZM78.0492 37.65C78.2159 39.6833 78.7659 41.4667 79.6992 43C80.6326 44.5667 82.0159 45.7833 83.8492 46.65C85.7159 47.5167 88.0659 47.95 90.8992 47.95C93.2659 47.95 95.3992 47.5167 97.2992 46.65C99.1992 45.8167 100.716 44.4833 101.849 42.65C103.016 40.8167 103.599 38.4333 103.599 35.5V13H96.3492V35.5C96.3492 36.9 96.0826 38.0667 95.5492 39C95.0492 39.9667 94.3659 40.6833 93.4992 41.15C92.6326 41.65 91.6659 41.9 90.5992 41.9C89.6326 41.9 88.7659 41.7333 87.9992 41.4C87.2326 41.1 86.6159 40.6333 86.1492 40C85.7159 39.3667 85.4492 38.5833 85.3492 37.65H78.0492ZM77.5492 24.2C77.5492 26.7667 78.0659 28.9167 79.0992 30.65C80.1659 32.3833 81.5326 33.7 83.1992 34.6C84.8659 35.4667 86.6326 35.9 88.4992 35.9C90.4326 35.9 92.1326 35.45 93.5992 34.55C95.0992 33.6167 96.2826 32.2833 97.1492 30.55C98.0159 28.7833 98.4492 26.6667 98.4492 24.2C98.4492 21.7 98.0159 19.5833 97.1492 17.85C96.2826 16.1167 95.0992 14.8 93.5992 13.9C92.1326 12.9667 90.4326 12.5 88.4992 12.5C86.6326 12.5 84.8659 12.9333 83.1992 13.8C81.5326 14.6667 80.1659 15.9667 79.0992 17.7C78.0659 19.4333 77.5492 21.6 77.5492 24.2ZM85.4992 24.2C85.4992 23 85.7492 21.9833 86.2492 21.15C86.7492 20.3167 87.4159 19.6833 88.2492 19.25C89.0826 18.8167 89.9992 18.6 90.9992 18.6C91.6326 18.6 92.2659 18.7167 92.8992 18.95C93.5326 19.1833 94.0992 19.5333 94.5992 20C95.1326 20.4667 95.5492 21.05 95.8492 21.75C96.1826 22.45 96.3492 23.2667 96.3492 24.2C96.3492 25.4333 96.0826 26.4667 95.5492 27.3C95.0159 28.1333 94.3326 28.7667 93.4992 29.2C92.6992 29.6 91.8659 29.8 90.9992 29.8C89.9992 29.8 89.0826 29.5833 88.2492 29.15C87.4159 28.7167 86.7492 28.0833 86.2492 27.25C85.7492 26.3833 85.4992 25.3667 85.4992 24.2ZM108.067 24.5C108.067 26.9 108.633 29 109.767 30.8C110.9 32.6 112.467 34 114.467 35C116.467 36 118.717 36.5 121.217 36.5C123.717 36.5 125.95 36 127.917 35C129.917 34 131.483 32.6 132.617 30.8C133.783 29 134.367 26.9 134.367 24.5C134.367 22.0667 133.783 19.95 132.617 18.15C131.483 16.35 129.917 14.95 127.917 13.95C125.95 12.95 123.717 12.45 121.217 12.45C118.717 12.45 116.467 12.95 114.467 13.95C112.467 14.95 110.9 16.35 109.767 18.15C108.633 19.95 108.067 22.0667 108.067 24.5ZM115.817 24.5C115.817 23.3 116.067 22.2667 116.567 21.4C117.067 20.5333 117.717 19.8667 118.517 19.4C119.317 18.9333 120.217 18.7 121.217 18.7C122.183 18.7 123.067 18.9333 123.867 19.4C124.7 19.8667 125.35 20.5333 125.817 21.4C126.317 22.2667 126.567 23.3 126.567 24.5C126.567 25.7 126.317 26.7333 125.817 27.6C125.35 28.4333 124.7 29.0833 123.867 29.55C123.067 30.0167 122.183 30.25 121.217 30.25C120.217 30.25 119.317 30.0167 118.517 29.55C117.717 29.0833 117.067 28.4333 116.567 27.6C116.067 26.7333 115.817 25.7 115.817 24.5Z"
            fill="#4642FF"
          />
        </svg>
      </Link>
    );
  }
  return (
    <div>
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox="0 0 156 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.741 0.999998V36H46.241V28.75H32.191V0.999998H23.741ZM48.057 24.5C48.057 26.9 48.6237 29 49.757 30.8C50.8904 32.6 52.457 34 54.457 35C56.457 36 58.707 36.5 61.207 36.5C63.707 36.5 65.9404 36 67.907 35C69.907 34 71.4737 32.6 72.607 30.8C73.7737 29 74.357 26.9 74.357 24.5C74.357 22.0667 73.7737 19.95 72.607 18.15C71.4737 16.35 69.907 14.95 67.907 13.95C65.9404 12.95 63.707 12.45 61.207 12.45C58.707 12.45 56.457 12.95 54.457 13.95C52.457 14.95 50.8904 16.35 49.757 18.15C48.6237 19.95 48.057 22.0667 48.057 24.5ZM55.807 24.5C55.807 23.3 56.057 22.2667 56.557 21.4C57.057 20.5333 57.707 19.8667 58.507 19.4C59.307 18.9333 60.207 18.7 61.207 18.7C62.1737 18.7 63.057 18.9333 63.857 19.4C64.6904 19.8667 65.3404 20.5333 65.807 21.4C66.307 22.2667 66.557 23.3 66.557 24.5C66.557 25.7 66.307 26.7333 65.807 27.6C65.3404 28.4333 64.6904 29.0833 63.857 29.55C63.057 30.0167 62.1737 30.25 61.207 30.25C60.207 30.25 59.307 30.0167 58.507 29.55C57.707 29.0833 57.057 28.4333 56.557 27.6C56.057 26.7333 55.807 25.7 55.807 24.5ZM78.0492 37.65C78.2159 39.6833 78.7659 41.4667 79.6992 43C80.6326 44.5667 82.0159 45.7833 83.8492 46.65C85.7159 47.5167 88.0659 47.95 90.8992 47.95C93.2659 47.95 95.3992 47.5167 97.2992 46.65C99.1992 45.8167 100.716 44.4833 101.849 42.65C103.016 40.8167 103.599 38.4333 103.599 35.5V13H96.3492V35.5C96.3492 36.9 96.0826 38.0667 95.5492 39C95.0492 39.9667 94.3659 40.6833 93.4992 41.15C92.6326 41.65 91.6659 41.9 90.5992 41.9C89.6326 41.9 88.7659 41.7333 87.9992 41.4C87.2326 41.1 86.6159 40.6333 86.1492 40C85.7159 39.3667 85.4492 38.5833 85.3492 37.65H78.0492ZM77.5492 24.2C77.5492 26.7667 78.0659 28.9167 79.0992 30.65C80.1659 32.3833 81.5326 33.7 83.1992 34.6C84.8659 35.4667 86.6326 35.9 88.4992 35.9C90.4326 35.9 92.1326 35.45 93.5992 34.55C95.0992 33.6167 96.2826 32.2833 97.1492 30.55C98.0159 28.7833 98.4492 26.6667 98.4492 24.2C98.4492 21.7 98.0159 19.5833 97.1492 17.85C96.2826 16.1167 95.0992 14.8 93.5992 13.9C92.1326 12.9667 90.4326 12.5 88.4992 12.5C86.6326 12.5 84.8659 12.9333 83.1992 13.8C81.5326 14.6667 80.1659 15.9667 79.0992 17.7C78.0659 19.4333 77.5492 21.6 77.5492 24.2ZM85.4992 24.2C85.4992 23 85.7492 21.9833 86.2492 21.15C86.7492 20.3167 87.4159 19.6833 88.2492 19.25C89.0826 18.8167 89.9992 18.6 90.9992 18.6C91.6326 18.6 92.2659 18.7167 92.8992 18.95C93.5326 19.1833 94.0992 19.5333 94.5992 20C95.1326 20.4667 95.5492 21.05 95.8492 21.75C96.1826 22.45 96.3492 23.2667 96.3492 24.2C96.3492 25.4333 96.0826 26.4667 95.5492 27.3C95.0159 28.1333 94.3326 28.7667 93.4992 29.2C92.6992 29.6 91.8659 29.8 90.9992 29.8C89.9992 29.8 89.0826 29.5833 88.2492 29.15C87.4159 28.7167 86.7492 28.0833 86.2492 27.25C85.7492 26.3833 85.4992 25.3667 85.4992 24.2ZM108.067 24.5C108.067 26.9 108.633 29 109.767 30.8C110.9 32.6 112.467 34 114.467 35C116.467 36 118.717 36.5 121.217 36.5C123.717 36.5 125.95 36 127.917 35C129.917 34 131.483 32.6 132.617 30.8C133.783 29 134.367 26.9 134.367 24.5C134.367 22.0667 133.783 19.95 132.617 18.15C131.483 16.35 129.917 14.95 127.917 13.95C125.95 12.95 123.717 12.45 121.217 12.45C118.717 12.45 116.467 12.95 114.467 13.95C112.467 14.95 110.9 16.35 109.767 18.15C108.633 19.95 108.067 22.0667 108.067 24.5ZM115.817 24.5C115.817 23.3 116.067 22.2667 116.567 21.4C117.067 20.5333 117.717 19.8667 118.517 19.4C119.317 18.9333 120.217 18.7 121.217 18.7C122.183 18.7 123.067 18.9333 123.867 19.4C124.7 19.8667 125.35 20.5333 125.817 21.4C126.317 22.2667 126.567 23.3 126.567 24.5C126.567 25.7 126.317 26.7333 125.817 27.6C125.35 28.4333 124.7 29.0833 123.867 29.55C123.067 30.0167 122.183 30.25 121.217 30.25C120.217 30.25 119.317 30.0167 118.517 29.55C117.717 29.0833 117.067 28.4333 116.567 27.6C116.067 26.7333 115.817 25.7 115.817 24.5Z"
          fill="#4642FF"
        />
      </svg>
    </div>
  );
};

export default LogoIcon;
