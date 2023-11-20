import { S } from "./styles";

const MOCK_ARRAY = Array(8).fill(null);
export function Skeleton() {
  return (
    <>
      {MOCK_ARRAY.map(() => {
        return (
          <S.Skeleton key={crypto.randomUUID()} className="animate-pulse" />
        );
      })}
    </>
  );
}
