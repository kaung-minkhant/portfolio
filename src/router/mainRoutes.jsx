import { CommingSoonComponent } from "../components/commingsoon/commingsoon.comp";
import { ErrorComponent } from "../components/error/error.comp";
import { NotFoundComponent } from "../components/notfound/notfound.comp";
import { TestsComponent } from "../components/tests/tests.comp";
import { ValentineComponent } from "../components/valentine/valentine.comp";
import { MainLayout } from "../layouts/main/main.layout";
import { LandingView } from "../views/landing/landing.view";
// import  EditorView  from 'portfolioBlog/blogEditorView'
// import Sample from 'portfolioBlog/sample'

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
    // {
    //   path: 'edit',
    //   element: <EditorView />
    // },
    {
      path: '/valentine',
      element: <ValentineComponent />
    },
    {
      path: "*",
      element: <NotFoundComponent />
    },
    
  ]
}