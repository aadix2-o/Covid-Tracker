import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';

import styles from './countrypicker.module.css';
import {fetchCountries} from '../../api';
const CountryPicker=({handleCountryChange})=>
{
	const [fetchedCountries,setFetchedCountries] = useState([]);

	useEffect(()=>{
		const fetchedAPI = async()=>{
			setFetchedCountries(await fetchCountries());
		}

		fetchedAPI();
	},[]);
	
	return (
		<FormControl className={'formControl'}>
		<NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
			<option value=''>Global</option>
			{fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
		</NativeSelect>
		</FormControl>	
		)
}
export default CountryPicker;