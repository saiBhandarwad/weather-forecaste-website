/* weather section start */
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79c6b4dd17msh99173bc8048d9b6p1aba9bjsn473741998611',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
function getWeather(coordinates,town,taluka,districtApi,stateApi,countryApi){
    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q='+coordinates+"&days=3", options)
	.then(response => response.json())
	.then(response =>{
        console.log(response)
        const cityname=document.getElementById('cityname')
        cityname.innerHTML=taluka;
        townDistrict.innerHTML=town;
        province.innerHTML=districtApi;
        state.innerHTML=stateApi;
        country.innerHTML=countryApi;
        // state.innerHTML=response.location.region;
        // cityname.innerHTML=response.location.name;
        // country.innerHTML=response.location.country;
        country.innerHTML=countryApi

        localDate.innerHTML=new Date(response.location.localtime_epoch*1000).toDateString();

        localTime.innerHTML=new Date(response.location.localtime_epoch*1000).toLocaleTimeString();

        conditionIcon.innerHTML=`<img src="${response.current.condition.icon}" alt="">`

        temperature.innerHTML=response.current.temp_c+"&deg;C"

        humidity.innerHTML='<ion-icon name="water-outline"></ion-icon>'+"&nbsp;"+"Humidity : "+response.current.humidity+"%"
        cloud.innerHTML='<ion-icon name="partly-sunny-outline"></ion-icon>'+"&nbsp;"+"cloud : "+response.current.cloud
        feels_like.innerHTML='<ion-icon name="thermometer-outline"></ion-icon>'+"&nbsp;Real Feel : "+response.current.feelslike_c+"&deg;C"

        conditionText.innerHTML=response.current.condition.text
        timeZone.innerHTML="Time Zone : "+response.location.tz_id;

        maxTemp.innerHTML="Max Temperature : "+response.forecast.forecastday[0].day.maxtemp_c+"&deg;C";
        minTemp.innerHTML="Min Temperature : "+response.forecast.forecastday[0].day.mintemp_c+"&deg;C";

        wind_deg.innerHTML='<ion-icon name="finger-print-outline"></ion-icon>'+"&nbsp;Wind Degree : "+response.current.wind_degree
        wind_speed.innerHTML='<ion-icon name="finger-print-outline"></ion-icon>'+"&nbsp;Wind Speed : "+response.current.wind_kph+" km/hr"
        wind_dir.innerHTML='<ion-icon name="logo-soundcloud"></ion-icon>'+"&nbsp;Wind Direction : "+response.current.wind_dir

        sunrise.innerHTML="Sunrise :"+response.forecast.forecastday[0].astro.sunrise
        sunset.innerHTML="Sunset :"+response.forecast.forecastday[0].astro.sunset
        moonrise.innerHTML="Moonrise :"+response.forecast.forecastday[0].astro.moonrise
        moonset.innerHTML="Moonset :"+response.forecast.forecastday[0].astro.moonset

        predictionIcon.innerHTML=`<img src="${response.forecast.forecastday[0].day.condition.icon}" alt="">`
        predictionText.innerHTML=response.forecast.forecastday[0].day.condition.text

        chanceOfRain.innerHTML="Chances Of Rain : "+response.forecast.forecastday[0].day.daily_chance_of_rain+"%"
        if(response.forecast.forecastday[0].day.daily_will_it_rain){
            willRain.innerHTML="will it rain today : Yes"
        }else{
            willRain.innerHTML="will it rain today : No"
        }

/* hourly forecast */

//hour_zero
        hour_zero_time.innerHTML=new Date(response.forecast.forecastday[0].hour[0].time_epoch*1000).toLocaleTimeString()     
        
        hour_zero_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[0].condition.icon}" alt="">`
        
        hour_zero_temp.innerHTML=response.forecast.forecastday[0].hour[0].temp_c+"&deg;C"
        hour_zero_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[0].condition.text
        chancesOfRain_zero.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[0].chance_of_rain+"%"

//hour_one

        hour_one_time.innerHTML=new Date(response.forecast.forecastday[0].hour[1].time_epoch*1000).toLocaleTimeString()     
                
        hour_one_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[1].condition.icon}" alt="">`

        hour_one_temp.innerHTML=response.forecast.forecastday[0].hour[1].temp_c+"&deg;C"
        hour_one_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[1].condition.text
        chancesOfRain_one.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[1].chance_of_rain+"%"
//hour_two
        hour_two_time.innerHTML=new Date(response.forecast.forecastday[0].hour[2].time_epoch*1000).toLocaleTimeString()     
                
        hour_two_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[2].condition.icon}" alt="">`

        hour_two_temp.innerHTML=response.forecast.forecastday[0].hour[2].temp_c+"&deg;C"
        hour_two_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[2].condition.text
        chancesOfRain_two.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[2].chance_of_rain+"%"
//hour_three
        hour_three_time.innerHTML=new Date(response.forecast.forecastday[0].hour[3].time_epoch*1000).toLocaleTimeString()     
                
        hour_three_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[3].condition.icon}" alt="">`

        hour_three_temp.innerHTML=response.forecast.forecastday[0].hour[3].temp_c+"&deg;C"
        hour_three_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[3].condition.text
        chancesOfRain_three.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[3].chance_of_rain+"%"
//hour_four
        hour_four_time.innerHTML=new Date(response.forecast.forecastday[0].hour[4].time_epoch*1000).toLocaleTimeString()     
                
        hour_four_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[4].condition.icon}" alt="">`

        hour_four_temp.innerHTML=response.forecast.forecastday[0].hour[4].temp_c+"&deg;C"
        hour_four_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[4].condition.text
        chancesOfRain_four.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[4].chance_of_rain+"%"
//hour_five
        hour_five_time.innerHTML=new Date(response.forecast.forecastday[0].hour[5].time_epoch*1000).toLocaleTimeString()     
                
        hour_five_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[5].condition.icon}" alt="">`

        hour_five_temp.innerHTML=response.forecast.forecastday[0].hour[5].temp_c+"&deg;C"
        hour_five_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[5].condition.text
        chancesOfRain_five.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[5].chance_of_rain+"%"
//hour_six
        hour_six_time.innerHTML=new Date(response.forecast.forecastday[0].hour[6].time_epoch*1000).toLocaleTimeString()     
                
        hour_six_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[6].condition.icon}" alt="">`

        hour_six_temp.innerHTML=response.forecast.forecastday[0].hour[6].temp_c+"&deg;C"
        hour_six_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[6].condition.text
        chancesOfRain_six.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[6].chance_of_rain+"%"
//hour_seven
        hour_seven_time.innerHTML=new Date(response.forecast.forecastday[0].hour[7].time_epoch*1000).toLocaleTimeString()     
                
        hour_seven_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[7].condition.icon}" alt="">`

        hour_seven_temp.innerHTML=response.forecast.forecastday[0].hour[7].temp_c+"&deg;C"
        hour_seven_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[7].condition.text
        chancesOfRain_seven.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[7].chance_of_rain+"%"
//hour_eight
        hour_eight_time.innerHTML=new Date(response.forecast.forecastday[0].hour[8].time_epoch*1000).toLocaleTimeString()     
                
        hour_eight_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[8].condition.icon}" alt="">`

        hour_eight_temp.innerHTML=response.forecast.forecastday[0].hour[8].temp_c+"&deg;C"
        hour_eight_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[8].condition.text
        chancesOfRain_eight.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[8].chance_of_rain+"%"
//hour_nine
        hour_nine_time.innerHTML=new Date(response.forecast.forecastday[0].hour[9].time_epoch*1000).toLocaleTimeString()     
                
        hour_nine_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[9].condition.icon}" alt="">`

        hour_nine_temp.innerHTML=response.forecast.forecastday[0].hour[9].temp_c+"&deg;C"
        hour_nine_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[9].condition.text
        chancesOfRain_nine.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[9].chance_of_rain+"%"
//hour_ten
        hour_ten_time.innerHTML=new Date(response.forecast.forecastday[0].hour[10].time_epoch*1000).toLocaleTimeString()     
                
        hour_ten_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[10].condition.icon}" alt="">`

        hour_ten_temp.innerHTML=response.forecast.forecastday[0].hour[10].temp_c+"&deg;C"
        hour_ten_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[10].condition.text
        chancesOfRain_ten.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[10].chance_of_rain+"%"
//hour_eleven
        hour_eleven_time.innerHTML=new Date(response.forecast.forecastday[0].hour[11].time_epoch*1000).toLocaleTimeString()     
                
        hour_eleven_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[11].condition.icon}" alt="">`

        hour_eleven_temp.innerHTML=response.forecast.forecastday[0].hour[11].temp_c+"&deg;C"
        hour_eleven_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[11].condition.text
        chancesOfRain_eleven.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[11].chance_of_rain+"%"
//hour_twelve
        hour_twelve_time.innerHTML=new Date(response.forecast.forecastday[0].hour[12].time_epoch*1000).toLocaleTimeString()     
                
        hour_twelve_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[12].condition.icon}" alt="">`

        hour_twelve_temp.innerHTML=response.forecast.forecastday[0].hour[12].temp_c+"&deg;C"
        hour_twelve_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[12].condition.text
        chancesOfRain_twelve.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[12].chance_of_rain+"%"
//hour_thirteen
        hour_thirteen_time.innerHTML=new Date(response.forecast.forecastday[0].hour[13].time_epoch*1000).toLocaleTimeString()     
                
        hour_thirteen_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[13].condition.icon}" alt="">`

        hour_thirteen_temp.innerHTML=response.forecast.forecastday[0].hour[13].temp_c+"&deg;C"
        hour_thirteen_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[13].condition.text
        chancesOfRain_thirteen.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[13].chance_of_rain+"%"
//hour_fourteen
        hour_fourteen_time.innerHTML=new Date(response.forecast.forecastday[0].hour[14].time_epoch*1000).toLocaleTimeString()     
                
        hour_fourteen_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[14].condition.icon}" alt="">`

        hour_fourteen_temp.innerHTML=response.forecast.forecastday[0].hour[14].temp_c+"&deg;C"
        hour_fourteen_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[14].condition.text
        chancesOfRain_fourteen.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[14].chance_of_rain+"%"
//hour_fifteen
        hour_fifteen_time.innerHTML=new Date(response.forecast.forecastday[0].hour[15].time_epoch*1000).toLocaleTimeString()     
                
        hour_fifteen_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[15].condition.icon}" alt="">`

        hour_fifteen_temp.innerHTML=response.forecast.forecastday[0].hour[15].temp_c+"&deg;C"
        hour_fifteen_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[15].condition.text
        chancesOfRain_fifteen.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[15].chance_of_rain+"%"
//hour_sixteen
        hour_sixteen_time.innerHTML=new Date(response.forecast.forecastday[0].hour[16].time_epoch*1000).toLocaleTimeString()     
                
        hour_sixteen_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[16].condition.icon}" alt="">`

        hour_sixteen_temp.innerHTML=response.forecast.forecastday[0].hour[16].temp_c+"&deg;C"
        hour_sixteen_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[16].condition.text
        chancesOfRain_sixteen.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[16].chance_of_rain+"%"
//hour_seventeen
        hour_seventeen_time.innerHTML=new Date(response.forecast.forecastday[0].hour[17].time_epoch*1000).toLocaleTimeString()     
                
        hour_seventeen_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[17].condition.icon}" alt="">`

        hour_seventeen_temp.innerHTML=response.forecast.forecastday[0].hour[17].temp_c+"&deg;C"
        hour_seventeen_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[17].condition.text
        chancesOfRain_seventeen.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[17].chance_of_rain+"%"
//hour_eighteen
        hour_eighteen_time.innerHTML=new Date(response.forecast.forecastday[0].hour[18].time_epoch*1000).toLocaleTimeString()     
                
        hour_eighteen_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[18].condition.icon}" alt="">`

        hour_eighteen_temp.innerHTML=response.forecast.forecastday[0].hour[18].temp_c+"&deg;C"
        hour_eighteen_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[18].condition.text
        chancesOfRain_eighteen.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[18].chance_of_rain+"%"
//hour_nineteen
        hour_nineteen_time.innerHTML=new Date(response.forecast.forecastday[0].hour[19].time_epoch*1000).toLocaleTimeString()     
                
        hour_nineteen_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[19].condition.icon}" alt="">`

        hour_nineteen_temp.innerHTML=response.forecast.forecastday[0].hour[19].temp_c+"&deg;C"
        hour_nineteen_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[19].condition.text
        chancesOfRain_nineteen.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[19].chance_of_rain+"%"

//hour_twenty
        hour_twenty_time.innerHTML=new Date(response.forecast.forecastday[0].hour[20].time_epoch*1000).toLocaleTimeString()     
                
        hour_twenty_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[20].condition.icon}" alt="">`

        hour_twenty_temp.innerHTML=response.forecast.forecastday[0].hour[20].temp_c+"&deg;C"
        hour_twenty_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[20].condition.text
        chancesOfRain_twenty.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[20].chance_of_rain+"%"
//hour_twentyone
        hour_twentyone_time.innerHTML=new Date(response.forecast.forecastday[0].hour[21].time_epoch*1000).toLocaleTimeString()     
                
        hour_twentyone_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[21].condition.icon}" alt="">`

        hour_twentyone_temp.innerHTML=response.forecast.forecastday[0].hour[21].temp_c+"&deg;C"
        hour_twentyone_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[21].condition.text
        chancesOfRain_twentyone.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[21].chance_of_rain+"%"
//hour_twentytwo
        hour_twentytwo_time.innerHTML=new Date(response.forecast.forecastday[0].hour[22].time_epoch*1000).toLocaleTimeString()     
                
        hour_twentytwo_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[22].condition.icon}" alt="">`

        hour_twentytwo_temp.innerHTML=response.forecast.forecastday[0].hour[22].temp_c+"&deg;C"
        hour_twentytwo_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[22].condition.text
        chancesOfRain_twentytwo.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[22].chance_of_rain+"%"
//hour_twentythree
        hour_twentythree_time.innerHTML=new Date(response.forecast.forecastday[0].hour[23].time_epoch*1000).toLocaleTimeString()     
                
        hour_twentythree_icon.innerHTML=`<img src="${response.forecast.forecastday[0].hour[23].condition.icon}" alt="">`

        hour_twentythree_temp.innerHTML=response.forecast.forecastday[0].hour[23].temp_c+"&deg;C"
        hour_twentythree_text.innerHTML="condition : "+response.forecast.forecastday[0].hour[23].condition.text
        chancesOfRain_twentythree.innerHTML="chances Of Rain : "+response.forecast.forecastday[0].hour[23].chance_of_rain+"%"



   })
	.catch(err =>{
                console.error(err);
                alert("No such location found \n***solutions***\n1.please check your spelling \n2.type city name that is near from you\n3.give coordinates i.e. lattitude,longitude ")
                
        } );
}

const submit=document.getElementById('submit')
const search=document.getElementById('search')
submit.addEventListener('click',(e)=>{
        fetch('https://api.myptv.com/geocoding/v1/locations/by-text?searchText='+search.value+'&apiKey=RVVfOTI3ZTRiN2FjY2IzNGRiYmE4MGI4Y2I2ODkwNmMyMjQ6NjBkZDM5NTktN2Y5MC00OTRhLWEyMGUtMTMzYmFhYjJmNTRl')
        .then((response)=>response.json())
        .then((response)=>{
                console.log(response)
                console.log(response.locations[0].address.district);
                //getting data from api by giving location name
                const district=response.locations[0].address.district
                const city=response.locations[0].address.city
                const province=response.locations[0].address.province
                const state=response.locations[0].address.state
                const countryName=response.locations[0].address.countryName

                var latitude=response.locations[0].referencePosition.latitude
                console.log(latitude);
                var longitude=response.locations[0].referencePosition.longitude
                console.log(longitude);
                var coordinates=latitude+','+longitude
                console.log(coordinates)
                getWeather(coordinates,district,city,province,state,countryName)              
        })

})
const latlong=28.613079071044922+','+77.22955322265625
getWeather(latlong,'India Gate',"New Delhi","New Delhi",'Delhi','India')

search.addEventListener('keypress',(e)=>{
    if(e.keyCode==13){
        submit.click()
    }
})

//using Geo Location With users permission

function getLocation(){
      
        if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition((position)=>{
                        console.log(position);
                        var lat=position.coords.latitude;
                        var long=position.coords.longitude;
                        console.log(lat);
                        console.log(long);
                       var location=lat+","+long;
                fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat},${long}&key=8f94de5869b9491d97a4b21cc2035f87`) 
                .then((response)=>response.json())
                .then((response)=>{
                        console.log(response)
                        const city =response.results[0].components.city
                        const suburb =response.results[0].components.suburb
                        const village =response.results[0].components.village
                        const state_district =response.results[0].components.state_district
                        const state =response.results[0].components.state
                        const country =response.results[0].components.country
                        console.log(village)
                        document.querySelector('#userLocationData').innerHTML="location: "+location+" "+suburb+" "+city+" "+state_district+" "+state+" "+country
                        getWeather(location,suburb,city,state_district,state,country)

                 })
                })
        }else{
                alert('geolocation is not supported by browser')
        }
        

}

//usin API Without users permission

// fetch('https://ipapi.co/json/')
// .then((response)=> response.json())
// .then((data)=> {
//         alert("Latitude: "+data.latitude +" Longitude: "+data.longitude)
// })