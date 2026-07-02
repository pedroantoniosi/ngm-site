import { useContext } from "react";

import { NewsContext } from "../context/newsContext";

export function useNews() {
  return useContext(NewsContext);
}
