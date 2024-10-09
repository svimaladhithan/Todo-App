import { useState, useEffect } from 'react';
import { FiPlus } from "react-icons/fi";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";

// Card component to display todos or an "add" button
const Card = ({ title, description, isAddCard, onClick, onEdit, onDelete }) => {
  const [color, setColor] = useState('');

  const PastelColor = () => {    // Function to generate a random pastel color
    const hue = Math.floor(Math.random() * 360); 
    return `hsl(${hue}, 100%, 85%)`; 
  };

  useEffect(() => {           // Effect to set a random color if not an "add" card
    if (!isAddCard) {
      setColor(PastelColor());
    }
  }, [isAddCard]);
 
  return (
    <div
      className={`mt-5 relative w-60 h-60 p-4 rounded-md shadow-lg transform hover:scale-105 transition duration-200 ease-in-out ${
        isAddCard ? 'bg-gray-300 cursor-pointer' : 'rotate-2 hover:rotate-0'
      }`}
      style={{ backgroundColor: !isAddCard ? color : undefined, border: '1px solid black' }} 
    >
      {isAddCard ? (
        <div onClick={onClick} className="flex items-center justify-center h-full">
          <FiPlus className="w-12 h-12 text-gray-700" />
        </div>
      ) : (
        <>
          <h3 className="font-bold text-md overflow-hidden line-clamp-2">{title}</h3>
          <p className="text-xs mt-2 ml-2 overflow-hidden line-clamp-4">{description}</p>
          <div className="absolute bottom-2 right-2 flex space-x-2">
            <button className="bg-white border border-black rounded-[10px] p-1 hover:bg-blue-300" onClick={onEdit}>
              <MdOutlineEdit className="w-5 h-5" />
            </button>
            <button className="bg-white border border-black rounded-[10px] p-1 hover:bg-red-300" onClick={onDelete}>
              <MdDeleteOutline className="w-5 h-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;