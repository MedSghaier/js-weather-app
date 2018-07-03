class Weather{
  constructor(city, state){
    this.apikey = '5bd3681f84ca505e';
    this.city = city;
    this.state =state;
  }
//Fetch weather from API
  async getWeather(){
    const response = await fetch(`https://api.wunderground.com/api/${this.apikey}/conditions/q/${this.state}/${this.city}.json
  `);

  const responseData = await response.json();
  console.log(responseData);
  
  return responseData.current_observation ;
  }
//Change weather location
chnageLocation(city, state){
    this.city = city;
    this.state = state;
  }
}
