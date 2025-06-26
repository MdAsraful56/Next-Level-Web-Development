// import { useSelector } from './../../node_modules/react-redux/dist/react-redux.d';
import { useSelector, useDispatch } from 'react-redux';
import { type AppDispatch, type RootState } from './store';
// import { useDispatch } from './../../node_modules/react-redux/src/hooks/useDispatch';



export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();