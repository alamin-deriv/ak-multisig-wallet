import React from "react";
import { Table, Button, EmptyState } from "flexibull-meme";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "To",
    dataIndex: "to",
    key: "to",
  },
  {
    title: "Approvals",
    dataIndex: "approvals",
    key: "approval",
  },
  {
    title: "Sent",
    dataIndex: "sent",
    key: "sent",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
]; 

const TransferList = ({ transfers, approveTransfer }) => (
  <div>
    <h2>Transfers</h2>
    {transfers.length ? (
      <Table stripped cellPad="13px 20px">
        <table data-testid="data-table">
          <thead>
            <tr>
              {columns &&
                columns.map((elem, index) => {
                  return (
                    <th key={elem.key ? elem.key : index}>{elem.title}</th>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {transfers.map((transfer) => {

              return (
                <tr key={transfer.id}>
                  <td>{transfer.id}</td>
                  <td>{transfer.amount}</td>
                  <td>{transfer.to}</td>
                  <td>
                    {transfer.approvals}{" "}
                  </td>
                  <td>{transfer.sent ? "Yes" : "No"}</td>
                  <td>
                    <Button onClick={() => approveTransfer(transfer.id)}>
                      Approve
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Table>
    ) : (
      <EmptyState
        type="users"
        title="There are currently no transfers added."
      />
    )}
  </div>
);

export default TransferList;
