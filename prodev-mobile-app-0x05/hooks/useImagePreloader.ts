import { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';

// Define all your images that need to be preloaded
const imageAssets = [
  require('@/assets/images/mansion.jpg'),
  require('@/assets/images/Villa.jpg'),
  require('@/assets/images/Beachfront.jpg'),
  require('@/assets/images/Countryside.jpg'),
  require('@/assets/images/Tropical.jpg'),
  require('@/assets/images/Secluded.jpg'),
  require('@/assets/images/Family-Friendly.jpg'),
  require('@/assets/images/Pet-Friendly.jpg'),
  require('@/assets/images/sample-image.png'),
  require('@/assets/images/Logo.png'),
  require('@/assets/images/logo-green.png'),
  require('@/assets/images/hero-icon.png'),
  require('@/assets/images/splash.png'),
  require('@/assets/images/user-image.png'),
];

export const useImagePreloader = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Preload all images
        await Promise.all(
          imageAssets.map(async (image) => {
            return Asset.fromModule(image).downloadAsync();
          })
        );
        setImagesLoaded(true);
      } catch (error) {
        console.log('Error preloading images:', error);
        setImagesLoaded(true); // Set to true anyway to prevent infinite loading
      }
    };

    loadImages();
  }, []);

  return imagesLoaded;
};