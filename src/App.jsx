import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";

import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { isLoading, setUser } from "./redux/feature/auth/authSlice";
import router from "./router/router";

function App() {
  const dispatch = useDispatch();
  const token = Cookies.get("accessToken");

  const data = token ? jwtDecode(token) : null;
  if (data) {
    dispatch(setUser(data));
  } else {
    dispatch(isLoading());
  }
  return (
    <Suspense fallback={"Loading..."}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
}

export default App;
