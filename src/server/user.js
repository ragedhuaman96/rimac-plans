import axios from "axios";

/**
 * Devuelve el user
 * @returns {object} objeto de usuario
 */
export async function getUserInfoService() {
    const { data: respuesta } = await axios.get('/user.json')
    return respuesta
}

/**
 * Devuelve el user
 * @returns {object} objeto de usuario
 */
export async function getPlansService() {
    const { data: respuesta } = await axios.get('/plans.json')
    return respuesta
}