import { 
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit'
import { Host } from '../../../@types/Host'
import HostService from '../../../service/host.service'

export const findHosts = createAsyncThunk(
    'hosts/find',
    HostService.findMany
)

interface initialState {
    hosts: Host.SearchResult[]
    status: 'idle' | 'loading' | 'failed'
}

const initialState: initialState = {
    hosts: [],
    status: 'idle'
} 

const hostSlice = createSlice({
    name: 'hosts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(findHosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(findHosts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.hosts = action.payload;
            })
            .addCase(findHosts.rejected, (state) => {
                state.status = 'failed';
            });
    } 
  });
  
export default hostSlice.reducer;