import { connect } from "react-redux";

import { increase, decrease } from "../../actions";
import Counter from "../../components/Counter/Counter";

const getCounter = state => state.counter;

const mapStateToProps = state => ({
  counter: getCounter(state)
});

const mapDispatchToProps = {
  increase,
  decrease
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
