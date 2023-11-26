import './Icon.styled.css';

interface IconProps {
  iconName?: string;
}

const Icon = ({ iconName }: IconProps) => (
  <span className="material-symbols-outlined">{iconName}</span>
);

export default Icon;
