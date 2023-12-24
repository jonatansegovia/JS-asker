import './Banner.css';

interface BannerProps {
  type: string;
  visible: boolean;
}

const Banner = ({ type, visible }: BannerProps) => {
  return (
    <div className={`banner ${type} ${visible ? 'show' : 'hide'}`}>
      {type === 'success' ? 'Saved 😊' : 'There was an error 😢'}
    </div>
  );
};

export default Banner;
