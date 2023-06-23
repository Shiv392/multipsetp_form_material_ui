import './App.css';
import StepperForm from './StepperForm';
import { Box, Container, CssBaseline, Paper } from '@mui/material';



function App() {
  return (
   <>
   <CssBaseline />
   <h1 className='text text-dark'>This is Linear Stepper Form</h1>
   <Container component={Box} p={4}>
<Paper component={Box} p={4}>
<StepperForm />

</Paper>
   </Container>
   </>
  );
}

export default App;
