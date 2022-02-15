import Footer from './footer/footer';
import Header from './header/header';
import './layout.scss';
import Sidebar from './sidebar/sidebar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/rootReducer';


const AdminLayout = (props: any) => {
  // const drawerWidth = 240;
  const headerData = useSelector((state: RootState) => state.header);
  const { collapseData } = headerData;
  const drawerWidth = collapseData === false ? 240 : 60;
  const { component: Component, ...rest } = props;

  return (
    <>
      <Box className="main-body-container">
        <Sidebar />
        <Box
          component="main"
          className="main-box-container"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}
        >
          <Header />
          <Toolbar />
          <Component {...rest} />
          <Footer />
        </Box>


      </Box>
    </>
  );
};

export default AdminLayout;


