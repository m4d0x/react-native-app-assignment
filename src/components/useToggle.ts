import { useState } from "react";

export default function useToggle(initialValue?: boolean) {
  const [toggle, setToggle] = useState(initialValue ?? false);
  const toggleState = () => setToggle(!toggle);

  return [toggle, toggleState] as const;
}
