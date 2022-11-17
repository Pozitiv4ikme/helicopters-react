import axios from "axios";
import { Console } from "console";
import { HelicopterProps } from "../types";

const http = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export const getHelicopters = async (name?: string) => {
  const response = await http.get(`helicopters?name=${name ? name : ""}`);
  return response.data;
};

export const getHelicopterById = async (id: string) => {
  const response = await http.get(`/helicopters/${id}`);
  return response.data;
};
