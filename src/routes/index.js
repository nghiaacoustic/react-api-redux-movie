import HomePage from "./../containers/Hometemplate/HomePage";
import AboutPage from "./../containers/Hometemplate/AboutPage";
import ListMoviePage from "./../containers/Hometemplate/ListMoviePage";
import DetailMoviePage from "../containers/Hometemplate/DetailMovie";
import HocPage from "./../containers/Hometemplate/HocPage";
import DashBoardPage from "./../containers/AdminTemplate/DashboardPage";
import AddUserPage from "./../containers/AdminTemplate/AddUserPage";
// import AuthPage from "./../containers/AdminTemplate/AuthPage"

const routesHome = [
    {
        exact: true,
        path: "/",
        component: HomePage,
    },
    {
        exact: false,
        path: "/about",
        component: AboutPage,
    },
    {
        exact: false,
        path: "/list-movie",
        component: ListMoviePage,
    },

    {
        exact: false,
        path: "/detail/:id",
        component: DetailMoviePage,
    },
    {
        exact: false,
        path: "/HOC",
        component: HocPage
    }
];

const routeAdmin = [
    {
        exact: false,
        path: "/dashboard",
        component: DashBoardPage,
    },

    {
        exact: false,
        path: "/add-user",
        component: AddUserPage,
    },
]

export { routesHome, routeAdmin };