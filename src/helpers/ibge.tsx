import axios from "axios";
const BASE_URL = "https://servicodados.ibge.gov.br/api/v1";

export async function getStates() {
  const states = await axios.get(`${BASE_URL}/localidades/estados`);
  const filtered = states.data.map((state: any) => {
    return state.sigla;
  });

  return filtered;
}

export async function getCitiesByState(state: string) {
  const cities = await axios.get(
    `${BASE_URL}/localidades/estados/${state}/municipios`
  );
  const filtered = cities.data.map((city: any) => {
    return { id: city.id, name: city.nome };
  });

  return filtered;
}
export {};
