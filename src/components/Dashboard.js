import { Link } from "react-router-dom";
import data from "../data";

// I want to go through all the data content and make a table row for every entry populated with table data for every piece of information (ie. name, price, etc)

export default function Dashboard() {
  return (
    <>
      <table>
        <tr>
          <th>Company Name</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
        {data.map((stock) => {
            const { name, lastPrice, change, symbol} = stock
            return(
                <tr>
                    <td> <Link to={`/stocks/:${symbol}`}> {name} </Link></td>
                    <td> {lastPrice} </td>
                    <td> {change} </td>
                </tr>
            )
        })}
      </table>
    </>
  );
}
