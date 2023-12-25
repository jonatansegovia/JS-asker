import './Banner.css';

interface BannerProps {
  type: string;
  visible: boolean;
}

interface Messages {
  [key: string]: string;
}

const messages: Messages = {
  error: 'There was an error, try again later 😢',
  success: 'Saved 😊',
  warning: '⚠ You should add values in both cards!',
};

const Banner = ({ type, visible }: BannerProps) => {
  return (
    <div className={`banner ${type} ${visible ? 'show' : 'hide'}`}>
      {messages[type]}
    </div>
  );
};

export default Banner;
