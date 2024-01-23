import AdminDashboard from "../pages/admin/AdminDashboard";
import Category from "../pages/admin/Category/Category";
import Genre from "../pages/admin/Genre/Genre";
import Language from "../pages/admin/Language/Language";
import AddMovie from "../pages/admin/Movie/AddMovie";
import AddWebSeries from "../pages/admin/Movie/AddWebSeries";
import MovieTable from "../pages/admin/Movie/MovieWebTable/MovieTable";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Add Movie",
    path: "add-movie",
    element: <AddMovie />,
  },
  {
    name: "Add Series",
    path: "add-Series",
    element: <AddWebSeries />,
  },
  {
    name: "All Uploaded",
    path: "all-uploaded",
    element: <MovieTable />,
  },

  {
    name: "Movie Management",
    children: [
      {
        name: "Language",
        path: "language",
        element: <Language />,
      },
      {
        name: "Category",
        path: "category",
        element: <Category />,
      },
      {
        name: "Genre",
        path: "genre",
        element: <Genre />,
      },
    ],
  },
];
