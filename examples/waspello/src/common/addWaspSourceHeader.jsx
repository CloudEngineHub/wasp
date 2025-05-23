import WaspSourceHeader from "./WaspSourceHeader";

const addWaspSourceHeader = (Component) => {
  return function AddHeader(props) {
    return (
      <>
        <WaspSourceHeader name="Waspello" />
        <Component {...props} />
      </>
    );
  };
};

export default addWaspSourceHeader;
