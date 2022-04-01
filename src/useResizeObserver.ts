import { useLayoutEffect, useState, useCallback, RefObject, useRef } from "react";

type RefWidth = number | undefined
type RefHeight = number | undefined

export type UseResizeObserver = (  callback?: (entry: DOMRectReadOnly) => void) => [
  RefObject<HTMLDivElement>,
  RefWidth?, 
  RefHeight?
]

const useResizeObserver:UseResizeObserver = (callback) => {
  //Reference
  const reference = useRef<HTMLDivElement>(null)
  //W H
  const [Rwidth, setRWidth] = useState<RefWidth>(reference.current?.offsetWidth)
  const [Rheight, setRHeight] = useState<RefHeight>(reference.current?.offsetHeight)



  const handleResize = useCallback(
    entries => {
      if (!Array.isArray(entries)) { return;}
      const entry = entries[0];

      setRWidth(reference.current?.offsetWidth)
      setRHeight(reference.current?.offsetHeight)

      if (callback) {
        callback(entry.contentRect);
      }
    },
    [callback]
  );

  useLayoutEffect(() => {
    if (!reference.current) {return;}

    let Oberserver = new ResizeObserver(entries =>
      handleResize(entries)
    );
    Oberserver.observe(reference.current)

    return () => {
      Oberserver.disconnect();
      //RO = null;
    };
  }, [handleResize, reference]);


  return [reference, Rwidth, Rheight];
}

export default useResizeObserver