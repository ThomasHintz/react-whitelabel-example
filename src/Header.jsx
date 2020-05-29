import React from "react";
import { withWhiteLabelContext } from 'react-whitelabel';

              // <img src={this.props.label.logo} />
class Header extends React.Component {
    render() {
        return (
            <header className="header">
              <img src={this.props.label.logo} />
            </header>
        );
    }
}

export default withWhiteLabelContext(Header);
