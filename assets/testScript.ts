// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class TestClass extends cc.Component {
  @property(sp.Skeleton)
  skeleton: sp.Skeleton = null;

  onLoad() {
    // console.log(this.skeleton);
    // if (this.skeleton) {
    //   this.skeleton.setAnimation(0, "idle", true);
    // }
    let skeleton: sp.Skeleton = this.node.getComponent(sp.Skeleton);
    console.log(skeleton);
    console.log(skeleton.setAnimation);
    skeleton.setSkin("1");
    skeleton.setAnimation(1, "idle", true);
    setTimeout(() => {
      skeleton.clearTrack(1);
    }, 5000);
  }

  // update (dt) {}
}
