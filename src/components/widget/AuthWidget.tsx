import { Component } from 'react';
import { connectAlita } from 'redux-alita';

type AuthWidgetProps = {
    auth: any;
    children: (param: any) => React.ReactElement;
};

class AuthWidget extends Component<AuthWidgetProps> {
    render() {
        const { auth = {} } = this.props;
        return this.props.children(auth.data || {});
    }
}

export default connectAlita(['auth'])(AuthWidget);
