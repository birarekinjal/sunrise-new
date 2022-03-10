import React from 'react';
import { useDropzone } from 'react-dropzone';
import { DropZoneProps } from './dropzoneModal';

const FileUploadDropZone = ({
  error,
  showError,
  onDrop,
  accept,
  disabled,
  name,
  maxFiles,
  controlId,
  registeredEvents,
}: DropZoneProps) => {

  const { acceptedFiles, getInputProps, getRootProps } = useDropzone({
    onDrop,
    accept,
    disabled,
    maxFiles,
  });

  const files = acceptedFiles.map((file: any) => (
    <li key={file?.path}>
      {file?.path} - {file?.size} bytes
    </li>
  ));

  return (
    <div>
      FileUploadDropZone
      <div {...getRootProps({ className: 'dropzone' })} >
        <i className='fas fa-upload' />
        <h4>Upload Certificate <span>(PDF / Image)</span> </h4>
        <input
          {...getInputProps()}
          placeholder={'upload'}
          {...(registeredEvents || {})}
          type='file'
          name={name}
          controlId={controlId}
          isRequired
          label='Upload Certificate File'
        />
      </div>
      <h6>{files}</h6>
      {showError && error && (
        <>
          <span>{error}</span>
        </>
      )}
    </div>
  );
};

export default FileUploadDropZone;