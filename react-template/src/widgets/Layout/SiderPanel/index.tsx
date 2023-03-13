import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  UserOutlined,
  ScheduleOutlined,
  FileOutlined,
  MessageOutlined,
} from '@ant-design/icons';

import { Sider } from 'UI';
import { useTypedSelector } from 'hooks';

import { routeNames } from 'navigation/types';
import s from './SiderPanel.module.scss';

interface IProps {
  setCollapsed: (val: boolean) => void;
  collapsed: boolean;
}

const SiderPanel: FC<IProps> = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const onMenuItemClick = (route: string, isDrawer: boolean) => {
    navigate(route);
    isDrawer && setCollapsed(false);
  };

  useEffect(() => {
    const resizeEvent = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', resizeEvent);
    return () => window.removeEventListener('resize', resizeEvent);
  }, []);

  return (
    <>
      <Sider collapsed={collapsed} onCollapse={setCollapsed}>
        <div>sider</div>
      </Sider>
    </>
  );
};

export default memo(SiderPanel);
