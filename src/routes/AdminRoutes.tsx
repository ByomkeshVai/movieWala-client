import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { NavLink } from "react-router-dom";
import AddLanguage from "../pages/admin/Language/AddLanguage";
import Category from "../pages/admin/Category/Category";
import Genre from "../pages/admin/Genre/Genre";

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
    path: "category",
    element: <Category />,
  },
  {
    name: "Genre",
    path: "genre",
    element: <Genre />,
  },
  {
    name: "Language",
    children: [
      {
        name: "Add Language",
        path: "add-language",
        element: <AddLanguage />,
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
