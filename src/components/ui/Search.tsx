interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search by course name..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full md:w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
);
export default Search;
