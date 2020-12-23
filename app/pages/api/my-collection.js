import firebase from '../../lib/firebase'

export default (req, res) => {
    firebase.firestore().collection('my-collection').doc(req.query.stats).get()
    .then((doc) => {
        res.json(doc.data());
    })
    .catch((error) => {
        res.json({ error });
    });
}
