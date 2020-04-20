import React, { useState, useEffect } from "react";
import styles from "./CountryPicker.module.css";
import {NativeSelect , FormControl} from "@material-ui/core";
import {fetchCountries} from "../../api";

function CountryPicker({handleCountryChange}){
    const [fetchedCountries, setFetchCountries] = useState([]);

    useEffect(()=> {
        const fetchedAPI = async () =>{
            setFetchCountries(await fetchCountries());
        }
        fetchedAPI();
    },[setFetchCountries]);
    

    return(<FormControl className={styles.FormControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value = ''>Global</option>
        {fetchedCountries.map((country, i ) => <option key={i} value={country}>{country}
        </option>)}
        </NativeSelect>
        </FormControl>)
}
export default CountryPicker;