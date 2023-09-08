import {selector} from "recoil";
import axios from "axios";

const daftarWilayah = selector({
    key: "weather-data",
    get: async () => {
        let data;
        try {
            const response = await axios.get("https://fredo-ronan-api.cyclic.app/api/list-wilayah");
            data = response;
        } catch (e) {
            console.error("Gagal mengambil data cuaca:", e.message);
            throw e;
        }
        return data;
    },
});

const cuaca = async (wilayah) => {
    let response;

    try {
        const data = await axios.get(`https://fredo-ronan-api.cyclic.app/api/bmkg-cuaca-api?location=${wilayah}`);
        response = data;
    } catch (e) {
        console.log(e.message);
    }

    return response;
};


export {daftarWilayah, cuaca};