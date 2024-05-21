import { useDispatch } from 'react-redux';
import { type AppDispatch } from 'app/providers/StoreProvider';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;