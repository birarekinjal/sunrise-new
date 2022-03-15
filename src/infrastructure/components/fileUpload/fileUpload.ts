export interface UploadFileProps {
  onFilesSelected?: (files: File[]) => void;
  onChange?: (e : React.FormEvent<any>) => void;
  name?: string;
  size?: number;
  type?: string;
  accept?: string | undefined;
}