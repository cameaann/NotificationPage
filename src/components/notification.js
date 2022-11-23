import React from 'react';
import Image from 'react-image-webp';
// import img1 from './avatar-kimberly-smith.webp';

export default class Notification extends React.Component {

    render(){
        var notification = {
            person:"Mark Veber",
            photoSrc:"",
            text:"reacted to your recent post",
            status:"unread",
            date:"1 m ago",
            linkName:"My first tournament today!",
            link:'../assets/img/avatar-mark-webber.webp'
        };



        return(
            <div className='notification'>

                <picture>
                <Image className='notification__userimage' webp={require('../assets/img/avatar-mark-webber.webp')}
 />
                    {/* <source srcSet ={img1} type="image/webp"/> */}
                    {/* <img className='notification__userimage' src={ notification.link} alt = { notification.person }/> */}
                </picture>

                <div className="notification__container">
                    <span className='notification__username'>{ notification.person }</span>
                    <span className='notification__message'>{ notification.text}
                    <a className='notification__link' href="/">{notification.linkName}</a></span>
                </div>

            </div>
        );
    }

}