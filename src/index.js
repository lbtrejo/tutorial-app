import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Function components section
// The square class gets fully replaced with a function component instead.  Function components are a simpler way to write components that only contain a render() method
// and don't have their own state.  (The square state is managed by the parent board component)
// class Square extends React.Component {
//     // Add the constructor to initialize the state property
//
//     // Square constructor is no longer needed once the board takes over management of the square state
//
//     // constructor(props) {
//     //     // Always call super when defining the constructor of a subclass
//     //     super(props);
//     //     this.state = {
//     //         value: null,  // The state is empty to start the game, will be updated to "X" or "O" in time
//     //     };
//     // }
//
//
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
        return ( <Square
                    value={this.state.squares[i]}
                    onClick = {() => this.handleClick(i)}
        />
        );
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')

);
