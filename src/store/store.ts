import {configureStore} from '@reduxjs/toolkit';

import {mainReducer} from './reducer.ts';

const store = configureStore({reducer: mainReducer});

export {store};
