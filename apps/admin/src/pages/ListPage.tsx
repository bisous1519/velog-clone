import {
  Box, styled, Tab, Tabs,
} from '@mui/material';
import {
  DataGrid, GridColDef, GridRowParams,
} from '@mui/x-data-grid';
import {
  ReactNode, SyntheticEvent, useEffect, useState,
} from 'react';
import { NoticeType } from '@repo/common/type';
import { useNavigate } from 'react-router-dom';
import { getAllEntries, getPublishedEntries } from '../utils/contentfulUtils.ts';

const ListPageContainer = styled(Box)`
    //border: 1px solid black;
    margin-top: 6rem;
`;

type TabPanelPropsType = {
  children?: ReactNode;
  index: number;
  value: number;
};

function TabPanel(props: TabPanelPropsType) {
  const {
    children, value, index, ...other
  } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`status-tabpanel-${index}`}
      aria-labelledby={`status-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function ListPage() {
  const navigation = useNavigate();
  const [allEntries, setAllEntries] = useState<NoticeType[]>([]);
  const [publishedEntries, setPublishedEntries] = useState<NoticeType[]>([]);
  const [currentTab, setCurrentTab] = useState<number>(0);

  const columns: GridColDef<(typeof allEntries)[number]>[] = [
    {
      field: 'id',
      headerName: 'No.',
      width: 60,
      editable: false,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
      editable: false,
      headerAlign: 'center',
    },
    {
      field: 'content',
      headerName: 'Content',
      width: 350,
      editable: false,
      sortable: false,
      headerAlign: 'center',
    },
    {
      field: 'createdAt',
      headerName: 'CreatedAt',
      width: 200,
      editable: false,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'updatedAt',
      headerName: 'UpdatedAt',
      width: 200,
      editable: false,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  const a11yProps = (index: number) => ({
    id: `status-tab-${index}`,
    'aria-controls': `status-tabpanel-${index}`,
  });

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const handleRowClick = (params: GridRowParams) => {
    navigation(`/article/${params.row.entryId}`);
  };

  useEffect(() => {
    getAllEntries().then((items) => {
      const data:NoticeType[] = items.map((item, index) => ({
        ...item.fields,
        id: index,
        entryId: item.sys.id,
        createdAt: new Date(item.sys.createdAt).toLocaleString(),
        updatedAt: new Date(item.sys.updatedAt).toLocaleString(),
      }));
      setAllEntries(data);
    });
    getPublishedEntries().then((items) => {
      const data:NoticeType[] = items.map((item, index) => ({
        ...item.fields,
        id: index,
        entryId: item.sys.id,
        createdAt: new Date(item.sys.createdAt).toLocaleString(),
        updatedAt: new Date(item.sys.updatedAt).toLocaleString(),
      }));
      setPublishedEntries(data);
    });
  }, []);

  return (
    <ListPageContainer>
      <Tabs value={currentTab} onChange={handleTabChange} aria-label="status tabs">
        <Tab label="Published" {...a11yProps(0)} sx={{ fontSize: '1.4rem' }} />
        <Tab label="All" {...a11yProps(1)} sx={{ fontSize: '1.4rem' }} />
      </Tabs>
      <TabPanel value={currentTab} index={0}>
        <DataGrid
          columns={columns}
          rows={publishedEntries}
          onRowClick={handleRowClick}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 25,
              },
            },
          }}
          sx={{ fontSize: '1.4rem' }}
        />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <DataGrid
          columns={columns}
          rows={allEntries}
          onRowClick={handleRowClick}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 25,
              },
            },
          }}
          sx={{ fontSize: '1.4rem' }}
        />
      </TabPanel>
    </ListPageContainer>
  );
}
