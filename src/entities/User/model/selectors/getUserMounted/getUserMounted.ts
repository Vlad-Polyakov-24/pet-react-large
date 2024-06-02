import { StateSchema } from 'app/providers/StoreProvider';

const getUserMounted = (state: StateSchema) => state.user._mounted;

export default getUserMounted;