import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./publicRoute";
import privateRouter from "./privateRoute";



// create router 
const router = createBrowserRouter([...publicRouter, ...privateRouter ])




// export default router 
export default router; 









