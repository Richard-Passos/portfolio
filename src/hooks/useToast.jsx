'use client';

import { useEffect, useState } from 'react';

const TOAST_REMOVE_DELAY_FOR_ANIMATIONS = 150;

let count = 0;

const genId = () => {
  count++;

  return count.toString();
};

const removeQueue = new Map();

const addToRemoveQueue = (toastId) => {
  if (!removeQueue.has(toastId)) {
    const timeout = setTimeout(() => {
      removeQueue.delete(toastId);

      dispatch({
        type: 'REMOVE_TOAST',
        toastId,
      });
    }, TOAST_REMOVE_DELAY_FOR_ANIMATIONS);

    removeQueue.set(toastId, timeout);
  }
};

const actions = {
  ADD_TOAST(state, { toast }) {
    return {
      ...state,
      toasts: [toast, ...state.toasts],
    };
  },
  UPDATE_TOAST(state, action) {
    return {
      ...state,
      toasts: state.toasts.map((toast) =>
        toast.id === action.toast.id
          ? {
              ...toast,
              ...action.toast,
            }
          : toast,
      ),
    };
  },
  DISMISS_TOAST(state, { toastId }) {
    let toasts = [];

    if (toastId === undefined) {
      toasts = state.toasts.map((toast) => {
        addToRemoveQueue(toast.id);

        return {
          ...toast,
          open: false,
        };
      });
    } else {
      addToRemoveQueue(toastId);

      toasts = state.toasts.map((toast) =>
        toast.id === toastId
          ? {
              ...toast,
              open: false,
            }
          : toast,
      );
    }

    return {
      ...state,
      toasts,
    };
  },
  REMOVE_TOAST(state, { toastId }) {
    return {
      ...state,
      toasts:
        toastId === undefined
          ? []
          : state.toasts.filter(({ id }) => id !== toastId),
    };
  },
};

const reducer = (state, action) => {
  const reducerAction = actions[action.type];

  return reducerAction ? reducerAction(state, action) : state;
};

const listeners = [];

let memoryState = { toasts: [] };

const dispatch = (action) => {
  memoryState = reducer(memoryState, action);

  listeners.forEach((listener) => {
    listener(memoryState);
  });
};

const toast = (props) => {
  const id = genId();

  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id }),
    update = (props) =>
      dispatch({
        type: 'UPDATE_TOAST',
        toast: { ...props, id },
      });

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id,
    dismiss,
    update,
  };
};

const useToast = () => {
  const [state, setState] = useState(memoryState);

  useEffect(() => {
    listeners.push(setState);

    return () => {
      const listenerIndex = listeners.indexOf(setState);

      if (listenerIndex > -1) listeners.splice(listenerIndex, 1);
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  };
};

export default useToast;
export { toast, TOAST_REMOVE_DELAY_FOR_ANIMATIONS, reducer };
