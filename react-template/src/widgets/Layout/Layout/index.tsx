import React, { memo, useState } from 'react';

import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader } from 'UI';
import { useTypedSelector } from 'hooks';

import Header from '../Header';
import SiderPanel from '../SiderPanel';
import s from './Layout.module.scss';

const _Layout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.div className={s.rootLayout}>
      <div className='site-layout h-full'>
        <Header isOpen={collapsed} setIsOpen={setCollapsed} />
        <main className={`${s.content} ${collapsed ? s.active : ''}`}>
          <Outlet />
          {/* {isLoading && <Loader />} */}
        </main>
        <footer className={s.footer}>
          <div>Сделано Отцецким Максимом</div>
        </footer>
      </div>
    </motion.div>
  );
};

export default memo(_Layout);
