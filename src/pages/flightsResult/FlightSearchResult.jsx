import React, { useState } from "react";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import FlightSearchBar from "../../components/flightSearchBar/FlightSearchBar"
import "./FlightSearchResult.css"
import useFetch from "../../hooks/useFetch"
import { useLocation } from "react-router-dom"
import SearchItem from "../../components/searchFlightItem/SearchFlightItem"



function FlightSearchResult(){

    const location = useLocation()
    console.log("location: ")
    console.log(location.state.departCity)
    const [roundWay, setRoundWay] = useState(location.state.roundWay);
    const [departCity, setDepartCity] = useState(location.state.departCity);
    const [arrivetCity, setArriveCity] = useState(location.state.arrivetCity);
    const [startDate, setStartDate] = useState(location.state.startDate);
    const [returnDate, setReturntDate] = useState(location.state.returnDate);
    const [number, setNumber] = useState(location.state.number);
    const [flightsOrder, setFlightsOrder] = useState(location.state.flightsOrder)
    const [minPrice, setMinPrice] = useState(undefined);
    const [sorted,setSorted] = useState(false);


  
    const offset = location.state.startDate.getTimezoneOffset();
    const departDate = new Date(location.state.startDate.getTime() - (offset*60*1000));
    const departDateFormated= departDate.toISOString().split('T')[0]
    const { data, loading, error} = useFetch(`/flights?minPrice=${minPrice||0}&departCity=${location.state.departCity}&&arrivetCity=${location.state.arrivetCity}&&departDate=${departDateFormated}`)
 
    console.log("passenger no.")
   
    console.log(number)


    const handleSorting = ()=>{
        setMinPrice(1);
        setSorted(true);
    }

    return(
        <div>
            <Header/>
            <div >
            <div className="flightListContainer">
                <div className="flightListWrapper">
                    
                    <div className="sorting-flight">
                        <div className="sortingContainer">
                            <label className="sortingText">Sort Flight by Price</label>
                            <button className="sortButton" onClick={handleSorting}>Cheapest</button>
                        </div>
                    </div>
                    
                    
                    <div className="flightListResult">
                        {!sorted&&<div className="flightListResultConatainer">
                            {loading ? (
                            "loading"
                            ) : (
                            data.length ? <>  
                                {data.map((item) => 
                                    <SearchItem item={item} 
                                    roundWay={roundWay} setRoundWay={setRoundWay} 
                                    departCity={departCity} setDepartCity={setDepartCity}
                                    arrivetCity={arrivetCity} setArriveCity={setArriveCity}
                                    returnDate={returnDate} setStartDate ={setStartDate}
                                    flightsOrder={flightsOrder} setFlightsOrder={setFlightsOrder}
                                    number={number} setNumber={setNumber}
                                    key={item._id} />
                                )}
                            </>: <div className="sortingText">We don't have any flights matching your search on our site. Try changing some details.</div>
                            )}  
                        </div>}
                        {sorted&&<div className="flightListResultConatainer">
                            {loading ? (
                            "loading"
                            ) : (
                            data.length ? <>
                                {data.sort((a,b)=>(a.price-b.price)).map((item) => 
                                    <SearchItem item={item} 
                                    roundWay={roundWay} setRoundWay={setRoundWay} 
                                    departCity={departCity} setDepartCity={setDepartCity}
                                    arrivetCity={arrivetCity} setArriveCity={setArriveCity}
                                    returnDate={returnDate} setStartDate ={setStartDate}
                                    flightsOrder={flightsOrder} setFlightsOrder={setFlightsOrder}
                                    number={number} setNumber={setNumber}
                                    key={item._id} />
                                )}
                            </>: <div className="sortingText">We don't have any flights matching your search on our site. Try changing some details.</div>
                            )}
                        </div>}
                        
                    </div>

                </div>
            </div>
            
        </div>

            <Footer/>

        </div>
       
    )
}

export default FlightSearchResult