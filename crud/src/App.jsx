import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAdd = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(items[index]);
  };

  const handleSave = () => {
    if (editValue.trim()) {
      const updatedItems = items.map((item, i) =>
        i === editIndex ? editValue.trim() : item
      );
      setItems(updatedItems);
      setEditIndex(null);
      setEditValue("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">CRUD App</h1>
        <div className="mb-4">
          <input
            type="text"
            className="border border-gray-300 p-2 rounded w-full"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add a new item"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white mt-2 p-2 rounded w-full hover:bg-blue-600"
          >
            Add Item
          </button>
        </div>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-200 py-2"
            >
              {editIndex === index ? (
                <input
                  type="text"
                  className="border border-gray-300 p-1 rounded w-full"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                <span>{item}</span>
              )}
              <div className="ml-2 flex">
                {editIndex === index ? (
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
