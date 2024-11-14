import { FaSearch } from 'react-icons/fa';

function SearchBar() {
    return (
        <div className="flex justify-center items-center">
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FaSearch />
                </span>
                <input
                    type="text"
                    className="pl-10 pr-4 py-2 border border-gray-300 text-sm rounded-md w-72 focus:outline-none focus:ring-1 focus:ring-black focus:shadow-md"
                    placeholder="Etkinlik, İş İlanı, Blog Ara"
                />
            </div>
        </div>
    );
}

export default SearchBar;
