import './MainLayout.css'
import { MainHeader } from "./MainHeader"
import { BottomNav } from "./BottomNav"
import { Outlet, useNavigation } from "react-router-dom";
import {Loading} from "../../mainapp/ux/Loading"
export const MainLayout = () => {
  const navigation=useNavigation();
  console.log(navigation);
  return (
    <div className="main-layout-container">
      <div className="layout-box">
        <MainHeader />
        <div className="main-content">
            {navigation.state === "loading" ? <Loading /> : <Outlet />}
        </div>
        <BottomNav />
      </div>
    </div>
  );
};