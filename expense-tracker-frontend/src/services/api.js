import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080/api/expenses" });

export const getExpenses = () => API.get("/");
export const addExpense = (expense) => API.post("/", expense);
export const updateExpense = (id, expense) => API.put(`/${id}`, expense);
export const deleteExpense = (id) => API.delete(`/${id}`);
