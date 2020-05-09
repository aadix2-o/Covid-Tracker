import React , {useState ,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
const Chart=()=>{
	const [dailyData , setDailyData] = useState({});
	useEffect(()=>{
		const fetchAPI = async()=>{
			setDailyData(await fetchDailyData());
		}
		fetchAPI();
	});

	const lineChart = (
	dailyData.length ?
		(<Line 
		data = {
		{
			labels:"",
			datasets:[{},{}],
		}
		}
		/>):null
	);
}
export default Chart;