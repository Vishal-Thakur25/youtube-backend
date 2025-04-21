import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadCloudinary = async (fileUrl) => {
  try {
    if (!fileUrl) return null;
    const response = await cloudinary.uploader.upload(fileUrl, {
      resource_type: "auto",
    });

    fs.unlinkSync(fileUrl);
    return response;
  } catch (error) {
    fs.unlinkSync(fileUrl); // remove the file from server if upload fails to the cloud
    return null;
  }
};

// export { uploadCloudinary };
