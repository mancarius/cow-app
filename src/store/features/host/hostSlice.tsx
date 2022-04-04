import { 
    createAsyncThunk,
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit'
import { Host } from '../../../@types/Host'


// const getHostById = createAsyncThunk(
//     'hosts/getSingleHost',
//     async (hostId, thunkAPI) => {
//         return null
//     }
// )

const findHosts = createAsyncThunk(
    'hosts/findHosts',
    async (filters: Host.Filters, thunkAPI): Promise<Host.Info[]> => {
        try {
            return []
        } catch (error) {
            throw error 
        }
    }
)

interface initialState {
    hosts: Host.Info[]
    status: 'idle' | 'loading' | 'failed'
}

const initialState: initialState = {
    hosts: [],
    status: 'idle'
} 

export const hostsSlice = createSlice({
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
  