import { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { User } from '../types/user';

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-full h-48 object-cover"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4">
            <button
              onClick={() => onEdit(user)}
              className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
            >
              <Edit2 className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => onDelete(user.id)}
              className="p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
            >
              <Trash2 className="w-5 h-5 text-white" />
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {user.first_name} {user.last_name}
        </h3>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
}