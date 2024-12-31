import React, { PropsWithChildren } from "react";
import { Link } from "@tanstack/react-router";
import pennyImg from "../assets/penny.png";
import louieImg from "../assets/louie.png";
import winstonImg from "../assets/winston.png";
import roccoImg from "../assets/rocco.png";

const rng = Math.floor(Math.random() * 10);
const img =
  rng > 5 ? (rng > 8 ? pennyImg : louieImg) : rng < 3 ? roccoImg : winstonImg;

// TODO: Properties not known yet
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LayoutProps extends PropsWithChildren {}

/**
 * @description App Layout
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        {/*    ToolBar  */}
        <div className={"flex w-full"}>
          <img src={img} className={"w-16 h-16"} />
          <ul className={"flex justify-between w-full px-6 py-3"}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/inventory"}>Inventory</Link>
            </li>
            <li>
              <Link to={"/manifesto"}>Manifesto</Link>
            </li>
            <li>
              <Link to={"/calendar"}>Calendar</Link>
            </li>
            <li>
              <Link to={"/constitution"}>Constitution</Link>
            </li>
            <li>
              <Link to={"/faq"}>FaQ</Link>
            </li>
          </ul>
        </div>
        {/*    Sides    */}
        {/*    Backdrop */}
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
