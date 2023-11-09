import type { ReactNode } from 'react';

import '@/shared/utils/styles/index.scss';

export const withStyles = (children: () => ReactNode) => () => children();