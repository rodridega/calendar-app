import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StartChecking } from "../components/actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const { checking, uid } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(StartChecking());
  }, [dispatch]);

  if (checking) {
    return <h5>Espere...</h5>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo={"/"} loggedIn={!!uid}>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/login" loggedIn={!!uid}>
              <CalendarScreen />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
