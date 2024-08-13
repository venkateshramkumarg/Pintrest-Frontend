import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !imageUrl) {
      alert('Please fill in both fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/postImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, imageUrl }),
      });

      if (!response.ok) {
        throw new Error('Failed to post image');
      }

      const data = await response.json();
      console.log('Data submitted successfully:', data);

      setTitle('');
      setImageUrl('');

      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4">Add New Image</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
