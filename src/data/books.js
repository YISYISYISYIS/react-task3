import axios from "axios";

const JSON_SERVER_HOST = "http://localhost:5000";

export const getData = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/data`);
    return response.data;
  } catch (error) {
    console.error(error);
    alert("JSON서버 불러오기 문제");
  }
};

export const postData = async (newData) => {
  try {
    const response = await axios.post(`${JSON_SERVER_HOST}/data`, newData);
    return response.data;
  } catch (error) {
    console.error(error);
    alert("JSON서버 등록문제");
  }
};

export const putData = async (updatedData) => {
  const { id, ...rest } = updatedData;
  try {
    const response = await axios.put(`${JSON_SERVER_HOST}/data/${id}`, rest);
    return response.data;
  } catch (error) {
    console.error(error);
    alert("JSON서버 수정문제");
  }
};

export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`${JSON_SERVER_HOST}/data/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    alert("JSON서버 삭제문제");
  }
};
