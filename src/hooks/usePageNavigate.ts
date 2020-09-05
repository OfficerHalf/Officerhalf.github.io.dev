import React from 'react';

export function usePageNavigate() {
  const navigate = React.useCallback((destination: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = destination;
    }
  }, []);
  return navigate;
}
