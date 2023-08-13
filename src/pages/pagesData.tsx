import { routerType } from "../types/router.types"
import Home from "./home"
import Login from "./login"
import Register from "./register"
import ForgotPassword from "./forgotPassword"
import ResetPassword from "./resetPassword"
import VerifyEmail from "./verifyEmail"

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/login",
    element: <Login />,
    title: "Login",
  },
  {
    path: "/register",
    element: <Register />,
    title: "Register",
  },
  {
    path: "/forgot-password/",
    element: <ForgotPassword />,
    title: "Forgot Password",
  },
  {
    path: "/reset-password/:token",
    element: <ResetPassword />,
    title: "Reset Password",
  },
  {
    path: "/verify-email/:token",
    element: <VerifyEmail />,
    title: "Verify Email",
  },
]

export default pagesData
