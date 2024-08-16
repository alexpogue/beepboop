export const Recording = {
  pressAndReleaseTimestamps: [],
  beginTime: null,
  setBegin: function(msSinceEpoch) {
    this.beginTime = msSinceEpoch;
  },
  recordPress(msSinceEpoch) {
    this.recordAction("press", msSinceEpoch);
  },
  recordRelease(msSinceEpoch) {
    this.recordAction("release", msSinceEpoch);
  },
  recordAction(type, msSinceEpoch) {
    if (msSinceEpoch == null) {
      msSinceEpoch = Date.now();
    }
    this.pressAndReleaseTimestamps.push({type: type, timestamp: msSinceEpoch});
  },
  toJson() {
    return JSON.stringify(this.pressAndReleaseTimestamps);
  }
}
