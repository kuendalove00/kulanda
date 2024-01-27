import { axiosInstance } from "../../apis/axios";

async function add(data = {}) {
  try {
    const response = await axiosInstance.post("class", data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function update(data = {}) {
  try {
    const response = await axiosInstance.put("class", data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function getAll() {
  try {
    const response = await axiosInstance.get("class/all");

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function remove(id) {
  try {
    const response = await axiosInstance.delete(`class/${id}`);

    return response;
  } catch (error) {
    return error?.response;
  }
}

export const classs = { add, update, remove, getAll };
