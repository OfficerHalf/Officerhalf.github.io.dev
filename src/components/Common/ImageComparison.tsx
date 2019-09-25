import * as React from 'react';
import '../../styles/components/Common/ImageComparison.scss';
import { Icon } from 'antd';

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

export const ImageComparison: React.FC<ImageComparisonProps> = props => {
  const {
    width = 700,
    height = 500,
    imageLeftSrc,
    imageRightSrc,
    labelLeft = '',
    labelRight = '',
    dragHandleColor = 'white',
    dragHandleRadius = 40
  } = props;
  const dragRef = React.useRef<HTMLDivElement>(null);
  const animationFrameRef = React.useRef<number>();
  const [dragging, setDragging] = React.useState<boolean>(false);
  const [startPosition, setStartPosition] = React.useState<number>(0);
  const [position, setPosition] = React.useState<number>(width / 2);

  React.useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    setStartPosition(dragRef.current!.getBoundingClientRect().left);
  }, [dragRef]);

  const onDragStart: React.MouseEventHandler<
    HTMLDivElement
  > = React.useCallback(() => {
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
              Math.max(
                dragHandleRadius / 2,
                event.pageX - dragHandleRadius / 2 - startPosition + width / 2
              ),
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
              Math.max(
                dragHandleRadius / 2,
                event.pageX - dragHandleRadius / 2 - startPosition + width / 2
              ),
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
      className="image-comparison-container"
      onMouseMove={onDrag}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      draggable={false}
    >
      <div
        draggable={false}
        className="image-comparison-wrapper"
        style={{
          width: position
        }}
      >
        <div
          draggable={false}
          className="image-comparison-left"
          style={{
            width: position,
            height: height,
            backgroundImage: `url("${imageLeftSrc}")`,
            backgroundSize: `${width}px ${height}px`
          }}
        />
        <div draggable={false} className="image-comparison-left-label">
          {labelLeft}
        </div>
      </div>
      <div
        draggable={false}
        className="image-comparison-wrapper"
        style={{
          width: width - position
        }}
      >
        <div
          draggable={false}
          className="image-comparison-right"
          style={{
            width: width - position,
            height: height,
            backgroundImage: `url("${imageRightSrc}")`,
            backgroundSize: `${width}px ${height}px`
          }}
        />
        <div draggable={false} className="image-comparison-right-label">
          {labelRight}
        </div>
      </div>
      <div
        className="image-comparison-draggable-container"
        style={{
          height,
          transform: `translateX(${position - dragHandleRadius / 2}px)`
        }}
      >
        <div
          style={{
            width: dragHandleRadius,
            height: dragHandleRadius,
            borderRadius: dragHandleRadius / 2,
            backgroundColor: dragHandleColor
          }}
          onMouseDown={onDragStart}
          ref={dragRef}
          className="image-comparison-draggable"
        >
          <Icon className="image-comparison-draggable-icon" type="left" />
          <Icon className="image-comparison-draggable-icon" type="right" />
        </div>
      </div>
    </div>
  );
};
