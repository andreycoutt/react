import React from 'react'
import { useState } from 'react'

function History() {
    const [city, setCity] = useState("")
    const [weatherForecast, setWeatherForecast] = useState(null)
    const [date, setDate] = useState(null)
  
    const handleChange = (e) => {
      setCity(e.target.value)
    }
    const handleChangeDate = (e) => {
        setDate(e.target.value)
      }
  
    const handleSearch = () => {
      fetch(`http://api.weatherapi.com/v1/history.json?key=5d5fa322b9704ab9a15175834221008&q=${city}&&date=${date}&lang=pt`)
        .then((response) => {
          if(response.status === 200){
            console.log(response)
            return response.json()
          }
        })      // fazendo requisição pra uma api
        .then((data) => {
            console.log(data)
          setWeatherForecast(data)
        })
      };

  return (
    <div>
    <nav className="navbar navbar-expand-md navbar-darkmb-4">

    </nav>

    <main className="container">
      <div className="jumbotron">
        <h2>Previsão do tempo</h2  >
        <p>
          Digite o nome cidade
        </p>

        <div className="row mb-3">
          <div className="col-md-4">
            <input onChange={handleChange} className="form-control" value={city} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <input type="date" onChange={handleChangeDate} className="form-control" value={date} />
          </div>
        </div>

        <button onClick={handleSearch} className="btn btn-outline-secondary btn-sm">
          Pesquisar
        </button>

        {
          weatherForecast ? (
            <div>
            <div className='mt-4'>
                <div>
                  <img src={weatherForecast.forecast.forecastday[0].day.condition.icon} />
                </div>

                <div>
                <p>
                    Temperatura máxima no dia: {weatherForecast.forecast.forecastday[0].day.maxtemp_c}
                  </p>
                  <h3></h3>
                </div>

            </div>
          </div>
          ) : null   
        }

      </div>
    </main>


  </div>
  )
}

export default History