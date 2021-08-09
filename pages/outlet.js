import GlobalNav from "../styles/GlobalNav";

export default function Outlet() {
  return (
    <main
      style={{
        maxWidth: "86vw",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 30,
      }}
    >
      <GlobalNav />
    </main>
  );
}
