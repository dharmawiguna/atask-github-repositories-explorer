import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HiChevronRight } from 'react-icons/hi';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

interface UserData {
  login: string;
  avatar_url: string;
  active?: number;
}

interface AccordionProps {
  datas: UserData;
}

const Accordion: React.FC<AccordionProps> = ({ datas }) => {
  const [active, setActive] = useState<boolean>(false);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (active && repos.length === 0) {
      setLoading(true);
      axios
        .get<Repository[]>(`https://api.github.com/users/${datas.login}/repos`)
        .then((response) => setRepos(response.data))
        .catch((error) => console.error('Error fetching repositories:', error))
        .finally(() => setLoading(false));
    }
  }, [active, datas.login, repos.length]);

  return (
    <div
      className={`w-full p-5 border border-[#c9c6c655] rounded-md mb-5 duration-500 ${
        active ? 'is-active bg-[#a9c5b682]' : 'bg-[#e9e9e9]'
      }`}
    >
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setActive((prev) => !prev)}
      >
        <div className="w-10 flex-shrink-0 mr-2 sm:mr-3">
          <img
            className="rounded-full"
            src={datas.avatar_url}
            width="40"
            height="40"
            alt={datas.login}
          />
        </div>
        <div
          className={`w-full uppercase  ${active ? 'text-[#008f44] font-bold' : 'text-gray-800'}`}
        >
          {datas.login}
        </div>
        <div
          className={`text-xl duration-500 ${
            active ? 'rotate-[270deg]' : 'rotate-90'
          }`}
        >
          <HiChevronRight />
        </div>
      </div>
      {active && <hr className="border-[#008f44] my-2" />}
      <div className={`overflow-hidden duration-500 ${!active && 'max-h-0'}`}>
        {loading ? (
          <p>Loading repositories...</p>
        ) : repos.length > 0 ? (
          <ul className="list-disc pl-5">
            {repos.map((repo) => (
              <li key={repo.id}>
                <div className="py-2 px-4 my-2 bg-gray-100 rounded-md">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-semibold text-[#008f44]"
                  >
                    {repo.name}
                  </a>

                  <div className="text-sm text-gray-500">
                    {repo.description}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No repositories found.</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
