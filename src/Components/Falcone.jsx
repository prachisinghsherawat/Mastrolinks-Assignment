import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from "axios"
import { useEffect, useState } from "react"



export const Falcone = () => {

    const [ planetData , setPlanetData ] = useState([])
    const [ planetNames , setPlanetNames ] = useState([])
    const [ vehicleData , setVehicleData ] = useState([])
    const [ vehicleNames , setVehicleNames ] = useState([])
    const [ token , setToken] = useState("")
    
    const [destination , setDestination] = useState({
        destination1: '',
        destination2: '',
        destination3: '',
        destination4: ''
    })

    const [vehicle , setVehicle] = useState({
        vehicle1: '',
        vehicle2: '',
        vehicle3: '',
        vehicle4: ''
    })

    useEffect(() => {
        getPlanetsData()
        getVehiclesData()
        getToken()        
    },[])


    const handleChange = (e) => {
        const {name , value} = e.target;
        setDestination({...destination, [name] : value})
    }
    //console.log(destination)

    const radioChange = (e) => {
        const {name , value} = e.target;
        setVehicle({...vehicle, [name] : value})
    }

    let options = {
        method: 'POST',
        headers: {
            Accept : "application/json"
        }
    }

    const getToken = () => {

        const fetchRes =   fetch("https://findfalcone.herokuapp.com/token", options);
            fetchRes.then(res =>
                res.json()).then(data => {
                    setToken(data.token)
                })
    }
        
    
    const getPlanetsData = () => {
        axios.get("https://findfalcone.herokuapp.com/planets").then((res)=> setPlanetData(res.data))
    }

    const getVehiclesData = () => {
        axios.get("https://findfalcone.herokuapp.com/vehicles").then((res)=> setVehicleData(res.data))
    }

    const findingFalcone = () => {

        let planet_names = Object.values(destination)
        let vehicle_names = Object.values(vehicle)
        let paramObj = {
            token,
            planet_names,
            vehicle_names
        }
        let options = {
            method: 'POST',
            headers: {
                Accept : "application/json",
                "Content-Type" :"application/json"
            },
            data: JSON.stringify(paramObj)
        }
              
        const fetchRes =  fetch("https://findfalcone.herokuapp.com/find", options);
            fetchRes.then(res =>
                res.json()).then(data => {
                    console.log(data)
                })
        
    }



    return(

        <>
            
            <h1> Finding Falcone ! </h1>

           <div className="selectBox">

           <Box sx={{ minWidth: 150 }}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Destination 1</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    name="destination1"
                    label="Destination 1"
                     onChange={handleChange}
                >
                    { planetData && planetData.map((val)=>(
                        <MenuItem value={val.name}> {val.name} </MenuItem>
                    ))}
                   
                </Select>
                </FormControl>
            </Box>

            <Box sx={{ minWidth: 150 }}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Destination 2</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    name="destination2"
                    label="Destination 2"
                     onChange={handleChange}
                >
                    { planetData && planetData.map((val)=>(
                        <MenuItem value={val.name}> {val.name} </MenuItem>
                    ))}
                    
                </Select>
                </FormControl>
            </Box>

            <Box sx={{ minWidth: 150 }}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Destination 3</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    name="destination3"
                    label="Destination 3"
                    onChange={handleChange}
                >
                    { planetData && planetData.map((val)=>(
                        <MenuItem value={val.name}> {val.name} </MenuItem>
                    ))}
                   
                </Select>
                </FormControl>
            </Box>

            <Box sx={{ minWidth: 150 }}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Destination 4</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    name="destination4"
                    label="Destination 4"
                    onChange={handleChange}
                >
                    { planetData && planetData.map((val)=>(
                        <MenuItem value={val.name}> {val.name} </MenuItem>
                    ))}
                   
                </Select>
                </FormControl>
            </Box>

            <div className="timeDiv">
                <h2>Time taken : </h2>
            </div>

           </div>




           <div className="radioBox">

           <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="vehicle1"
                  onChange={radioChange}
                >
                    { vehicleData && vehicleData.map((val)=>(
                        <FormControlLabel value={val.name} control={<Radio />} label={`${val.name} (${val.total_no})`} />
                    ))}
              
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="vehicle2"
                  onChange={radioChange}
                >
                    { vehicleData && vehicleData.map((val)=>(
                        <FormControlLabel value={val.name} control={<Radio />} label={`${val.name} (${val.total_no})`} />
                    ))}
              
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="vehicle3"
                  onChange={radioChange}
                >
                    { vehicleData?.map((val) => (
                            <FormControlLabel value={val.name} control={<Radio />} label={`${val.name} (${val.total_no})`} />
                        ))}
              
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="vehicle4"
                  onChange={radioChange}
                >
                    { vehicleData && vehicleData.map((val)=>(
                        <FormControlLabel value={val.name} control={<Radio />} label={`${val.name} (${val.total_no})`} />
                    ))}
              
                </RadioGroup>
            </FormControl>
           

           </div>

           <button className='btn' onClick={findingFalcone}>Find Falcone ?</button>

        </>
    )
}



