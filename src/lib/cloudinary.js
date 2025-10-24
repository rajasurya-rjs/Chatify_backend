// Cloudinary integration removed.
// This file is left as a harmless stub to avoid import errors if any leftover imports exist.
const cloudinary = {
  uploader: {
    upload: async () => {
      throw new Error("Cloudinary integration has been removed. Provide image URLs directly instead.");
    },
  },
};

export default cloudinary;
