import { useRef } from 'react';
import Button from 'react-bootstrap/Button';

interface UploadProps {
  responseHandler: (data: FormData) => void;
}

export default function Upload(props: UploadProps) {
  const inputFileButton = useRef(null);

  const onFileUpload = async (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const selectedFile = target.files![0];

    const data = new FormData();
    data.append('file', selectedFile, selectedFile.name);

    props.responseHandler(data);
  };

  const onButtonClick = () => {
    (inputFileButton.current! as HTMLInputElement).click();
  };

  return (
    <div>
      <Button onClick={onButtonClick} variant="btn btn-outline-primary">
        Upload Image
      </Button>
      <input
        type="file"
        id="file"
        ref={inputFileButton}
        className="hidden"
        onChange={onFileUpload}
        accept=".jpeg,.jpg"
      />
    </div>
  );
}
