
const Stories = () => {
  const stories = Array(5).fill("Story");

  return (
    <div className="bg-white border-b shadow-sm py-4">
      <div className="container mx-auto px-4 flex space-x-4 overflow-x-auto">
        {stories.map((story, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 text-center"
          >
            <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
            <span className="text-sm text-gray-600">{story}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
