import AllAnime from "../pages/AllContent/AllAnime";
import AllMovie from "../pages/AllContent/AllMovie";
import AllSeires from "../pages/AllContent/AllSeires";

export const userPaths = [
  {
    name: "Movies",
    path: "all-movie",
    element: <AllMovie />,
  },
  {
    name: "Anime",
    path: "all-anime",
    element: <AllAnime />,
  },
  {
    name: "Series",
    path: "all-series",
    element: <AllSeires />,
  },
];
