import firebase from '../config/firebase';

class NocFirebase {
  constructor() {
    this.ref = null;
    this.db = firebase.database();
    this.data = null;
  }

  getBadgetsById(id) {
    this.ref = this.db.ref(`tenants/${id}/badges`);

    return new Promise((resolve, reject) => {
      this.ref.on(
        'value',
        snapshot => {
          const value = snapshot.val();
          this.data = value;
          resolve(value);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  refOnChange(calcBadges) {
    this.ref.on(
      'child_changed',
      snapshot => {
        const change = snapshot.val();
        const update = { ...this.data, [snapshot.ref.key]: change };
        calcBadges(update);
      },
      error => {
        console.log(error);
      }
    );
  }

  cleanRef() {
    this.ref.off();
  }
}

export default NocFirebase;
