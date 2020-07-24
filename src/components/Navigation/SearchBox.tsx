/** @jsx jsx */
import React from 'react';
import { Search, Close } from '../Icons';
import { useOnClickOutside } from 'the-captains-hooks';
import { css, jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import { staticTheme } from '../../util/theme';
import { ThemeContext } from '../../store/ThemeContext';

const { space } = staticTheme;

interface SearchBoxProps {
  onEnter: (value: string) => void;
  fill?: string;
  border?: boolean;
  maxWidth?: string;
}

const inputWrapperStyle = css`
  padding: ${space.xxs};
  display: none;
  background-color: white;
  height: 100%;
  border-radius: ${space.xs};
  margin-right: ${space.s};
  &.enter {
    display: flex;
    width: 0px;
  }
  &.enter-active {
    display: flex;
    transition: width 200ms ease-in-out;
    width: 100%;
  }
  &.enter-done {
    display: flex;
    width: 100%;
  }
  &.exit {
    display: flex;
    width: 100%;
  }
  &.exit-active {
    display: flex;
    transition: width 200ms ease-in-out;
    width: 0px;
  }
  &.exit-done {
  }
`;

const wrapperStyle = css`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const SearchBox: React.FC<SearchBoxProps> = props => {
  const { theme } = React.useContext(ThemeContext);
  const { background, accent } = theme;
  const { onEnter, fill = background.background, border = false, maxWidth } = props;
  const [showInput, setShowInput] = React.useState<boolean>(false);
  const searchBoxRef = React.useRef<HTMLDivElement>(null);
  const inputWrapperRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const inputWrapperDrawer = css`
    &.enter-active {
      border: 2px solid ${accent.main};
    }
    &.enter-done {
      border: 2px solid ${accent.main};
    }
    &.exit {
      border: 2px solid ${accent.main};
    }
    &.exit-active {
      border: 2px solid ${accent.main};
    }
  `;

  useOnClickOutside(searchBoxRef, () => setShowInput(false));
  React.useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    } else if (!showInput && inputRef.current) {
      inputRef.current.value = '';
    }
  }, [showInput]);
  const toggleSearchBox = React.useCallback(() => {
    if (showInput) {
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  }, [showInput]);

  const iconStyle = css`
    display: block;
    width: ${space.l};
    height: ${space.l};
    cursor: pointer;
    fill: ${fill};
    flex-shrink: 0;
  `;

  const inputStyle = css`
    outline: none;
    border: none;
    background-color: transparent;
    flex-grow: 1;
  `;

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
        ${wrapperStyle};
        ${maxWidth &&
        css`
          max-width: ${maxWidth};
        `};
      `}
      ref={searchBoxRef}>
      <CSSTransition in={showInput} timeout={200} nodeRef={inputWrapperRef}>
        <div
          css={css`
            ${inputWrapperStyle};
            ${border && inputWrapperDrawer};
          `}
          ref={inputWrapperRef}>
          <input css={inputStyle} tabIndex={0} ref={inputRef} type="text" onKeyDown={handleEnter} />
        </div>
      </CSSTransition>
      {!showInput && <Search css={iconStyle} onClick={toggleSearchBox} />}
      {showInput && <Close css={iconStyle} onClick={toggleSearchBox} />}
    </div>
  );
};
