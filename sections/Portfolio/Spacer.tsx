export interface Props {
  height?: string;
}

export default function Spacer({ height }: Props) {
  return <div class="w-full" style={{ "height": `${height || "40"}px` }}></div>;
}
