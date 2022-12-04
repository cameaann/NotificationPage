import React from 'react';
import Records from '../assets/notifications_db.json';
import Notification from './notification';

export default class Notifications extends React.Component {

    render(){
        var notifications = [];

        notifications = Records.map(record => {
            return(
                <Notification value = { record } key={record.id}/>
            )

        })
        return(
            <div>{ notifications }</div>
        )
    }

}