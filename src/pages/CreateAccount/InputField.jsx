import { Icon } from "@iconify/react/dist/iconify.js";

export default function InputField({
  type,
  placeholder,
  value,
  onChange,
  icon,
}) {
  return (
    <div className="relative mb-4">
      <input
        type={type}
        className="bg-white rounded-full px-10 py-3 w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Icon
        icon={icon}
        width="22"
        height="22"
        className="absolute top-3 left-2"
      />
    </div>
  );
}
