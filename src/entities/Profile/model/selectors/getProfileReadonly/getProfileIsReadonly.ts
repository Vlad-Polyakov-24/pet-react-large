import { StateSchema } from 'app/providers/StoreProvider';

const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;

export default getProfileReadonly;