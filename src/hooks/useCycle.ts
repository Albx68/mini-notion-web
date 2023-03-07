import { useEffect, useState } from "react";

interface IuseCycle {
  cycle:string;
  up:()=>void;
  down:()=>void;
}

const useCycle = (arr: string[]) => {
  const [cycle, setCycle] = useState(arr[0]);
  const [i, setI] = useState(-1);
  const length = arr.length;

  const up = () => {
    if (i > 0) {
      setI((p) => p - 1);
    } else setI(() => length - 1);
  };

  const down = () => {
    if (i < length - 1) {
      setI((p) => p + 1);
    } else setI(() => 0);
  };

  useEffect(() => {
    setCycle(() => arr[i]);
  }, [i]);

  return { cycle, up, down } as IuseCycle;
};

export default useCycle;
