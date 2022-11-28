import React from 'react';
import Image from 'react-image-webp';

export default class Notification extends React.Component {

    render(props){
        var notification = {
            person:props.person,
            photoSrc:props.photoSrc,
            text:props.text,
            status:props.status,
            date:props.date,
            linkName:props.linkName,
            link:props.link
        };



        return(
            <div className='notification'>

                <picture>
                <Image className='notification__userimage' webp={require('../assets/img/avatar-mark-webber.webp')}
 />
                </picture>

                <div>
                    <div className="notification__container">
                        <span className='notification__username'>{ notification.person }</span>
                        <span className='notification__message'>{ notification.text}
                        <a className='notification__link' href="/">{notification.linkName}</a>
                        </span>
                        <div className= { notification.status ==='unread' ? 'unread':'hidden'}></div>
                    </div>
                    <div className='notification__date'>{notification.date}</div>
                </div>

            </div>
        );
    }


}