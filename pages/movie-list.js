import GlobalNav from "../components/GlobalNav";
import Head from "../components/Head";

export default function MovieList() {
  return (
    <main
      style={{
        maxWidth: "86vw",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 30,
      }}
    >
      <Head />
      <GlobalNav />
    </main>
  );
}
