import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showList: [],
};

const followPointerSlice = createSlice({
  name: 'follow-pointer',
  initialState,
  reducers: {
    showFollowPointer: (state, { payload }) => {
      const show = (id) => {
        if (id) {
          const isShowing = state.showList.includes(id);

          if (!isShowing) state.showList.push(id);
        }
      };

      if (typeof payload.id === 'object') {
        payload.id.map(show);
      } else {
        show(payload.id);
      }
    },
    hideFollowPointer: (state, { payload }) => {
      const hide = (id) => {
        const idx = state.showList.findIndex((showingId) => showingId === id);

        if (idx >= 0) state.showList.splice(idx, 1);
      };

      if (typeof payload.id === 'object') {
        payload.id.map(hide);
      } else {
        hide(payload.id);
      }
    },
  },
});

export default followPointerSlice;
export const { showFollowPointer, hideFollowPointer } =
  followPointerSlice.actions;
