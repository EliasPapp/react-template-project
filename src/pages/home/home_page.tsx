import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import GlobalLoading from '../../components/global_loading/global_loading';
import { hideGlobalLoading, showGlobalLoading } from '../../store/actions/action_global_loading';
import { connect } from 'react-redux';

type Params = {
  hideGlobalLoading: () => void
  showGlobalLoading: () => void
}

const HomePage: React.FC<Params> = ({ showGlobalLoading, hideGlobalLoading }) => {
  return (
    <div className="App">
      <img src={logo} height="100" width="100" className="App-logo" alt="logo" />
      <Link to="/help">Heeeeelp</Link>
      <button onClick={showGlobalLoading}>SHOW LOADING</button>
      <button onClick={hideGlobalLoading}>HIDE LOADING</button>
      <GlobalLoading />               
    </div>
  );         
}

export default connect(null, { hideGlobalLoading, showGlobalLoading })(HomePage);