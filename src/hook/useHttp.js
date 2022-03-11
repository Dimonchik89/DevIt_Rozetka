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
    return { getGoods }
}
export default useHttp;