import {useRecoilValue} from "recoil";
import {cuaca, daftarWilayah} from "../../../Store/index.jsx";
import {Item} from "../../Utils.jsx";
import {FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";

const Weather = () => {
    const arrayWilayah = useRecoilValue(daftarWilayah);

    const [dataWilayah, setDataWilayah] = useState();
    const [wilayahTerpilih, setWilayahTerpilih] = useState("");
    const [dataCuaca, setDataCuaca] = useState([]);

    const handleChangeWilayah = (e, type) => {
        setWilayahTerpilih({...wilayahTerpilih, [type]: e.target.value});
    };

    useEffect(() => {
        setDataWilayah(arrayWilayah?.data?.message);
    }, [arrayWilayah]);

    useEffect(() => {
        const fetchDataAndSetData = async () => {
            if (wilayahTerpilih) {
                let data = await cuaca(wilayahTerpilih.wilayah);
                setDataCuaca(data?.data?.message);
                setWilayahTerpilih({...wilayahTerpilih, area: ""});
            }
        };
        fetchDataAndSetData();

    }, [wilayahTerpilih.wilayah]);

    return (<>
        <Stack spacing={2}>
            <Item sx={{height: "550px"}}>
                <Typography sx={{textAlign: "left", fontWeight: "bold", fontSize: "25px", marginBottom: "2%"}}>Cuaca
                    Ngab</Typography>
                <Typography sx={{textAlign: "left", fontWeight: "300", fontSize: "15px", marginBottom: "2%"}}>Pilih
                    Provinsi</Typography>
                <Grid container item>
                    <Grid item xs={3}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-autowidth-label">Wilayah</InputLabel>
                            <Select
                                labelId="demo-wilayah"
                                id="demo-wilayah-id"
                                value={wilayahTerpilih.wilayah}
                                label="Wilayah"
                                onChange={(e) => {handleChangeWilayah(e, "wilayah");}}
                                sx={
                                    wilayahTerpilih.wilayah ? {background: "#adcbe1", width: "300px"} : {background: "#FFFFFF", width: "300px"}
                                }
                            >
                                {dataWilayah?.map((name) => (<MenuItem
                                    key={name}
                                    value={name}
                                >
                                    {name}
                                </MenuItem>))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth >
                            <InputLabel id="demo-simple-select-autowidth-label">Area</InputLabel>
                            <Select
                                labelId="demo-wilayah"
                                id="demo-wilayah-id"
                                value={wilayahTerpilih.area}
                                label="Wilayah"
                                onChange={(e) => {handleChangeWilayah(e, "area");}}
                                sx={
                                    wilayahTerpilih.area ? {background: "#adcbe1", width: "300px"} : {background: "#FFFFFF", width: "300px"}
                                }
                            >
                                {dataCuaca?.map((name, index) => (
                                    <MenuItem
                                        key={index}
                                        value={name.area}
                                    >
                                        {name.area}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Item>
        </Stack>
    </>);
};

export default Weather;