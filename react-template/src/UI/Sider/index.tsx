import React, { FC, memo, ReactElement, ReactNode } from 'react';
import { assets } from '../../assets'; // close icon "X"
import s from './Sider.module.scss';

interface IProps {
  className?: string;
  onCollapse: (value: boolean) => void;
  collapsed: boolean;
  children: ReactNode | ReactElement;
}

const _Sider: FC<IProps> = ({
  collapsed,
  onCollapse,
  className = '',
  children,
}) => {
  return (
    <div className={`${s.sider} ${collapsed ? s.active : ''} ${className}`}>
      {children}
      <div onClick={() => onCollapse(!collapsed)} className={s.siderButton}>
        <img
          className={s.siderIcon}
          src={assets?.siderIcon || ''}
          alt='sider icon'
        />
      </div>
    </div>
  );
};

export default memo(_Sider);
