/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';
import { ChevronRight, ChevronLeft } from '../Icons';
import { ThemeContext } from '../../store/ThemeContext';
import { staticTheme } from '../../util/theme';

const { space } = staticTheme;

interface ImageComparisonProps {
  width?: number;
  height?: number;
  imageLeftSrc: string;
  imageRightSrc: string;
  labelLeft?: string;
  labelRight?: string;
  dragHandleColor?: string;
  dragHandleRadius?: number;
}

const containerStyle = css`
  display: flex;
  text-align: center;
  user-select: none;
`;

const draggableContainerStyle = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right,
    transparent,
    transparent 48%,
    rgba(255, 255, 255, 0.1) 48%,
    rgba(255, 255, 255, 0.1) 52%,
    transparent 52%,
    transparent 100%
  );
`;

const draggableStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const comparisonWrapperStyle = css`
  display: inline-flex;
  flex-direction: column;
  .image-comparison-left {
    background-position: left;
  }
  .image-comparison-right {
    background-position: right;
  }
`;

export const ImageComparison: React.FC<ImageComparisonProps> = props => {
  const { theme } = React.useContext(ThemeContext);
  const {
    width = 700,
    height = 500,
    imageLeftSrc,
    imageRightSrc,
    labelLeft = '',
    labelRight = '',
    dragHandleColor = theme.primary.lighter,
    dragHandleRadius = 40
  } = props;
  const dragRef = React.useRef<HTMLDivElement>(null);
  const animationFrameRef = React.useRef<number>();
  const [dragging, setDragging] = React.useState<boolean>(false);
  const [startPosition, setStartPosition] = React.useState<number>(0);
  const [position, setPosition] = React.useState<number>(width / 2);

  const resetToDefault = React.useCallback(() => {
    setDragging(false);
    setStartPosition(dragRef.current!.getBoundingClientRect().left);
    setPosition(width / 2);
  }, [width]);

  React.useEffect(() => {
    window.addEventListener('resize', resetToDefault);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resetToDefault);
    };
  }, [resetToDefault]);

  React.useEffect(() => {
    setStartPosition(dragRef.current!.getBoundingClientRect().left);
  }, [dragRef]);

  const onDragStart: React.MouseEventHandler<HTMLDivElement> = React.useCallback(() => {
    setDragging(true);
  }, []);

  const onDragEnd: React.MouseEventHandler<HTMLDivElement> = React.useCallback(
    event => {
      if (dragging === true) {
        setDragging(false);
        event.persist();
        animationFrameRef.current = requestAnimationFrame(() => {
          setPosition(
            Math.min(
              Math.max(dragHandleRadius / 2, event.pageX - dragHandleRadius / 2 - startPosition + width / 2),
              width - dragHandleRadius / 2
            )
          );
        });
      }
    },
    [startPosition, width, dragging, dragHandleRadius]
  );

  const onDrag: React.MouseEventHandler<HTMLDivElement> = React.useCallback(
    event => {
      if (dragging === true) {
        event.persist();
        animationFrameRef.current = requestAnimationFrame(() => {
          setPosition(
            Math.min(
              Math.max(dragHandleRadius / 2, event.pageX - dragHandleRadius / 2 - startPosition + width / 2),
              width - dragHandleRadius / 2
            )
          );
        });
      }
    },
    [startPosition, width, dragging, dragHandleRadius]
  );

  return (
    <div
      css={containerStyle}
      className="image-comparison-container"
      onMouseMove={onDrag}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      draggable={false}>
      <div
        css={css`
          ${comparisonWrapperStyle};
          width: ${position}px;
        `}
        draggable={false}
        className="image-comparison-wrapper">
        <div
          css={css`
            width: ${position}px;
            height: ${height}px;
            background-image: url("${imageLeftSrc}");
            background-size: ${width}px ${height}px;
          `}
          draggable={false}
          className="image-comparison-left"
        />
        <div draggable={false} className="image-comparison-left-label">
          {labelLeft}
        </div>
      </div>
      <div
        css={css`
          ${comparisonWrapperStyle};
          width: ${width - position}px;
        `}
        draggable={false}
        className="image-comparison-wrapper">
        <div
          css={css`
          width: ${width - position}px;
          height: ${height}px;
          background-image: url("${imageRightSrc}");
          background-size: ${width}px ${height}px;
        `}
          draggable={false}
          className="image-comparison-right"
        />
        <div draggable={false} className="image-comparison-right-label">
          {labelRight}
        </div>
      </div>
      <div
        className="image-comparison-draggable-container"
        css={css`
          ${draggableContainerStyle};
          height: ${height}px;
          transform: translateX(${position - dragHandleRadius / 2}px);
        `}>
        <div
          css={css`
            ${draggableStyle};
            width: ${dragHandleRadius}px;
            height: ${dragHandleRadius}px;
            border-radius: ${dragHandleRadius / 2}px;
            background-color: ${dragHandleColor};
          `}
          onMouseDown={onDragStart}
          ref={dragRef}
          className="image-comparison-draggable">
          <ChevronLeft
            css={css`
              fill: white;
              width: ${space.xl};
            `}
          />
          <ChevronRight
            css={css`
              fill: white;
              width: ${space.xl};
            `}
          />
        </div>
      </div>
    </div>
  );
};
