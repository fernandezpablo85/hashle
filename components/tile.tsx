import clsx from "clsx";

export type TileType = "empty" | "ok" | "near" | "miss";

interface TitleProps {
  letter?: string;
  kind: TileType;
}

export default function Tile({ letter, kind }: TitleProps) {
  const defaults =
    "w-full inline-flex justify-center uppercase align-middle items-center text-[2rem] leading-[5rem] box-border border-2";
  const styles = clsx(defaults, {
    "text-white bg-[#6aaa64]": kind === "ok",
    "text-white bg-[#b59f3b]": kind === "near",
    "text-white bg-[#787c7e]": kind === "miss",
    "text-black bg-white": kind === "empty",
  });
  return <div className={styles}>{letter}</div>;
}
