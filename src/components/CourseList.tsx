import { Course } from "../data";
import CourseCard from "./ui/CourseCard";

interface CourseListProps {
  courses: Course[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const CourseList: React.FC<CourseListProps> = ({
  courses,
  onEdit,
  onDelete,
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {courses.map((course) => (
      <CourseCard
        key={course.id}
        course={course}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ))}
  </div>
);

export default CourseList;
