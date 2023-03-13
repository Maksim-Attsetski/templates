import React, { FC } from 'react';

import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { routeNames } from 'navigation/types';

import s from './Notfound.module.scss';

const Notfound: FC = () => {
  const navigate = useNavigate();

  const onGoHome = (): void => {
    navigate(routeNames.Home);
  };

  return (
    <div className={s.page}>
      <Typography.Text className={s.text}>
        <strong>404</strong>, Страница <strong>не найдена</strong>
      </Typography.Text>
      <br />
      <Button onClick={onGoHome} type='primary'>
        Главная
      </Button>
    </div>
  );
};

export default Notfound;
