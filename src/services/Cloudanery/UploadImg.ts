import CloudinaryToken from '../../constants/cloudanery/CloudaneryToken';

const CloudinaryImageUpload = async ({ fileUri }: { fileUri: string }) => {
  try {
    const match = fileUri.match(/\.(\w+)$/);
    const ext = match ? match[1].toLowerCase() : 'jpg';

    const mimeTypes: Record<string, string> = {
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
      webp: 'image/webp',
    };

    const formData = new FormData();

    formData.append('file', {
      uri: fileUri,
      type: mimeTypes[ext] || 'image/jpeg',
      name: `image_${Date.now()}.${ext}`,
    } as any);

    formData.append('upload_preset', CloudinaryToken.UPLOAD_PRESET);
    formData.append('folder', CloudinaryToken.FOLDER);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CloudinaryToken.CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      },
    );

    const data = await response.json();

    if (data?.secure_url) {
      return data.secure_url;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export default CloudinaryImageUpload;
