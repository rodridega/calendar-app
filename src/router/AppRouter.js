import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StartChecking } from "../components/actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StartChecking())
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CalendarScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="*" element={<CalendarScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
