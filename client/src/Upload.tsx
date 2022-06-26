import Button from 'react-bootstrap/Button';

export default function Upload() {
  return (
    <Button
      onClick={() => {
        console.log('This thing works');
      }}
      variant="btn btn-outline-primary"
    >
      Upload Image
    </Button>
  );
}
