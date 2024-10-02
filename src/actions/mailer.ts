import axios, { endpoints } from 'src/utils/axios';

export const sendMail = async (payload: {
  fullName: string;
  phone: string;
  email: string;
  content: string;
}) => {
  const url = endpoints.mail.send;

  const response = await axios.post(url, payload);

  return response.data;
};
