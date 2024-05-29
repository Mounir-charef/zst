import {
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@mono/ui';
import { memo } from 'react';
import { z } from 'zod';
import recentTransactions from '../../../../lib/data/transaction/recent-transactions.json';
import { transactionSchema } from '../../../../validation/transaction-schema';

async function getRecentTransactions() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return z.array(transactionSchema).parse(recentTransactions);
}

const RecentTransactionsTable = async () => {
  const transactions = await getRecentTransactions();
  return (
    <CardContent className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.length === 0 ? (
            <TableRow>
              <TableCell colSpan={2} className="h-24 text-center">
                No transactions found.
              </TableCell>
            </TableRow>
          ) : (
            transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>
                  <div className="font-medium">{transaction.customer.name}</div>
                  <div className="text-muted-foreground text-sm">
                    {transaction.customer.email}
                  </div>
                </TableCell>

                <TableCell className="text-right">
                  ${transaction.amount}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </CardContent>
  );
};

export default memo(RecentTransactionsTable);
