// @ts-ignore
import imageToBase64 from "image-to-base64/browser";
type AllowedExtentions = "png" | "jpg";

type GeneretaeBase64 = {
  file: string;
  type: string;
};

async function generateBase64FromImage(
  file: File | null
): Promise<GeneretaeBase64> {
  if (file === null) return { file: "", type: "" };
  const name = file.name;
  const namesArray = name.split(".");
  const extention = namesArray[namesArray.length - 1] as AllowedExtentions;

  if (extention !== "jpg" && extention !== "png") {
    console.error("Support only jpg and png");
    return { file: "", type: "" };
  }

  const src = URL.createObjectURL(file);
  const base64Encoded = await imageToBase64(src);

  return {
    file: base64Encoded,
    type: extention,
  };
}

export { generateBase64FromImage };