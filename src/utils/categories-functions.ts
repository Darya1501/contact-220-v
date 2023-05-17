import { TCategory } from "./types";

export const getIds = (array: TCategory[]) => {
  const ids: Array<number> = [];

  function handle(node: TCategory) {
    ids.push(node.id);
    node.children.forEach(child => handle(child));
  }

  array.forEach(item => handle(item))

  return ids;
}