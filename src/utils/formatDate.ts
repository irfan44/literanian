import dayjs from "dayjs";

const formatDate = (date: string) => {
  const formattedDate = dayjs(date).format("MMM DD, YYYY");
  return formattedDate;
};

export default formatDate;
