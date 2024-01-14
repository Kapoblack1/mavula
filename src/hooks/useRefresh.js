import { useState, useCallback } from "react";

const useRefresh = (callback) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      callback();
      setRefreshing(false);
    }, 2000);
  }, [callback]);

  return { refreshing, onRefresh };
};

export default useRefresh;
