import { useSelector } from 'react-redux';
import { RootState } from '../../../reducer/rootReducer';
import {
  setCollapse,
  setCollapseData,
} from '../../header/redux/action-creators';
import { useAppDispatch } from '../../../../application/hooks/useReduxTypeHooks';
import { constants } from '../../../../application/constants/constant';

const useSetSidebar = () => {
  const dispatch = useAppDispatch();
  const headerData = useSelector((state: RootState) => state.header);

  // This method for responsive
  const handleDrawerToggle = () => {
    dispatch(setCollapse(false));
  };

  // this method for tablet
  const handleDrawerCollapse = () => {
    document.body.classList.add('collapse-menu');
    dispatch(setCollapseData(true));
  };

  const { height, width } = constants.sideBar.drawerWidth;

  const drawerWidth = headerData.collapseData === false ? height : width;

  return {
    handleDrawerToggle,
    handleDrawerCollapse,
    drawerWidth,
    headerData,
  };
};

export default useSetSidebar;
