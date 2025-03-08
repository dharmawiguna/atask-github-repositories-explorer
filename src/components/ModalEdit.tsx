// src/components/EditModal.tsx

import React, { ChangeEvent } from 'react'; // Sesuaikan path ke tipe UserTypes
import { UserTypes } from '../types/types';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserTypes | null;
  editForm: {
    name: string;
    email: string;
    phone: string;
    website: string;
    username: string;
    address: {
      street: string;
      city: string;
      suite: string;
      geo: {
        lat: string;
        lng: string;
      };
      zipcode: string;
    };
    company: {
      name: string;
      bs: string;
      catchPhrase: string;
    };
  };
  setEditForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      phone: string;
      website: string;
      username: string;
      address: {
        street: string;
        city: string;
        suite: string;
        geo: {
          lat: string;
          lng: string;
        };
        zipcode: string;
      };
      company: {
        name: string;
        bs: string;
        catchPhrase: string;
      };
    }>
  >;
  onSave: () => void;
}

const ModalEdit: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  user,
  editForm,
  setEditForm,
  onSave,
}) => {
  if (!isOpen || !user) return null;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
        geo: {
          ...prev.address.geo,
          [name]: value,
        },
      },
    }));
  };

  const handleCompanyChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      company: {
        ...prev.company,
        [name]: value,
      },
    }));
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/5 max-h-screen overflow-y-auto">
        <h2 className="text-2xl mb-4">Edit User</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave();
          }}
        >
          <div className="py-2 text-teal-600 font-semibold text-lg">
            Personal Information
          </div>
          <hr className="border-1 border-teal-500 mb-2" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={editForm.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={editForm.username}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={editForm.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={editForm.phone}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="py-2 text-teal-600 font-semibold text-lg">
            Address
          </div>
          <hr className="border-1 border-teal-500 mb-2" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Street</label>
              <input
                type="text"
                name="street"
                value={editForm.address.street}
                onChange={handleAddressChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="name"
                value={editForm.address.city}
                onChange={handleAddressChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Suite</label>
              <input
                type="text"
                name="suite"
                value={editForm.address.suite}
                onChange={handleAddressChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">ZipCode</label>
              <input
                type="text"
                name="zipcode"
                value={editForm.address.zipcode}
                onChange={handleAddressChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Latitude</label>
              <input
                type="text"
                name="lat"
                value={editForm.address.geo.lat}
                onChange={handleAddressChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Latitude</label>
              <input
                type="text"
                name="lat"
                value={editForm.address.geo.lng}
                onChange={handleAddressChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="py-2 text-teal-600 font-semibold text-lg">
            Company
          </div>
          <hr className="border-1 border-teal-500 mb-2" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={editForm.company.name}
                onChange={handleCompanyChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Website</label>
              <input
                type="text"
                name="website"
                value={editForm.website}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Bs</label>
              <input
                type="text"
                name="bs"
                value={editForm.company.bs}
                onChange={handleCompanyChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Catch Phrase</label>
              <input
                type="text"
                name="catchPhrase"
                value={editForm.company.catchPhrase}
                onChange={handleCompanyChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;
