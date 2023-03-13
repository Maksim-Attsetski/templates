import React, { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { routeNames } from 'navigation/types';

import s from './style.module.scss';

interface IProps {
  setIsOpen: (val: boolean) => void;
  isOpen: boolean;
}

const _Header: FC<IProps> = ({ setIsOpen, isOpen }) => {
  const navigate = useNavigate();

  const onBurgerClick = async () => {};

  return (
    <motion.div className={s.header}>
      <div className={'container ' + s.headerBody}>
        <div className={s.sider}></div>
        <div className={s.buttonsContainer}>
          <button className={s.drawerButton} onClick={() => setIsOpen(!isOpen)}>
            click
          </button>
          {/* <button onClick={onBurgerClick}>{isAuth ? 'Выйти' : 'Войти'}</button> */}
          <button onClick={onBurgerClick}>{'Войти'}</button>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(_Header);
