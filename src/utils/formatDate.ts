import dayjs from "dayjs";

const formatDate = (date: string) => {
  const formattedDate = dayjs(date).format("DD MMMM YYYY");
  return formattedDate;
};

export default formatDate;
