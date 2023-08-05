import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {State, AppDispatch} from '../types/state.ts';

const useAppDispatch = () => useDispatch<AppDispatch>();

const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export {useAppDispatch, useAppSelector};
