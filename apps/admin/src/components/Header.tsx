import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import { Box, styled } from '@mui/material';
import ButtonComp from './ButtonComp';

const HeaderContainer = styled('header')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Box sx={{ fontSize: '2.4rem', fontWeight: 600, lineHeight: '3.2rem' }}>eomlog</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <i><AiOutlineBell fontSize={22} /></i>
        <i><AiOutlineSearch fontSize={22} /></i>
        <ButtonComp name="로그인" />
      </Box>
    </HeaderContainer>
  );
}
