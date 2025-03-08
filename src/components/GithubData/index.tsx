import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect, useState } from 'react';
import { setUsers } from '../../reducer/userSlice';
import axios from 'axios';
import Accordion from '../Accordion';

interface UserData {
  login: string;
  avatar_url: string;
  active?: number;
}

const GithubData: React.FC = () => {
  const dispatch = useDispatch();
  const users: UserData[] = useSelector(
    (state: RootState) => state.users.users
  );

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>(users);

  const handleSearch = () => {
    setIsSearch(true);
    const result = users.filter((user) =>
      user.login.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(result);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://api.github.com/users');
        if (Array.isArray(response.data) && response.data.length > 0) {
          dispatch(setUsers(response.data));
        } else {
          alert('Get data failed!');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <div className="relative flex items-center h-12 rounded-lg bg-white overflow-hidden mb-5 px-3">
        <div className="w-full flex bg-gray-100 p-4 space-x-4 rounded-lg focus-within:shadow-lg mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="bg-gray-100 outline-none w-full"
            type="text"
            placeholder="Enter username"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={handleSearch}
            aria-label="search"
            className="bg-[#008f44] py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full pb-16">
        <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">
              GitHub Repositories Explorer
            </h2>
          </header>
          <div className="px-5">
            {searchTerm !== '' && isSearch && (
              <span className="text-sm">
                Showing user for{' '}
                <strong className="text-[#008f44]">{searchTerm}</strong>
              </span>
            )}
          </div>
          <div></div>
          <div className="p-3">
            <div className="overflow-x-auto">
              {filteredUsers.length > 0 ? (
                <>
                  {filteredUsers.map((item, key) => (
                    <Accordion key={key} datas={item} />
                  ))}
                </>
              ) : (
                <div className="text-center">
                  <div>
                    <span>No users found.</span>
                  </div>
                  <div>
                    <span className="text-sm text-red-400">
                      Please reload to refetch the data.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubData;
