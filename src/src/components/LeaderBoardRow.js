import React from "react";

const LeaderBoardRow = ({id,displayName,daysLocked,harmony,highlighted}) => {
  return (
   <tr class={highlighted}>
                        <th scope="row">{id}</th>
                        <td>{displayName}</td>
                        <td>{daysLocked}</td>
                        <td>{harmony}</td>
                    </tr>
  );
};

export default LeaderBoardRow;
