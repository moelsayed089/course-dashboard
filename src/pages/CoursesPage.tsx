import { useState } from "react";
import { useFormik } from "formik";
import CourseList from "../components/CourseList";
import mockCourses, { Course } from "../data";
import Modal from "../components/ui/Dialog";
import Inputs from "../components/ui/Inputs";
import { toast } from "react-toastify";
import { formFields } from "../data/felids";
import validationSchema from "../validation";

// Define FormValues to match Course
type FormValues = {
  id: string;
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  startDate: string;
  endDate: string;
};

interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

const CoursesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [courses, setCourses] = useState<Course[]>(() => {
    const savedCourses = localStorage.getItem("courses");
    return savedCourses ? JSON.parse(savedCourses) : mockCourses;
  });
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  const toggleModal = (state: boolean) => {
    setIsOpen(state);
    if (!state) setEditingCourse(null);
  };

  const handleSubmit = (values: FormValues) => {
    const courseData: Course = {
      ...values,
      price: Number(values.price),
    };

    let updatedCourses: Course[];
    if (editingCourse) {
      updatedCourses = courses.map((course) =>
        course.id === editingCourse.id ? courseData : course
      );
      toast.success("Course updated successfully");
    } else {
      const newId = crypto.randomUUID();
      updatedCourses = [...courses, { ...courseData, id: newId }];
      toast.success("Course created successfully");
    }
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    toggleModal(false);
  };

  const objForm = useFormik<FormValues>({
    initialValues: editingCourse || {
      id: "",
      name: "",
      description: "",
      price: 0,
      thumbnail: "",
      startDate: "",
      endDate: "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleEdit = (id: string) => {
    const courseToEdit = courses.find((course) => course.id === id);
    if (courseToEdit) {
      setEditingCourse(courseToEdit);
      toggleModal(true);
    }
  };

  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (confirmed) {
      const updatedCourses = courses.filter((course) => course.id !== id);
      setCourses(updatedCourses);
      localStorage.setItem("courses", JSON.stringify(updatedCourses));
      toast.success("Course deleted successfully");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900">Courses</h2>
          <button
            onClick={() => toggleModal(true)}
            className="px-4 py-2 bg-indigo-300 text-white rounded-md hover:bg-indigo-500"
          >
            Add New Course
          </button>

          <Modal
            isOpen={isOpen}
            closeModal={() => toggleModal(false)}
            title={editingCourse ? "Edit Course" : "Create New Course"}
          >
            <form className="space-y-3" onSubmit={objForm.handleSubmit}>
              {formFields.map((field: FormField) => (
                <Inputs
                  key={field.name}
                  name={field.name}
                  onChange={objForm.handleChange}
                  value={objForm.values[field.name as keyof FormValues]}
                  id={field.name}
                  label={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  error={
                    objForm.touched[field.name as keyof FormValues] &&
                    (objForm.errors[field.name as keyof FormValues] as string)
                  }
                />
              ))}
              <div className="flex items-center space-x-3">
                <button
                  className="px-4 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800"
                  type="submit"
                >
                  {editingCourse ? "Update" : "Submit"}
                </button>
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                  onClick={() => toggleModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </Modal>
        </div>
        <CourseList
          courses={courses}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default CoursesPage;
