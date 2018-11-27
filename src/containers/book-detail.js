import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render () {
      if (!this.props.book) {
        return <div>Please Select a book first</div>
      }

      return (
        <div>
          <h3>Details For:</h3>
          <div>{this.props.book.title}</div>
        </div>
      )
    }
}

function mapStateToProps(state) {
  // Whenever is returned will show up as props inside of BookList
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
