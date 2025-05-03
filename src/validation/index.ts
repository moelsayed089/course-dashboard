import * as Yup from "yup";
const validationSchema = Yup.object({
  name: Yup.string().required("Course name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive"),
  thumbnail: Yup.string()
    .url("Must be a valid URL")
    .required("Thumbnail is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .required("End date is required")
    .min(Yup.ref("startDate"), "End date must be after start date"),
});

export default validationSchema;
