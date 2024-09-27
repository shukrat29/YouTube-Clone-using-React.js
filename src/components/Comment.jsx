export const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm rounded-lg bg-gray-100 p-2">
      <img
        className="w-12 h-12"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ891HLuugNKthcStMIQ3VD_phd6XrcYAhkjA&s"
        alt="user"
      />

      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
