import { Course } from "../../data";

interface CourseCardProps {
  course: Course;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onEdit,
  onDelete,
}) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col   gap-4">
    <img
      src={course.thumbnail}
      alt={course.name}
      className="w-full object-cover rounded-md"
    />
    <div className=" w-full">
      <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
      <p className="text-sm text-gray-600">{course.description}</p>
      <p className="text-sm text-gray-500">
        <span className="font-medium">Start:</span> {course.startDate} |{" "}
        <span className="font-medium">End:</span> {course.endDate}
      </p>
      <p className="text-sm font-medium text-indigo-600">${course.price}</p>
    </div>

    <div className="flex justify-between gap-2">
      <button
        onClick={() => onEdit(course.id)}
        className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(course.id)}
        className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  </div>
);
export default CourseCard;
