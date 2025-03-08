import React, { FC } from 'react';
import { UserTypes } from '../types/types';
import { HiGlobeAlt, HiOutlineLocationMarker } from 'react-icons/hi';

interface ModalViewProps {
  selectedUser: UserTypes;
  setIsViewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalView: FC<ModalViewProps> = ({
  selectedUser,
  setIsViewModalOpen,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-2/5">
        <div className="photo-wrapper p-2">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src={`https://picsum.photos/100/100?random=${selectedUser.id}`}
            alt="John Doe"
          />
        </div>
        <div className="p-2">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            {selectedUser.name}
          </h3>
          <div className="text-center text-gray-400 text-sm font-semibold">
            <p>{selectedUser.username}</p>
          </div>
          <table className="text-xs my-3">
            <tbody className="text-sm">
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold flex items-start">
                  Address
                </td>
                <td className="px-2 py-2 w-full">
                  {selectedUser.address.city}
                  <div>
                    <span className="text-gray-400">
                      <div className="flex items-center">
                        {selectedUser.address.street} |{' '}
                        {selectedUser.address.suite} |{' '}
                        {selectedUser.address.zipcode} |{' '}
                        <a
                          href={`https://maps.google.com/?q=${selectedUser.address.geo.lat},${selectedUser.address.geo.lng}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-indigo-600 hover:text-red-800 flex items-center"
                        >
                          <HiOutlineLocationMarker /> View Map
                        </a>
                      </div>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                <td className="px-2 py-2">{selectedUser.phone}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                <td className="px-2 py-2">{selectedUser.email}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold flex items-start">
                  Company
                </td>
                <td className="px-2 py-2">
                  <div>{selectedUser.company.name}</div>
                  <div className="text-gray-400">{selectedUser.company.bs}</div>
                  <div className="text-gray-400">
                    {selectedUser.company.catchPhrase}
                  </div>
                  <a
                    href={`https://${selectedUser.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 hover:text-red-800 flex items-center"
                  >
                    <HiGlobeAlt /> View Website
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="text-center my-3">
            {/* <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a> */}
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setIsViewModalOpen(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalView;
