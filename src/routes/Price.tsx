import styled from "styled-components";
import { PriceData } from "./Coin";

const Overview = styled.div`
  background-color: ${({ theme }) => theme.cardBgColor};
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewRow = styled.div`
  display: flex;

  justify-content: space-between;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

interface PriceProps {
  priceData?: PriceData;
}

export default function Price({ priceData }: PriceProps) {
  return (
    <>
      <Overview>
        <OverviewRow style={{ marginBottom: "20px" }}>
          <OverviewItem>
            <span>First Date:</span>
            <span>
              {new Date(
                Date.parse(priceData?.first_data_at ?? "")
              ).toUTCString()}
            </span>
          </OverviewItem>
          <OverviewItem>
            <span>Last Updated:</span>
            <span>
              {new Date(
                Date.parse(priceData?.last_updated ?? "")
              ).toUTCString()}
            </span>
          </OverviewItem>
        </OverviewRow>
        <OverviewRow style={{ marginBottom: "20px" }}>
          <OverviewItem>
            <span>ATH Date:</span>
            <span>
              {new Date(
                Date.parse(priceData?.quotes.USD.ath_date ?? "")
              ).toUTCString()}
            </span>
          </OverviewItem>
          <OverviewItem>
            <span>ATH Price:</span>
            <span>${priceData?.quotes.USD.ath_price}</span>
          </OverviewItem>
        </OverviewRow>
        <OverviewRow>
          <OverviewItem>
            <span>Market Cap:</span>
            <span>{priceData?.quotes.USD.market_cap.toLocaleString()}</span>
          </OverviewItem>
          <OverviewItem>
            <span>Market Cap Change 24h:</span>
            <span>{priceData?.quotes.USD.market_cap_change_24h}</span>
          </OverviewItem>
        </OverviewRow>
      </Overview>
    </>
  );
}
