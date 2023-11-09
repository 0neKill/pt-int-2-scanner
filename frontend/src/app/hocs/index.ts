import { compose } from '@reduxjs/toolkit';

import { withStore } from './with-store';
import { withStyles } from './with-styles';
import { withQuery } from '@/app/hocs/with-query.tsx';

export const withHoc = compose(withStore, withStyles, withQuery);