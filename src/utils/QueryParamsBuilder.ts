// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { TMovie } from "../redux/ReduxType/ReduxType";

// // type TItem = {
// //   key: string;
// //   label: string;
// // };

// export const transformDataToItems = (
//   data: TMovie[] | undefined,
//   query: string
// ) => {
//   const itemsSet = new Set<string>();

//   const items =
//     data
//       ?.flatMap((item) => item.query ?? [])
//       .filter((query) => query && !itemsSet.has(query) && itemsSet.add(query))
//       .map((query) => ({ key: query, label: query })) ?? [];

//   return items;
// };
