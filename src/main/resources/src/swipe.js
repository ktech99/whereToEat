import React, {Component} from 'react';
import './swipe.css';

class Swipe extends Component {

    render() {
        return (
            <div className="wrapper">
                <div className="profile-card js-profile-card">
                    <div className="profile-card__img">
                        <img
                            src="https://www.savt.ca/scripts/templates/iDea/images/blog-1.jpg"
                            alt="profile card"/>
                    </div>
                    <div
                        className="profile-card__cnt js-profile-cnt">
                        <div className="profile-card__name">
                            Name of place...
                        </div>
                        <div className="profile-card__txt">
                            Place description
                        </div>
                        <div className="profile-card-loc">
                                        <span className="profile-card-loc__txt">
                                        Istanbul, Turkey
                                         </span>
                        </div>
                        <div className="profile-card-ctr">
                            <button
                                className="profile-card__button button--blue js-message-btn">
                                Yes!
                            </button>
                            <button
                                className="profile-card__button button--orange">Hell
                                Nah!
                            </button>
                        </div>
                    </div>
                    <div
                        className="profile-card-message js-message">
                        <form className="profile-card-form">
                            <div
                                className="profile-card-form__container">
                                            <textarea
                                                placeholder="Say something..."/>
                            </div>

                            <div
                                className="profile-card-form__bottom">
                                <button
                                    className="profile-card__button button--blue js-message-close">
                                    Send
                                </button>
                                <button
                                    className="profile-card__button button--gray js-message-close">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Swipe;
