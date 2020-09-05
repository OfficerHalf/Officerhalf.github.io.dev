/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { css, jsx } from '@emotion/core';
import cx from 'classnames';
import { useOnClickOutside } from 'the-captains-hooks';
import { Portal } from './Portal';
import { ThemeContext } from '../../store/ThemeContext';
import { Shade } from './Shade';

interface ImageModalProps {
  image: React.MutableRefObject<HTMLImageElement | undefined>;
  showModal: boolean;
  closeModal: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = props => {
  const { image, showModal, closeModal } = props;
  const { dark, space, textColor, background } = React.useContext(ThemeContext);
  const fullSizeRef = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(fullSizeRef, closeModal);

  return (
    <Fragment>
      <Portal>
        <Shade
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 300ms;
            &.showModal {
              opacity: 1;
              pointer-events: initial;
            }
          `}
          className={cx({ showModal })}>
          {image.current && (
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
                  max-width: 90vw;
                  max-height: 90vh;
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
                  color: ${dark ? textColor.primaryText : background.background};
                `}>
                {image.current.alt && image.current.alt !== 'undefined' && image.current.alt}
              </span>
            </div>
          )}
        </Shade>
      </Portal>
    </Fragment>
  );
};
