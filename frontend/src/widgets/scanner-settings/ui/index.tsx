import type { FC, ReactNode } from 'react';
import { SetSettings, useFetchScannerHostname, WriteText } from '@/features';
import { HostnameResponse } from '@/entities/scanner';

import './styles.scss';

type ScannerSettingsProps = FC<{
   renderHostNameCard: (value: HostnameResponse) => ReactNode
}>

export const ScannerSettings: ScannerSettingsProps = ({ renderHostNameCard }) => {
   const { mutateRequest, data, isLoading } = useFetchScannerHostname();

   return (
      <article className='scanner-settings'>
         <WriteText />
         <SetSettings hostnameCtlFetch={mutateRequest} isLoading={isLoading} />
         {data ? renderHostNameCard(data) : null}
      </article>
   );
};