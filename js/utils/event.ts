import mitt from 'mitt';
import React from 'react';

export const EventNames = {
  PaywallClosed: 'PaywallClosed',
} as const;

const emitter = mitt();

export const emit = (event: keyof typeof EventNames, data?: any) => {
  emitter.emit(event, data);
};

export const useMitt = (
  event: keyof typeof EventNames,
  handler: (data: any) => void,
  deps: readonly any[] = [],
) => {
  React.useEffect(() => {
    emitter.on(event, handler);
    return () => {
      emitter.off(event, handler);
    };
  }, [event, handler, deps]);
};
