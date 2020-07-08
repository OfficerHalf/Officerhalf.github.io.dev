/** @jsx jsx */
import React from 'react';
import { Search, Close } from '../Icons';
import { useOnClickOutside } from 'the-captains-hooks';
import { css, jsx } from '@emotion/core';
import { theme } from '../../util/theme';

const { space, color } = theme;

const iconStyle = css`
  width: 20px;
  cursor: pointer;
  fill: ${color.background};
`;

interface SearchBoxProps {
  onEnter: (value: string) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = props => {
  const { onEnter } = props;
  const [showInput, setShowInput] = React.useState<boolean>(false);
  const searchBoxRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  useOnClickOutside(searchBoxRef, () => setShowInput(false));
  React.useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);
  const toggleSearchBox = React.useCallback(() => {
    if (showInput) {
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  }, [showInput]);

  const handleEnter = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && inputRef.current) {
        onEnter(inputRef.current.value);
      }
    },
    [onEnter]
  );

  return (
    <div
      css={css`
        display: flex;
      `}
      ref={searchBoxRef}>
      <div
        css={css`
          background-color: white;
          width: ${showInput ? 250 : 0}px;
          transition: all 0.2s;
          height: 32px;
          border-radius: 2px;
          margin-right: ${space.s};
        `}>
        {showInput && (
          <input
            tabIndex={0}
            ref={inputRef}
            css={css`
              background-color: transparent;
              border: 0;
              outline: none;
              width: 250px;
              height: 32px;
              padding: ${space.xs};
            `}
            type="text"
            onKeyDown={handleEnter}
          />
        )}
      </div>
      {!showInput && <Search css={iconStyle} onClick={toggleSearchBox} />}
      {showInput && <Close css={iconStyle} onClick={toggleSearchBox} />}
    </div>
  );
};
