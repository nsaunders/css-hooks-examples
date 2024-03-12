import { BasicTextField } from "./text-field";

export function App() {
  return (
    <div
      style={{
        display: "inline-block",
        margin: "2rem",
        padding: "2rem",
        background: "#1c1d1c",
        borderRadius: "0.5rem",
      }}
    >
      <BasicTextField label="Favorite fruit" />
    </div>
  );
}
