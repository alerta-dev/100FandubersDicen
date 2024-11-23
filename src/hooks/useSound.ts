import { useCallback } from 'react';

const sounds = {
  correct: new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3'),
  wrong: new Audio('https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3'),
  reveal: new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3'),
};

export const useSound = () => {
  const playSound = useCallback((type: keyof typeof sounds) => {
    const sound = sounds[type];
    sound.currentTime = 0;
    sound.play().catch(() => {
      // Handle any autoplay restrictions silently
    });
  }, []);

  return { playSound };
};