import { S } from "./styles";

const MOCK_ARRAY = Array(8).fill(null);
export function Skeleton() {
  return (
    <>
      {MOCK_ARRAY.map((_, i) => {
        return <S.Skeleton key={i} className="animate-pulse" />;
      })}
    </>
  );
}
