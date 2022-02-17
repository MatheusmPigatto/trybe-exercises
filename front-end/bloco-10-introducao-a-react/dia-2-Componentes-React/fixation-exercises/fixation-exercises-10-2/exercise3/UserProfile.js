import React from "react";

class UserProfile extends React.Component {
    render() {
        const { user } = this.props
        return (
            <section>
                <p>{ user.name }</p>
            </section>
        )
    }
}

export default UserProfile