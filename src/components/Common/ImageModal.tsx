/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { css, jsx } from '@emotion/core';
import { theme } from '../../util/theme';
import { useOnClickOutside } from 'the-captains-hooks';
import { Portal } from './Portal';

const { color, space } = theme;

const modalShadeStyle = css`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: #000000cc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ImageModalProps {
  image: React.MutableRefObject<HTMLImageElement | undefined>;
  showModal: boolean;
  closeModal: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = props => {
  const { image, showModal, closeModal } = props;
  const fullSizeRef = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(fullSizeRef, closeModal);

  return (
    <Fragment>
      {showModal && image.current && (
        <Portal>
          <div css={modalShadeStyle}>
            <div
              id="img-wrapper"
              ref={fullSizeRef}
              css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                max-width: 100%;
                max-height: 100%;
                padding: ${space.l};
              `}>
              <img
                css={css`
                  max-width: 100%;
                  max-height: 100%;
                `}
                alt={image.current.alt}
                src={image.current.src}
                srcSet={image.current.srcset}
                title={image.current.title}
                id={image.current.id}
                className={image.current.className}
              />
              <span
                css={css`
                  margin-top: ${space.m};
                  color: ${color.background};
                `}>
                {image.current.alt && image.current.alt !== 'undefined' && image.current.alt}
              </span>
            </div>
          </div>
        </Portal>
      )}
    </Fragment>
  );
};
