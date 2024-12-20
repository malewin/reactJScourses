import "../css/style.css";
import "../font/stylesheet.css";

const SubscribeBox = () => {
  return (
    <div className="subscribe-box center">
      <div className="subscribe-box__left">
        <img src="/images/subscribe_photo.png" alt="Фото подписчика" />
        <p className="subscribe-box__left_disc">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi,{" "}
          <i>a pulvinar purus condimentum</i>“
        </p>
      </div>
      <div className="subscribe-box__right">
        <h2 className="subscribe-box__right_title">SUBSCRIBE</h2>
        <span className="subscribe-box__right_disc">
          FOR OUR NEWLETTER AND PROMOTION
        </span>
        <form action="#" className="form-subscribe">
          <input
            className="field-enter"
            type="text"
            placeholder="Enter Your Email"
          />
          <input className="sibmit-subscribe" type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  );
};

export default SubscribeBox;
