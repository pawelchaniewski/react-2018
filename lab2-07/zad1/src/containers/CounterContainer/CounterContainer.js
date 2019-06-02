import { connect } from "react-redux";

import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync
} from "../../actions";
import Counter from "../../components/Counter/Counter";

const getCounter = state => state.counter;

const mapStateToProps = state => ({
  counter: getCounter(state)
});

const mapDispatchToProps = {
  increase: increaseAsync,
  decrease: decreaseAsync
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
