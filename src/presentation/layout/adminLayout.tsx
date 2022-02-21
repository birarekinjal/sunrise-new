import Footer from './footer/footer';
import Header from './header/header';
import './layout.scss';
import Sidebar from './sidebar/sidebar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/rootReducer';


const AdminLayout = (props: any) => {
  // const drawerWidth = 300;
  const headerData = useSelector((state: RootState) => state.header);
  const { collapseData } = headerData;
  const drawerWidth = collapseData === false ? 300 : 80;
  const { component: Component, ...rest } = props;

  return (
    <section className="main-body-container">
      <aside>
        <Sidebar />
      </aside>
      <Box
        component="article"
        className="main-box-container"
        sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` }, ml: { md: `${drawerWidth}px` } }}
      >
        <Header />
        <Toolbar />
        <Component {...rest} />
        <Footer />
      </Box>
    </section>
  );
};

export default AdminLayout;


