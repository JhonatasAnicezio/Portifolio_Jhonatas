import { Nav } from "..";

export function NavPages() {
  return (
    <Nav.Field>
      <Nav.LinkNav href="/about" title="SOBRE" />
      <Nav.LinkNav href="/projects" title="PROJETOS" />
    </Nav.Field>
  );
}