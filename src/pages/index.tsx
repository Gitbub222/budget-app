import * as React from "react";
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import BudgetOverview from "../components/budgetoverview";
import ExpenseTable from "../components/expensetable";
import { EXPENSE, EXPENSE_FIELD } from "../types/types";

const IndexPage: React.FC<PageProps> = () => {
  const [expenses, setExpenses] = useState<EXPENSE[]>([
    { description: 'Weekly groceries', date: '2024-07-12', amount: 53.29 },
    { description: 'Dairy products', date: '2024-07-12', amount: 24.87 },
    { description: 'Bread and bakery items', date: '2024-07-07', amount: 36.52 },
    { description: 'Pet food', date: '2024-07-07', amount: 41.18 },
    { description: 'Snacks and drinks', date: '2024-07-08', amount: 62.03 },
])

const handleChange = (index: number, field: string, value: string) => {
    const tempExpenses = [...expenses];
    (tempExpenses[index] as any)[field] = field === EXPENSE_FIELD.AMOUNT ? parseFloat(value) : value;
    setExpenses(tempExpenses)

}


const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  return (
    <main style={{marginBlock: "50px"}}>
      <BudgetOverview totalExpenses ={totalExpenses} />
      <ExpenseTable setExpenses={setExpenses} expenses={expenses} handleChange={handleChange} totalExpenses={totalExpenses}/>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
