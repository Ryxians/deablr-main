import { createRootRoute, Outlet } from "@tanstack/react-router";
import Layout from "../components/layout.tsx";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Layout>
          <Outlet />
        </Layout>
        <TanStackRouterDevtools />
      </>
    );
  },
});
