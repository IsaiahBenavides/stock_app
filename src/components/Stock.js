import data from "../data";

export default function Stock() {
  return (
    <>
      {data.map((stock, i) => {
        if (`/stocks/:${stock.symbol}` === window.location.pathname) {
          return (
            <>
                <h3>{data[i].name}</h3>
              <table>
                <tr>
                  <th>Symbol</th>
                  <th>lastPrice</th>
                  <th>Change</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>Open</th>
                </tr>
                <tr>
                  <th>{data[i].symbol}</th>
                  <th>{data[i].lastPrice}</th>
                  <th>{data[i].change}</th>
                  <th>{data[i].high}</th>
                  <th>{data[i].low}</th>
                  <th>{data[i].open}</th>
                </tr>
              </table>
            </>
          );
        }
      })}
    </>
  );
}
