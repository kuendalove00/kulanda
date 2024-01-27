import { axiosInstance } from "../../apis/axios";

async function add(data = {}) {
  try {
    const response = await axiosInstance.post("produto", data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function update(id, data = {}) {
  try {
    const response = await axiosInstance.put(`produto/${id}`, data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function getAll() {
  try {
    const response = await axiosInstance.get("produto");

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function remove(id) {
  try {
    const response = await axiosInstance.delete(`produto/${id}`);

    return response;
  } catch (error) {
    return error?.response;
  }
}

export const produto = { add, update, remove, getAll };
