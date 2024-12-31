import { createLazyFileRoute } from "@tanstack/react-router";
import { WIP } from "../components/wip.tsx";

export const Route = createLazyFileRoute("/faq")({
  component: RouteComponent,
});

function RouteComponent() {
  return <WIP />;
}
