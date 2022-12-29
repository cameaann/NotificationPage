
export default function Notification(props) {
    let notification = props.value;

    return(
            <div className =  {notification.status ==='unread' ? 'notification unread':'notification'} >

                <img className='notification__userimage' src={notification.photoSrc} alt=""/>

                <div>
                    <div className="notification__container">
                        <div>
                            <span className='notification__username'>{ notification.person }</span>
                            <span className='notification__text'>{ notification.text}
                                <a className='notification__link' href="/">{notification.linkName}</a>
                            </span>
                            <span className= { notification.status ==='unread' ? 'unreadMark':'hidden'}></span>

                        </div>
                    </div>
                    <div className='notification__date'>{notification.date}</div>
                    <div className= { notification.message !== undefined ? 'notification__message':'hidden'}>{notification.message}</div>
                </div>
                <div  className={ notification.picture !== undefined ? 'rcontent-box':'hidden'}>
                    <img src= { notification.picture } className={ notification.picture !== undefined ? 'notification__picture':'hidden'} alt="your img"/>
                </div>



            </div>
        );

}