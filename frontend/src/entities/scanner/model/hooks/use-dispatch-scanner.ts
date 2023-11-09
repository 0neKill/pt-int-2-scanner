import { useMemo } from 'react';

import { useDispatchedActions } from '@/shared/utils/helpers';
import { actionScanner } from '@/entities/scanner';

export const useChangeScannerSettings = () => {
    const { setSshData } = useDispatchedActions<typeof actionScanner>(actionScanner);
    return useMemo(() =>
        ({ setSshData }), [setSshData]);
};