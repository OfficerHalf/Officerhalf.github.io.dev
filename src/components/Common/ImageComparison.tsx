import * as React from 'react';
import '../../styles/components/Common/ImageComparison.scss';

interface ImageComparisonProps {
  width?: number;
  height?: number;
  imageLeftSrc: string;
  imageRightSrc: string;
}

const makeDragImg = (): HTMLImageElement => {
  const img = new Image(0, 0);
  img.src =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  return img;
};

export const ImageComparison: React.FC<ImageComparisonProps> = props => {
  const { width = 700, height = 500, imageLeftSrc, imageRightSrc } = props;
  const dragImgRef = React.useRef<HTMLDivElement>(makeDragImg());
  const dragRef = React.useRef<HTMLDivElement>(null);
  const [startPosition, setStartPosition] = React.useState<number>(0);
  const [dragging, setDragging] = React.useState<boolean>(false);
  const [position, setPosition] = React.useState<number>(width / 2);

  React.useEffect(() => {
    setStartPosition(dragRef.current!.getBoundingClientRect().left);
  }, [dragRef]);

  const onDragStart: React.DragEventHandler<HTMLDivElement> = event => {
    event.dataTransfer.setDragImage(dragImgRef.current, 0, 0);
    setDragging(true);
  };

  const onDragEnd: React.DragEventHandler<HTMLDivElement> = event => {
    setDragging(false);
    setPosition(
      Math.min(Math.max(0, event.pageX - startPosition + width / 2), width - 3)
    );
  };

  const onDrag: React.DragEventHandler<HTMLDivElement> = event => {
    setPosition(
      Math.min(Math.max(0, event.pageX - startPosition + width / 2), width - 3)
    );
  };

  const onDragOver: React.DragEventHandler<HTMLDivElement> = event => {
    event.preventDefault();
  };

  return (
    <div style={{ height, width }}>
      <div
        className="image-comparison-left"
        style={{
          width: position,
          backgroundImage: `url("${imageLeftSrc}")`
        }}
      />
      <div
        className="image-comparison-right"
        style={{
          width: width - position,
          backgroundImage: `url("${imageRightSrc}")`,
          backgroundSize: `${width}px ${height}px`
        }}
      />
      <div
        style={{
          transform: `translateX(${position}px)`
        }}
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
        onDrag={onDrag}
        ref={dragRef}
        className="image-comparison-draggable"
      />
    </div>
  );
};
