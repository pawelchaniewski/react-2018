import { connect } from "react-redux";

import BookAdd from "components/BookAdd/BookAdd";
import { addBook } from "actions";

const mapDispatchToProps = {
  onAddBook: addBook
};

const BookAddContainer = connect(
  null,
  mapDispatchToProps
)(BookAdd);

export default BookAddContainer;
