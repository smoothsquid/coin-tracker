import ApexCharts from "react-apexcharts";
import { useQuery } from "react-query";
import { useTheme } from "styled-components";
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

  const theme = useTheme();

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <ApexCharts
          options={{
            chart: {
              toolbar: { show: false },
              background: "transparent",
            },
            theme: {
              mode: "dark",
            },
            grid: {
              show: false,
            },
            yaxis: {
              labels: {
                show: false,
              },
            },
            xaxis: {
              type: "datetime",
              categories: data?.map((history) => history.time_close),
              labels: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            plotOptions: {
              candlestick: {
                colors: {
                  downward: theme.accentColor,
                  upward: "#30AADD",
                },
              },
            },
          }}
          series={[
            {
              name: "Price",
              data:
                data?.map((history) => ({
                  x: history.time_open,
                  y: [history.open, history.high, history.low, history.close],
                })) ?? [],
            },
          ]}
          type="candlestick"
        />
      )}
    </>
  );
}
