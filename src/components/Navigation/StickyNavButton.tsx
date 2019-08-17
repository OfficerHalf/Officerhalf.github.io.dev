import * as React from 'react';
import { useDebounce } from '../../utils/Hooks/useDebounce';

interface StickyNavButtonProps {
  onClick: (e: React.MouseEvent) => void;
  active: boolean;
  label: string;
}

export const StickyNavButton: React.FC<StickyNavButtonProps> = props => {
  const { onClick, active, label } = props;
  const [hovered, setHovered] = React.useState<boolean>(false);

  return (
    <div onClick={onClick}>
      <span hidden={!hovered}>{label}</span>
      <span
        style={{ textAlign: 'right' }}
        id="dot"
        className={active ? 'active' : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        *
      </span>
    </div>
  );
};
