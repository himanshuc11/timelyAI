import { FileUploader } from "react-drag-drop-files";

const FILE_TYPES = ["JPG", "PNG", "GIF"];

type Props = {
  setAsset: React.Dispatch<React.SetStateAction<File | null>>;
  asset: File | null;
};

function Uploader(props: Props) {
  const handleChange = (file: File) => {
    props.setAsset(file);
  };

  return (
    <FileUploader
      handleChange={handleChange}
      name="image"
      types={FILE_TYPES}
      multiple={false}
      classes="uploader"
    >
      <div className="border border-dashed border-purple py-2.5 px-3 rounded-lg flex justify-between cursor-pointer">
        <p className="text-middle-blue text-sm">
          {props?.asset ? props.asset.name : "Drag & Drop"}
        </p>
      </div>
    </FileUploader>
  );
}

export default Uploader;
