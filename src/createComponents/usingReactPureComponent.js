import React, {PureComponent} from 'react'

class UsingReactPureComponent extends PureComponent {
    render() {
        return <h1>{this.props.title} with React PureComponent</h1>
    }
}

export default UsingReactPureComponent