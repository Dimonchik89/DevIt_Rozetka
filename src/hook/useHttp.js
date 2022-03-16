import axios from "axios";

const useHttp = () => {
    const getGoods = async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch(e) {
            throw new Error(e)
        }
    }
    const putGood = async (url, body) => {
        try {
            const response = await axios.put(url, body);
            return response.data;
        } catch(e) {
            throw new Error(e)
        }
    }
    return { getGoods, putGood }
}
export default useHttp;