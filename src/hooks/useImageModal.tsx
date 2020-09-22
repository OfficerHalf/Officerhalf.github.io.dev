import React from 'react';
import { ImageModal } from '../components/Common/ImageModal';
import { useMedia } from 'react-media';
import { useLocation } from '@reach/router';
import { ThemeContext } from '../store/ThemeContext';

export function useImageModal<T extends HTMLElement>(target: React.RefObject<T>, maxWidthOverride?: string) {
  const { queries } = React.useContext(ThemeContext);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const openModal = React.useCallback((event: MouseEvent) => {
    currentImage.current = event.target as HTMLImageElement;
    setShowModal(true);
  }, []);
  const closeModal = React.useCallback(() => setShowModal(false), []);
  const currentImage = React.useRef<HTMLImageElement>();
  const breakpoints = useMedia({ queries: queries.m });
  const { pathname } = useLocation();

  const maxWidth = maxWidthOverride ? maxWidthOverride : breakpoints[9] ? '900px' : '100%';

  React.useEffect(() => {
    setShowModal(false);
  }, [pathname]);

  React.useLayoutEffect(() => {
    if (target.current) {
      const images = Array.from(target.current.querySelectorAll('img'));
      images.forEach(img => {
        img.onclick = openModal;
        img.style.cursor = 'pointer';
        img.style.maxWidth = maxWidth;
      });
    }
  });

  return <ImageModal image={currentImage} closeModal={closeModal} showModal={showModal} />;
}
