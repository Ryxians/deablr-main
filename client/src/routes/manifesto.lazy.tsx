import { createLazyFileRoute } from "@tanstack/react-router";
import { environment } from "../environment.ts";
import { WIP } from "../components/wip.tsx";

export const Route = createLazyFileRoute("/manifesto")({
  component: Manifest,
});

function Manifest() {
  if (environment.production) {
    return <WIP />;
  }
  return (
    <div className="p-2">
      <p className={"text-4xl"}>Manifesto of Jared Dean!</p>
      <p className={"text-sm"}>Manifesto • a public declaration of intent.</p>
      <ol className={"list-[upper-roman] list-inside pl-4"}>
        <li>
          <a href={"#household"}>Household</a>
          <ol className={"list-[lower-roman] list-inside pl-4"}>
            <li>test</li>
          </ol>
        </li>
        <li>
          <a href={"#world-view"}>World View</a>
        </li>
        <li>
          <a href={"#politics"}>Politics</a>
        </li>
      </ol>
    </div>
  );
}
