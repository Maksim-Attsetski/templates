import React, { FC, memo } from 'react';

interface IProps {
  className?: string;
  text: string;
}

import s from './SubTitle.module.scss';

const SubTitle: FC<IProps> = ({ className = '', text }) => {
  return <p className={s.title + ' ' + className}>{text}</p>;
};

export default memo(SubTitle);
