export class Update {
  constructor(payload) {
    this.payload = payload;
  }
}

//数据结构是单链表 更新队列
export class UpdateQueue {
  constructor() {
    this.firstUpdate = null;
    this.lastUpdate = null;
  }
  enqueueUpdate(update) {
    if (this.lastUpdate === null) {
      this.firstUpdate = this.lastUpdate = update;
    } else {
      this.lastUpdate.nextUpdate = update;
      this.lastUpdate = this.lastUpdate.nextUpdate
    }
  }
  forceUpdate(state) {
    let currentUpdate = this.firstUpdate;
    while (currentUpdate) {
      let nextState = typeof currentUpdate.payload === 'function' ? currentUpdate.payload(state) : currentUpdate.payload;
      state = { ...state, ...nextState };
      currentUpdate = currentUpdate.nextUpdate;
    }
    this.firstUpdate = this.lastUpdate = null;
    return state;
  }
}