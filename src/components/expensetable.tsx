import * as React from 'react';
import { useState } from "react";
import { EXPENSE, EXPENSE_FIELD } from '../types/types';
import { IsDue } from "../helpers/finance";

import '../styles/main.css';
import '../styles/expense-table.css'

import bin from '../images/bin.png';

const ExpenseTable: React.FC<{
    setExpenses: React.Dispatch<React.SetStateAction<EXPENSE[]>>;
    expenses: EXPENSE[];
    handleChange: (index: number, field: string, value: any) => void;
    totalExpenses: number;
}> = ({ setExpenses, expenses, handleChange, totalExpenses }) => {

    const minDate = new Date().toISOString().slice(0, 10)

    const handleDelete = (index: number) => {
        setExpenses(prevExpenses => prevExpenses.filter((_, i) => i !== index));
      };

    return (
        <div className="weekly-table">
            <button className='add-expense' onClick={() => {
                const temp = [...expenses]
                temp.push({ description: "", date: minDate, amount: 0 })
                setExpenses(temp)
            }}>ADD EXPENSE</button>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((expense, index) => (
                            <tr key={index}>
                                <td><input type="text" value={expense.description}
                                    onChange={(e) => handleChange(index, EXPENSE_FIELD.DESCRIPTION, e.target.value)} /></td>
                                <td><input type="date" value={expense.date} min={minDate}
                                    onChange={(e) => handleChange(index, EXPENSE_FIELD.DATE, e.target.value)} /></td>
                                <td><input type="number" value={expense.amount}
                                    onChange={(e) => handleChange(index, EXPENSE_FIELD.AMOUNT, e.target.value)} /></td>
                                <td onClick={() => {
                                    handleDelete(index)
                                }}><img src={bin} width={24} height={24} /></td>
                            </tr>
                        ))
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <th id="total" >Total</th>
                        <th></th>
                        <th></th>
                        <th style={{ textAlign: "center" }}>{totalExpenses.toFixed(2)}</th>
                    </tr>
                </tfoot>



            </table>
        </div>
    )
}

export default ExpenseTable;