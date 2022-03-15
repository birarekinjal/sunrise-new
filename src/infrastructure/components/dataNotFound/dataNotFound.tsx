import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { dataNotFoundProps } from './noDataFoundModal';

const DataNotFound:React.FC<dataNotFoundProps> = ({ errorMessage }) => {
  return (
    <div className='noDataFound'>
      <ReportProblemIcon />
      <h6>{errorMessage}</h6>
    </div>
  );
};

export default DataNotFound;