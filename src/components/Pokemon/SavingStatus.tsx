/** @jsx jsx */
import React from 'react';
import cx from 'classnames';
import { jsx, css } from '@emotion/core';
import { Progress } from '../Common/Progress';
import { Body } from '../Typography';
import { Checkmark } from '../Icons';
import { ThemeContext } from '../../store/ThemeContext';

interface SavingStatusProps {
  saving: boolean;
}

export const SavingStatus: React.FC<SavingStatusProps> = props => {
  const { saving } = props;
  const { space, textColor } = React.useContext(ThemeContext);
  const [show, setShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    let timeout: number;
    if (saving) {
      setShow(true);
    } else {
      timeout = window.setTimeout(() => {
        setShow(false);
      }, 1500);
    }
    return () => {
      window.clearTimeout(timeout);
    };
  }, [saving]);

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        opacity: 0;
        transition: opacity 400ms;
        pointer-events: none;
        &.show {
          opacity: 1;
        }
      `}
      className={cx({ show })}>
      <Body
        css={css`
          margin: 0;
        `}>
        {saving ? 'Saving' : 'Saved'}
      </Body>
      {saving && (
        <Progress
          css={css`
            transform: scale(0.5) translateX(-30%);
            margin-right: -40px;
          `}
        />
      )}
      {!saving && (
        <Checkmark
          css={css`
            fill: ${textColor.accentText};
            margin-left: ${space.s};
            width: 20px;
          `}
        />
      )}
    </div>
  );
};
