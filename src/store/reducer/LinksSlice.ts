import { ILink } from '../../model/ILink';
import { createSlice } from '@reduxjs/toolkit';

interface LinksStat {
  links: ILink[];
  isLoading: boolean;
  error: string;
}

const initialState: LinksStat = {
  links: [],
  isLoading: false,
  error: '',
};

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {},
});

export default linksSlice.reducer;
