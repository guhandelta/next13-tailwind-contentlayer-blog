'use client';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieAnimation = () => {
  return (
    <DotLottiePlayer
        src="/Animation-1696877543913.lottie"
        autoplay
        loop
    >
    </DotLottiePlayer>
  );
};

export default LottieAnimation;