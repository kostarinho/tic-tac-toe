import React, { useContext } from "react";
import { GameContext } from "./context";

export const connect =
  (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    return (props) => {
      const { state, dispatch } = useContext(GameContext);
      return (
        <WrappedComponent
          {...props}
          {...(mapStateToProps(state) || {})}
          {...(mapDispatchToProps(dispatch) || {})}
        />
      );
    };
  };

export const withProps =
  (context, selectors = {}, actionCreators = {}) =>
  (Component) =>
  (props) => {
    const { state, dispatch } = useContext(context);
    const stateProps = Object.entries(selectors).reduce(
      (stprops, [propName, selector]) => ({
        ...stprops,
        [propName]: selector(state, props),
      }),
      {}
    );

    const dispatchProps = Object.entries(actionCreators).reduce(
      (stprops, [key, action]) => ({
        ...stprops,
        [key]: (payload) => dispatch(action(payload, props)),
      }),
      {}
    );

    return <Component {...props} {...stateProps} {...dispatchProps} />;
  };
