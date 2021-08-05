import React, {useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {countries} from '../../api';

const CountryPicker = (props) =>{
    const [fetchedCountries, setFetchedCountries]=useState([]);

    useEffect(()=>{
        const fetchCountries = async () =>{
            setFetchedCountries(await countries());
        }

        fetchCountries();
        
    },[setFetchedCountries]);
    //console.log(fetchedCountries);

    return(
        <div className={styles.container}>
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>props.method(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country)=><option key={country} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        </div>

    );
}

export default CountryPicker;