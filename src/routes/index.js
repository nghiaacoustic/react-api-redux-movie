import HomePage from "./../containers/Hometemplate/HomePage";
import AboutPage from "./../containers/Hometemplate/AboutPage";
import ListMoviePage from "./../containers/Hometemplate/ListMoviePage";

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

];

export { routesHome };