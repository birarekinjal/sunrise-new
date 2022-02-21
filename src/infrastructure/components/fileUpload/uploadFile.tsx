import React from 'react';
import { UploadFileProps } from './fileUpload';


const FileUpload: React.FC<UploadFileProps> = ({ accept, onChange }) => {
  return (
    <div>
      <input
        type="file"
        accept={accept}
        onChange={onChange}
      />
    </div>
  );
};

export default FileUpload;