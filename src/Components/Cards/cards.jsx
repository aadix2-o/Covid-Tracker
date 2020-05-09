import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}})=>{
	if(!confirmed)
		return 'loading..';
	return (
		<div className = 'container'>
			<Grid container spacing={3} justify='center'>
				<Grid item component={Card} xs={12} md={3} className={cx('card','infected')}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Infected</Typography>
						<Typography variant='h5'>
						<CountUp start={0} end={confirmed.value} duration={2} separator=","/> 
						</Typography>
						<Typography color = 'textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant ='body2'>number of active cases of Covid-19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx('card','recovered')}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Recovered</Typography>
						<Typography variant='h5'>
						<CountUp start={0} end={recovered.value} duration={2} separator=","/>
						</Typography>
						<Typography color = 'textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant ='body2'>number of recovered cases of Covid-19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card}xs={12} md={3} className={cx('card','deaths')}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Deaths</Typography>
						<Typography variant='h5'>
						<CountUp start={0} end={deaths.value} duration={1} separator=","/>
						</Typography>
						<Typography color = 'textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant ='body2'>number of death cases of Covid-19</Typography>
					</CardContent>
				</Grid>
			</Grid>	
		</div>
		);
}
export default Cards;