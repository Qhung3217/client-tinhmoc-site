import axiosInstance, { endpoints } from 'src/utils/axios';

export const uploadImage = async (image: File | string): Promise<string> => {
  if (typeof image === 'string') return image;

  const formData = new FormData();
  formData.append('file', image);

  const response = await axiosInstance.post(endpoints.file, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
