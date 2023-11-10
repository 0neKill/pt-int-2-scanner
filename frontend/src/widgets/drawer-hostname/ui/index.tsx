import { type FC, useState } from 'react';
import { Drawer } from 'antd';

import { Card, HostnameResponse } from '@/entities/scanner';

type DrawerHostNameProps = FC<{
   value: HostnameResponse
}>

export const DrawerHostName: DrawerHostNameProps = ({ value }) => {
   const [isOpen, setIsOpen] = useState<boolean>(true);
   const handlerOnClose = () => setIsOpen(false);

   return (
      <Drawer open={isOpen} onClose={handlerOnClose}>
         <Card data={value} />
      </Drawer>
   );
};