import './styles.scss';
import { ScannerSettings } from '@/widgets/scanner-settings/ui';
import { DrawerHostName } from '@/widgets';

export default function Main() {
    return (
        <section className='main'>
            <ScannerSettings renderHostNameCard={value => <DrawerHostName value={value} />} />
        </section>
    );
}