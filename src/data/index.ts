import image from "../assets/1.png";
export interface Course {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  startDate: string;
  endDate: string;
  price: number;
}
const mockCourses: Course[] = [
  {
    id: "1",
    name: "React Basics",
    description: "Learn the fundamentals of React.",
    thumbnail: image,
    startDate: "2025-06-01",
    endDate: "2025-07-01",
    price: 99,
  },
  {
    id: "2",
    name: "Advanced TypeScript",
    description: "Master TypeScript for large-scale apps.",
    thumbnail: image,
    startDate: "2025-07-15",
    endDate: "2025-08-15",
    price: 149,
  },
  {
    id: "3",
    name: "Node.js Essentials",
    description: "Build scalable backend with Node.js.",
    thumbnail: image,
    startDate: "2025-08-01",
    endDate: "2025-09-01",
    price: 129,
  },
  {
    id: "4",
    name: "CSS Mastery",
    description: "Deep dive into modern CSS techniques.",
    thumbnail: image,
    startDate: "2025-09-10",
    endDate: "2025-10-10",
    price: 79,
  },
  {
    id: "5",
    name: "JavaScript Fundamentals",
    description: "Core concepts of JavaScript programming.",
    thumbnail: image,
    startDate: "2025-10-01",
    endDate: "2025-11-01",
    price: 89,
  },
  {
    id: "6",
    name: "GraphQL for Beginners",
    description: "Introduction to GraphQL APIs.",
    thumbnail: image,
    startDate: "2025-11-01",
    endDate: "2025-12-01",
    price: 109,
  },
];

export default mockCourses;
