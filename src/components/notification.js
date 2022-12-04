import Image from 'react-image-webp';


export default function Notification(props) {
    let notification = props.value;

    return(
            <div className='notification' >

                <picture>
                <Image className='notification__userimage' webp={notification.link}
                />
                </picture>

                <div>
                    <div className="notification__container">
                        <span className='notification__username'>{ props.person }</span>
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