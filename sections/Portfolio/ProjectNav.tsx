import CurrentPage from "$store/islands/CurrentPage.tsx";

export interface Props {
  pages: string[];
}

export default function ProjectNav({
  pages,
}: Props) {
  return <CurrentPage pages={pages} />;
}
