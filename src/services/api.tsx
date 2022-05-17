import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
function createConfig(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

interface User {
  email: string;
  password: string;
  whatsappNumber: string;
}

export async function createUser(user: User) {
  await axios.post(`${BASE_URL}/users/signup`, user);
}

export async function signin(data: Omit<User, "whatsappNumber">) {
  const token = await axios.post(`${BASE_URL}/users/signin`, data);
  return token;
}

export async function getTestsByDisciplines(auth: string) {
  const config = createConfig(auth);
  const token = await axios.get(`${BASE_URL}/tests/disciplines`, config);
  return token;
}
export async function getTestsByTeacher(auth: string) {
  const config = createConfig(auth);
  const token = await axios.get(`${BASE_URL}/tests/teachers`, config);
  return token;
}
export async function updateViews(auth: string, id: number) {
  const config = createConfig(auth);
  await axios.patch(`${BASE_URL}/tests/${id}/views`, {}, config);
}
export async function getCategories(auth: string) {
  const config = createConfig(auth);
  const data = await axios.get(`${BASE_URL}/categories`, config);
  return data.data;
}
export async function getTeachers(auth: string) {
  const config = createConfig(auth);
  const data = await axios.get(`${BASE_URL}/teachers`, config);
  return data.data;
}
export async function getDisciplines(auth: string) {
  const config = createConfig(auth);
  const data = await axios.get(`${BASE_URL}/disciplines`, config);
  return data.data;
}
export async function getTeachersDisicplines(auth: string) {
  const config = createConfig(auth);
  const data = await axios.get(`${BASE_URL}/teachersDisciplines`, config);
  return data.data;
}
export async function insertTest(auth: string, test: any) {
  const config = createConfig(auth);
  await axios.post(`${BASE_URL}/tests`, test, config);
}
export {};
