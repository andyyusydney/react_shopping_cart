import * as React from "react";

export interface HelloProps { compiler: string; framework: string; title: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return (
            <div className="foxtel-now-jumbotron">
                {this.props.title}
            </div>
        )
    }
}