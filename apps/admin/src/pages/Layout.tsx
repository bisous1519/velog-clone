import { Outlet } from 'react-router-dom';
import { styled, Box } from '@mui/material';
import Header from '../components/Header.tsx';

// const LayoutContainer = styled(Box)(
//   ({ theme }) => `
//         width: 100vw;
//         min-height: 100vh;
//         padding: 2rem 8rem;
//         color: ${theme.palette.primary.main};
//     `,
// );
const LayoutContainer = styled(Box)`
    //width: 100%;
    min-height: 100vh;
    padding: 2rem 8rem;
`;

export default function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}

// const LayoutContentBox = styled(Box)(({ t }) => '');
