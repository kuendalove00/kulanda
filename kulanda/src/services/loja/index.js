import { axiosInstance } from "../../apis/axios";

async function add(data = {}) {
  try {
    const response = await axiosInstance.post("loja", data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function update(id, data = {}) {
  try {
    const response = await axiosInstance.put(`loja/${id}`, data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function getAll() {
  try {
    const response = await axiosInstance.get("loja");

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function remove(id) {
  try {
    const response = await axiosInstance.delete(`loja/${id}`);

    return response;
  } catch (error) {
    return error?.response;
  }
}

export const loja = { add, update, remove, getAll };
