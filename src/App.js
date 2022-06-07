import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import TourCard from './components/TourCard';

function App() {
  return (
    <div className="App">
      <Container >

        <Grid container spacing={3}>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        </Grid>

      </Container>
    </div>
  );
}

export default App;
