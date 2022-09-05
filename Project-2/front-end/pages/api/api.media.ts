import axios from "axios";

export const list = async (params: any): Promise<any> => {
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/media/video/by/${params.userID}`
    );
  } catch (error) {
    console.log(error);
  }
};
