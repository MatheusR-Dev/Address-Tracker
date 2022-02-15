import { Container, Title, BgImage } from './styles/styles';
import GlobalStyle from './styles/GlobalStyles';
import SearchInput from './components/SearchInput';
import { useState, useEffect } from 'react';
import api from './services/api';
import MapComp from './components/Map'

interface newLocalProps {
  lat: number,
  lng: number
}

function App() {
  const [ address, setAddress] = useState("")
  const [ newLocal, setNewLocal ] = useState<newLocalProps>({lat: -14.2401, lng: -61.9252})

  useEffect(() =>{
    async function getAddress() {
      await api.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}BR&key=AIzaSyC23QwuPvrhw4h7mAFwlH8oipCTBsoG4Ik`)
      .then(response => {
        setNewLocal(response.data.results[0].geometry.location)
      })
      .catch(error => console.log(error))
    }
    getAddress()
  }, [address])  


  return (
    <>
    <Container>
        <BgImage/>
        <Title>
            Address Tracker
        </Title>
        <SearchInput onChange={(e) => setAddress(e.target.value)} value={address}/>
        <MapComp coords={newLocal} position={newLocal}/>
    </Container>
    <GlobalStyle/>
    </>
  );
}

export default App