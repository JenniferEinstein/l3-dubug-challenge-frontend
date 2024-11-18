import { Container, Box } from '@mui/material';
import Image from './components/Image';
import Quote from './components/Quote';
import Songs from './components/Songs';

function App() {
  return (
    <Container maxWidth="xl" sx={{ height: '100vh' }}>
      <Box sx={{ 
        display: 'flex', 
        height: 'calc(100% - 16px)',
        gap: 2 
      }}>
        <Box sx={{ 
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}>
          <Box sx={{ flex: '1 0 50%' }}>
            <Image />
          </Box>
          <Box sx={{ flex: '1 0 50%' }}>
            <Quote />
          </Box>
        </Box>
        <Box sx={{ width: '50%', height: '100%' }}>
          <Songs />
        </Box>
      </Box>
    </Container>
  );
}


