import { ScannerSettings, DrawerHostName } from '@/widgets';

import './styles.scss';

export default function Main() {
    return (
        <section className='main'>
            <ScannerSettings renderHostNameCard={value => <DrawerHostName value={value} />} />
        </section>
    );
}