import AllAnime from "../components/ui/FrotendPage/AllContent/AllAnime";
import AllMovie from "../components/ui/FrotendPage/AllContent/AllMovie";
import AllSeires from "../components/ui/FrotendPage/AllContent/AllSeires";

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
