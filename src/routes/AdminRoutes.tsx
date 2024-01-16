import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { NavLink } from "react-router-dom";
import AddCategory from "../pages/admin/Category/AddCategory";
import AddLanguage from "../pages/admin/Language/AddLanguage";
import AllLanguage from "../pages/admin/Language/AllLanguage";
import AllCategory from "../pages/admin/Category/AllCategory";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Category",
    children: [
      {
        name: "Add Category",
        path: "add-category",
        element: <AddCategory />,
      },
      {
        name: "All Category",
        path: "all-category",
        element: <AllCategory />,
      },
    ],
  },
  {
    name: "Language",
    children: [
      {
        name: "Add Language",
        path: "add-language",
        element: <AddLanguage />,
      },
      {
        name: "All Language",
        path: "all-language",
        element: <AllLanguage />,
      },
    ],
  },
];

export const adminSidebarItems = adminPaths.reduce(
  (acc: TSidebarItem[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name} </NavLink>,
        })),
      });
    }
    return acc;
  },
  []
);

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if (item.element && item.path) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []);
