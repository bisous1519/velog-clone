import { Box, styled } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { getArticles } from '@repo/common/mock';
import { useContentful } from '../hooks/useContentful.ts';

const ListPageContainer = styled(Box)`
    //border: 1px solid black;
    margin-top: 6rem;
`;

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 200,
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'body',
    headerName: 'Content',
    width: 300,
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'thumbnail',
    headerName: 'Thumbnail',
    renderCell: (params: GridRenderCellParams<any, string>) => (
      <img src={params.value} alt="thumbnail" />
    ),
    width: 150,
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'publishedAt',
    headerName: 'PublishedAt',
    width: 100,
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'user',
    headerName: 'User',
    width: 100,
    editable: false,
    headerAlign: 'center',
  },
];

const rows = getArticles();

export default function ListPage() {
  const { deliveryAPI, previewAPI } = useContentful();

  return (
    <ListPageContainer>
      <DataGrid
        columns={columns}
        rows={rows}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        sx={{
          fontSize: '1.5rem',
        }}
      />
    </ListPageContainer>
  );
}
