import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    // console.log("p:", pickup);
    // console.log("d:", dropoff);

    const [ pickupCoordinates, setPickupCoordinates ] = useState()
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState()

    const getPickupCoordinates = (pickup) => {
        // const pickup = "Soacha";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiamltbzE3IiwiYSI6ImNrdm14dzk0ajNqczcyb3FpejZ3eWVuMHQifQ.W5h_VfrqtgDOoIciADj4rg",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            //L M
            //console.log(data.features[0].center)
            setPickupCoordinates(data.features[0].center);
        })  
    }

    const getDropoffCoordinates = (dropoff) =>{
        // const dropoff = "Bogota";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiamltbzE3IiwiYSI6ImNrdm14dzk0ajNqczcyb3FpejZ3eWVuMHQifQ.W5h_VfrqtgDOoIciADj4rg",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            //L M
            // console.log(data.features[0].center)
            setDropoffCoordinates(data.features[0].center)
        })  
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])

    return (
        <Wrapper>
            {/* Back Button */}
            <ButtonContainer>
                <Link href="/search">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>

            {/* Map */}
            <Map 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />

            {/* Ride Container */}
            <RideContainer>
                <RideSelector />
                <ConfirmButtonContainer>
                        <ConfirmButton>
                            Confirm UberX
                        </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default confirm

const Wrapper = tw.div`
    flex bg-gray-200 h-screen flex-col
`

const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
    border-t-2
`

const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 py-4 text-center text-xl cursor-pointer
`

const ButtonContainer = tw.div`
    bg-white fixed rounded-full top z-10 top-1 left-1 shadow-lg
`

const BackButton = tw.img`
    h-8 cursor-pointer hover:scale-105 transition tex-xl
`