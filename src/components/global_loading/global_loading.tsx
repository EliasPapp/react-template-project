import { connect } from 'react-redux';

type Params = {
  visible?: boolean
}

const GlobalLoading: React.FC<Params> = ({ visible }) => {
  return (
    <div style={{ left: '45vw', top: '45vh', position: 'absolute' }}>
      {visible ? 'LOADING' : ''}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return state.reducerGlobalLoading
}

export default connect(mapStateToProps, {})(GlobalLoading);