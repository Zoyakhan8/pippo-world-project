import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { contactData } from "./pages/ux/ContactFormAction";
import { AppLayout } from "./components/layouts/AppLayout";
import { ErrorPage } from "./pages/ux/ErrorPage";
import { MainLayout } from "./components/layouts/MainLayout";
import { HomeMain } from "./mainapp/ux/HomeMain";
import { HabitTracker } from "./mainapp/ux/HabitTracker";
import { Quotes } from "./mainapp/ux/Quotes";
import { Games } from "./mainapp/ux/Games";
import { Profile } from "./mainapp/ux/Profile";
import { GetAPI } from "./api/GetAPI";
import { Loading } from "./mainapp/ux/Loading";
import { TicTacToe } from "./mainapp/games/ux/TicTacToe";
import { CatchTreats } from "./mainapp/games/ux/CatchTreats";
import { GameLayout } from "./components/layouts/GameLayout";
export const App = () => {
  const [petName, setPetName] = useState("");
  const [catMood, setCatMood] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact />, action: contactData, },
      ],
    },
    {
      path: "/pippo",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "home", element: <HomeMain petName={petName} catMood={catMood} />, },
        { path: "habit-tracker", element: <HabitTracker petName={petName} catMood={catMood} setCatMood={setCatMood} />, },
        { path: "quotes", element: <Quotes />, loader: GetAPI, HydrateFallback: Loading, },
        { path: "games", element: <Games />, },
        { path: "profile", element: <Profile petName={petName} setPetName={setPetName} /> },
      ],
    },
    {
      path: "/pippo/games",
      element: <GameLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "tic-tac-toe", element: <TicTacToe />, },
        { path: "catch-the-treats", element: <CatchTreats />, },
      ],
    },
  ],
  {
    basename:"/pippo-world-project"
  }
);

  return <RouterProvider router={router} />;
};