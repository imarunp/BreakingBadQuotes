import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

function Quotes() {
  const [quote, setQuote] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    getData();
  }, [count]);
  function getData() {
    axios
      .get('https://api.breakingbadquotes.xyz/v1/quotes')
      .then((res) => setQuote(res.data[0]));
  }

  return (
    <div className='container'>
      <Card
        sx={{
          p: 3,
          width: '75%',
          height: 500,
          maxWidth: 400,
          backgroundColor: '#edede9',
        }}
      >
        <CardContent>
          <Typography
            color='#3a5a40'
            fontWeight={800}
            fontFamily='Poppins'
            gutterBottom
            variant='h4'
            component='div'
            textAlign='center'
          >
            <span className='title'>Br</span>eaking
          </Typography>
          <Typography
            color='#3a5a40'
            fontWeight={800}
            fontFamily='Poppins'
            gutterBottom
            variant='h4'
            component='div'
            textAlign='center'
            sx={{ ml: -1 }}
          >
            <span className='title'>Ba</span>d
          </Typography>
          <Box
            sx={{
              alignItems: 'center',
              textAlign: 'center',
              border: '4px solid #3a5a40',
              borderRadius: '2%',
            }}
            width='75%'
            height={150}
            mt={4}
            pt={5}
            pl={3}
            pb={3}
            pr={3}
          >
            <Typography sx={{ fontWeight: 'bold', pb: 2 }} variant='body1'>
              "{quote.quote}"
            </Typography>
            <Typography variant='body1'>- {quote.author}</Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => setCount((count) => count + 1)}
            sx={{
              ml: 'auto',
              mr: 'auto',
              mt: 2,
              border: '2px solid #3a5a40 ',
              backgroundColor: '#3a5a40',
              textAlign: 'center',
              color: '#fff',
              fontWeight: 600,
              ':hover': { fontWeight: 800, color: '#344e41' },
            }}
            size='large'
          >
            GET A QUOTE!
          </Button>
        </CardActions>
        <Typography
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          variant='body2'
          component='span'
        >
          © Arun Pandey
          <IconButton
            sx={{ color: '#3a5a40' }}
            size='small'
            href='https://github.com/imarunp/BreakingBadQuotes'
          >
            <GitHubIcon />
          </IconButton>
        </Typography>
      </Card>
    </div>
  );
}
export default Quotes;
