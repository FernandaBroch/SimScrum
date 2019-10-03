import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';


class DropBox extends Component {
  
  render() {
    return (
      <div>
        <Container onDrop={this.props.onDrop}>
          {this.props.items.map(item => {
            return (
              <Draggable key={item.id}>
                {this.props.renderItem(item)}
              </Draggable>
            );
          })}
        </Container>
      </div>
    );
  }
}

export default DropBox;