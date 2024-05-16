import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "아침식사 시간입니다.",
    },
    {
        id: 3,
        message: "독서 시간입니다.",
    },
    {
        id: 4,
        message: "점심식사 시간입니다.",
    },
    {
        id: 5,
        message: "업무를 진행해 주세요.",
    },
    {
        id: 6,
        message: "이제 곧 미팅이 시작됩니다.",
    },
    {
        id: 7,
        message: "업무를 마무리하고 퇴근 하세요.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                // 알림추가가 끝나면 notification 비우기
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification 
                            key={notification.id}
                            id={notification.id}
                            message={notification.message} 
                        />
                    );
                })}
            </div>
        )
    }
}

export default NotificationList;