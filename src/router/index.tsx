import { Route, Routes } from "react-router";
import DefaultLayout from "../layouts/defaultLayout";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="*" />
        </Route>
      </Routes>
    </>
  );
}
export default Router