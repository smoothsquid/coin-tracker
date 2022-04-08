import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

interface History {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

export default function Chart({ coinId }: ChartProps) {
  const { data, isLoading } = useQuery<History[]>(
    ["coins", coinId, "ohlcv", "historical"],
    () => fetchCoinHistory(coinId)
  );

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>{data?.map((history) => history.high)}</div>
      )}
    </>
  );
}
