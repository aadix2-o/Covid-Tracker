import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData=async (country)=>
{
	let changableURL = url;
	console.log(country);
	if(country)
	{
		changableURL = 'https://covid19.mathdro.id/api/countries/'+country;
	}
	console.log(changableURL);
	try{
		const {data} = await axios.get(changableURL);
		const modifiedData = {
			confirmed : data.confirmed,
			recovered : data.recovered,
			deaths : data.deaths,
			lastUpdate : data.lastUpdate,
		}
		return modifiedData;
	} 
	catch(error){
			return error;
	}
};
export const fetchDailyData = async ()=>
{
	try{
		const {data} =await axios.get('https://covid19.mathdro.id/api/daily');
		console.log(data[0]);
		console.log(data[1]);
		const modifiedData = data.map((dailyData)=>({
			confirmed:dailyData.confirmed.total,
			deaths:dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
		return modifiedData;
	}
	catch(error)
	{
			return error;
	}
};
export const fetchCountries = async()=>{
	try{
		const {data:{countries}}= await axios.get('https://covid19.mathdro.id/api/countries');
		return countries.map((country)=>country.name);

	}
	catch(error)
	{
		console.log(error);
	}
}