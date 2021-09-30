import React from 'react'
import { SelectProfileContainer } from './profiles';
import { FirebaseContext} from '../context/firebase'
import { Loading } from '../components'

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const { firebase } = React.useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {}; 

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    loading ? (<Loading src={user.photoURL} />) : null)
   :
    (<SelectProfileContainer user={user} setProfile={setProfile}/>);
}