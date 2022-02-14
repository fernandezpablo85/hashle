import Tile, { TileType } from "./tile";

export default function Wordle(): JSX.Element {
  const rows = ["TODO ", "HASH-", "-LE  "];
  return (
    <div className="w-[500px] m-auto grid gap-[15px] grid-rows-5 ">
      {rows.map((text) => (
        <div className="grid gap-[5px] grid-cols-5">
          {text
            .split("")
            .map((letter) => Tile({ letter, kind: randomKind(letter) }))}
        </div>
      ))}
    </div>
  );
}

function randomKind(letter: string): TileType {
  const kinds: TileType[] = ["empty", "ok", "near", "miss"];
  const n = getRandomInt(0, 4);
  return kinds[n];
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
