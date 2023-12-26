import { useContext, useEffect } from 'react';
import './Banner.css';
import { Context } from '../../provider/Context';

interface Messages {
  [key: string]: string;
}

const messages: Messages = {
  error: 'There was an error, try again later 😢',
  success: 'Saved 😊',
  warning: '⚠ You should add values in both cards',
};

const Banner = () => {
  const { bannerVisible, setBannerVisible, status } = useContext(Context);

  useEffect(() => {
    if (bannerVisible) {
      const timeoutId = setTimeout(() => {
        setBannerVisible(false);
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [bannerVisible, setBannerVisible]);

  return (
    <div className={`banner ${status} ${bannerVisible && 'show'}`}>
      {messages[status]}
    </div>
  );
};

export default Banner;
