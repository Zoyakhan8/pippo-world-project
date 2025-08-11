import '../layouts/GameLayout.css'
import { GameHeader } from "../GameHeader";
import { Outlet } from "react-router-dom";
export const GameLayout = () => {
  return (
    <div className="game-layout-container">
      <div className="layout-box">
        <GameHeader />
        <div className="game-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};