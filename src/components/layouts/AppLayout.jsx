import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet, useNavigation } from "react-router-dom";
import {Loading} from "../../mainapp/ux/Loading"
export const AppLayout = () => {
  const navigation=useNavigation();
  console.log(navigation);
  if(navigation.status==="loading")
    return <Loading />;
  return(
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}