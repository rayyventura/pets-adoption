import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const baseAPI = axios.create({
  baseURL: BASE_URL,
});
function createConfig(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

interface User {
  name: string;
  email: string;
  password: string;
  whatsappNumber: string;
}

async function createUser(user: User) {
  await baseAPI.post("/users/signup", user);
}

async function signin(data: Omit<Omit<User, "whatsappNumber">, "name">) {
  const token = await baseAPI.post("/users/signin", data);
  return token;
}
interface SharePet {
  token: string;
  data: any;
}
export interface PetData {
  id: number;
  name: string;
  species: string;
  sex: string;
  size: string;
  age: string;
  about: string;
  image: string;
  state: string;
  city: string;
}
async function sharePet({ token, data }: SharePet) {
  const config = createConfig(token);
  await baseAPI.post("pets/share", data, config);
}
async function getPets(page: number) {
  const pets = await baseAPI.get<PetData[]>(
    `pets?offset=${page ? page * 10 : 0}`
  );

  return pets;
}
async function getFilteredPets(token: string, page: number, filter: object) {
  const config = createConfig(token);
  const pets = await baseAPI.post(
    `pets/filter?offset=${page ? page * 10 : 0}`,
    { filter },
    config
  );

  return pets;
}
async function getUniquePet(token: string, id: any) {
  const config = createConfig(token);
  const pet = await baseAPI.get(`pets/${id}`, config);

  return pet;
}
export { createUser, sharePet, signin, getPets, getFilteredPets, getUniquePet };
