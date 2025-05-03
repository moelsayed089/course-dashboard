interface FormFields {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}
export const formFields: FormFields[] = [
  {
    name: "name",
    label: "Course Name",
    type: "text",
    placeholder: "Enter course name",
  },
  {
    name: "description",
    label: "Course Description",
    type: "text",
    placeholder: "Enter course description",
  },
  {
    name: "price",
    label: "Course Price",
    type: "number",
    placeholder: "Enter course price",
  },
  {
    name: "thumbnail",
    label: "Course Thumbnail",
    type: "text",
    placeholder: "Enter course thumbnail",
  },
  {
    name: "startDate",
    label: "Start Date",
    type: "date",
    placeholder: "Enter course start date",
  },
  {
    name: "endDate",
    label: "End Date",
    type: "date",
    placeholder: "Enter course end date",
  },
];
