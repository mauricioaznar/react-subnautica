import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SchemaIcon from "@mui/icons-material/Schema";
import HomePage from "./home-page/home-page";
import { Route, RouteGroup } from "../../types/route";
import ErDiagramPage from "./technical/er-diagram-page";

export const staticRouteGroups: RouteGroup[] = [
    {
        routes: [
            {
                icon: <HomeIcon />,
                name: "HomePage",
                path: "/",
                component: <HomePage />,
                title: "Home",
                navbar: true,
                exact: true,
            },
        ],
    },
    {
        title: "Technical features",
        routes: [
            {
                icon: <SchemaIcon />,
                name: "ErDiagramPage",
                path: "/erd",
                component: <ErDiagramPage />,
                title: "Er diagram",
                navbar: true,
                exact: true,
            },
        ],
    },
];

export const staticRoutes: Route[] = staticRouteGroups.reduce((acc, curr) => {
    const routes = curr.routes;
    return acc.concat(routes);
}, [] as Route[]);
