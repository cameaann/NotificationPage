import React from 'react';
import Records from '../assets/notifications_db.json';
import Notification from './notification';

export default class Notifications extends React.Component {

    render(){
        var notifications = [];
        var unread = 0;

        notifications = Records.map(record => {

            if(record.status ==="unread"){  unread ++;}
            return(
                <Notification value = { record } key={record.id}/>
            )
        })
        return(
            <div>
                <div className='tab_container'>
                    <div className='tab_header'>
                        <div className='tab_title'>Notifications</div>
                        <div className= { unread > 0 ? 'newMessagesNumber':'hidden'}>{unread}</div>
                    </div>

                    <div className='markAllButton'>Mark all as read</div>
                </div>
                <div>{ notifications }</div>
            </div>

        )
    }

}