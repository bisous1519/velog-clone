import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';

// const LayoutContainer = styled(Box)

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

// const LayoutContentBox = styled(Box)(({ t }) => '');
