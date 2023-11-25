interface IconProps {
  iconName?: string;
}

const Icon = ({ iconName }: IconProps) => {
  console.log(iconName);
  return <span className="material-symbols-outlined">{iconName}</span>;
};

export default Icon;
