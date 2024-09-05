/** @format */

import React, { useMemo } from 'react';
import './IconBox.scss';
import { TbSquareRoundedCheckFilled, TbAlertSquareRoundedFilled, TbInfoSquareRoundedFilled } from 'react-icons/tb';

export type MessageType = 'info' | 'success' | 'error';

type MessageBoxProps = {
  type?: MessageType;
};
const IconBox = ({ type }: MessageBoxProps) => {
  const Icon = useMemo(() => {
    switch (type) {
      case 'info':
        return TbInfoSquareRoundedFilled;
      case 'success':
        return TbSquareRoundedCheckFilled;
      case 'error':
        return TbAlertSquareRoundedFilled;
    }
  }, [type]);

  const classnames = useMemo(() => ['icon', type].join(' '), [type]);

  return <div className={classnames}>{Icon && <Icon />}</div>;
};

export default IconBox;
