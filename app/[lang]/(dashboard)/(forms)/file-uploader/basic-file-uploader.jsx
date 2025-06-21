import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const BasicFileUploader = () => {
  return (
    <div className="flex flex-col gap-3">
      <Label>Upload File</Label>
      <Input type="file" className="cursor-pointer" />

    </div>
  );
};

export default BasicFileUploader;