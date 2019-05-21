import { connect } from "react-redux";

import Counter from "../../components/Counter/Counter";
import { increase, decrease } from "../../actions";

const getCounter = state => state.counter;

const mapStateToProps = state => {
  return {
    counter: getCounter(state)
  };
};

const mapDispatchToProps = {
  increase,
  decrease
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
