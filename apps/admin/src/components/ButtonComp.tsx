import { Button } from '@mui/material';

type ButtonCompProps = {
  name: string;
};

export default function ButtonComp({ name }: ButtonCompProps) {
  return (
    <Button
      sx={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '10rem',
        padding: '0.4rem 1.6rem',
        fontSize: '1.3rem',
      }}
      variant="contained"
    >
      {name}
    </Button>
  );
}
