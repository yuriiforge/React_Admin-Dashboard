import Single from '../../components/Single/Single';
import { singleUser } from '../../data';
import './userDetails.scss';

const UserDetails = () => {
  return (
    <div className="userDetails">
      <Single {...singleUser} />
    </div>
  );
};

export default UserDetails;
