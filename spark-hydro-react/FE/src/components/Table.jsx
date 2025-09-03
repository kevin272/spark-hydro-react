import React from 'react';

function renderValue(value) {
  if (typeof value === 'object' && value !== null) {
    return JSON.stringify(value); // or customize rendering for arrays/objects
  }
  return value;
}

function Table({ data }) {
  return (
    <table>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            <td>{item.field}</td>
            <td>{renderValue(item.value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;