import { useSelector } from 'react-redux';
import { setCollapse, setCollapseData } from '../redux/action-creators';
import { RootState } from '../../../reducer/rootReducer';
import { useAppDispatch } from '../../../../application/hooks/useReduxTypeHooks';
import { constants } from '../../../../application/constants/constant';

const useSetHeader = () => {
  const dispatch = useAppDispatch();
  const headerData = useSelector((state: RootState) => state.header);
  const { collapseData } = headerData;

  const { height, width } = constants.header.drawerWidth;

  const drawerWidth = collapseData === false ? height : width;

  const handleDrawerToggle = () => {
    dispatch(setCollapse(true));
  };

  const handleDrawerCollapse = () => {
    dispatch(setCollapseData(false));
    document.body.classList.remove('collapse-menu');
  };

  return {
    handleDrawerToggle,
    handleDrawerCollapse,
    drawerWidth,
    collapseData,
  };
};

export default useSetHeader;
