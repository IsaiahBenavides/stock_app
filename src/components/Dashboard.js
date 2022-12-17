import { Link } from "react-router-dom";
import data from "../data";

// I want to go through all the data content and make a table row for every entry populated with table data for every piece of information (ie. name, price, etc)

export default function Dashboard() {
  return (
    <>
      <table id="dashboard">
        <tr id="dashHeader">
          <th id="dashHeaderName">Company Name</th>
          <th id="dashHeaderPrice">Price</th>
          <th id="dashHeaderChange">Change</th>
        </tr>
        {data.map((stock, i) => {
            const { name, lastPrice, change, symbol} = stock
            return(
                <tr className="stockData">
                    <td className="stockName"> <Link to={`/stocks/:${symbol}`}> {name} </Link></td>
                    <td className="stockPrice"> {lastPrice} </td>
                    <td className="stockChange"> {change} </td>
                </tr>
            )
        })}
      </table>
    </>
  );
}
