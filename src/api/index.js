import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{
    let cUrl=url;
    if(country){
        cUrl=`${url}/countries/${country}`;
    }
    try{
        const {data}=await axios.get(cUrl);

       const tData={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate
        };

        return tData;
    }catch(e){
        console.log(e);
    }
}

export const fetchDailyData = async () =>{
    try{
        const {data}=await axios.get(`${url}/daily`);
        const modData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }));
        console.log(modData);
        return modData;
    }catch(e){
        console.log(e);
    }
}

export const countries = async () =>{
    try{
        const {data:{countries}}=await axios.get(`${url}/countries`);
        //console.log(response);
        return countries.map(country=>country.name);
    }catch(e){
        console.log(e);
    }
}