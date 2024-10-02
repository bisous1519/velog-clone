import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NoticeType } from '@repo/common/type';
import { Box, styled, Typography } from '@mui/material';
import { getOneEntry } from '../utils/contentfulUtils.ts';

const DetailPageContainer = styled('section')`
  margin: 8rem auto 0 auto;
  width: 80%;
`;

export default function DetailPage() {
  const { id: entryId } = useParams();
  const [entry, setEntry] = useState<NoticeType>();

  useEffect(() => {
    if (entryId) {
      getOneEntry(entryId).then((res) => {
        const data: NoticeType = {
          ...res.fields,
          entryId,
          createdAt: new Date(res.sys.createdAt).toLocaleString(),
          updatedAt: new Date(res.sys.updatedAt).toLocaleString(),
        };
        setEntry(data);
      }).catch(() => setEntry(undefined));
    }
  }, []);
  if (!entry) {
    return (
      <Box
        component="article"
        sx={{
          textAlign: 'center',
          fontSize: '2rem',
          lineHeight: '4rem',
          marginTop: '20rem',
          color: 'var(--customGray)',
        }}
      >
        ⚠️ 발행되지 않은 공지사항은 가져올 수 없습니다 ⚠️
      </Box>
    );
  }
  return (
    <DetailPageContainer>
      <Typography component="h1" sx={{ fontSize: '3.3rem', fontWeight: 600 }}>{entry.title}</Typography>
      <Box sx={{
        display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '3.2rem',
      }}
      >
        <Typography
          component="span"
          sx={{ fontSize: '1.4rem', lineHeight: '2.8rem', color: 'var(--customGray)' }}
        >
          created at
        </Typography>
        <Typography component="span" sx={{ fontSize: '1.4rem', marginLeft: '1rem' }}>{String(entry.createdAt)}</Typography>
      </Box>
      <Box sx={{
        display: 'flex', alignItems: 'center', gap: '0.2rem',
      }}
      >
        <Typography
          component="span"
          sx={{ fontSize: '1.4rem', lineHeight: '2.8rem', color: 'var(--customGray)' }}
        >
          updated at
        </Typography>
        <Typography component="span" sx={{ fontSize: '1.4rem', marginLeft: '1rem' }}>{String(entry.updatedAt)}</Typography>
      </Box>
      <Box component="article" sx={{ fontSize: '2rem', lineHeight: '4rem', marginTop: '4rem' }}>{entry.content}</Box>
    </DetailPageContainer>
  );
}
