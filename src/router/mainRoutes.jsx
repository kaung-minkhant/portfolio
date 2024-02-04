import { CommingSoonComponent } from "../components/commingsoon/commingsoon.comp";
import { ErrorComponent } from "../components/error/error.comp";
import { NotFoundComponent } from "../components/notfound/notfound.comp";
import { TestsComponent } from "../components/tests/tests.comp";
import { MainLayout } from "../layouts/main/main.layout";
import { LandingView } from "../views/landing/landing.view";


export const mainRoutes = {
  path: "/",
  element: <MainLayout />,
  errorElement: <ErrorComponent />,
  children: [
    {
      index: true,
      element: <LandingView />,
    },
    {
      path: "works",
      element: <CommingSoonComponent />
    },
    {
      path: "blogs",
      element: <CommingSoonComponent />
    },
    {
      path: "contact",
      element: <CommingSoonComponent />
    },
    {
      path: "tests",
      element: <TestsComponent />
    },
    {
      path: "*",
      element: <NotFoundComponent />
    }
  ]
}