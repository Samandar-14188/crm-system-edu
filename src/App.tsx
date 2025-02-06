import Auth from "./auth"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ClassSchedule from "./page/ClassSchedule"
import Debtors from "./page/Debtors"
import Employes from "./page/Employees"
import Groups from "./page/Groups"
import Leads from "./page/Leads"
import Payments from "./page/Payments"
import Students from "./page/Students"
Students
function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<Leads />
    },
    {
      path:"/payments",
      element:<Payments />
    },
    {
      path:"/groups",
      element:<Groups />
    },
    {
      path:"/employes",
      element:<Employes />
    },
    {
      path:"/debtors",
      element:<Debtors />
    },
    {
      path:"/lassSchedule",
      element:<ClassSchedule />
    },
    {
      path:"/students",
      element:<Students />
    },
    {
      path:"/auth",
      element:<Auth />
    }
  ])
  

  return (
   <RouterProvider router={routes} />
  )
}

export default App
