const { ccclass, property } = cc._decorator;

@ccclass
export default class WaterClass extends cc.Component {
  @property(cc.Node)
  seaSprite: cc.Node = null;

  createRippleEffect() {
    // Kiểm tra xem seaSprite đã được gán chưa
    if (!this.seaSprite) {
      cc.error("Không có seaSprite được gán.");
      return;
    }

    // Tạo tween để thay đổi scale của sprite nước biển
    let scaleDown = cc.scaleTo(1, 0.8); // Đổi scale về 80% trong 1 giây
    let scaleUp = cc.scaleTo(1, 1); // Trở về scale ban đầu trong 1 giây

    // Tạo sequence để lặp lại vô hạn
    let sequence = cc.sequence(scaleDown, scaleUp);
    let repeatAction = sequence.repeatForever();

    // Áp dụng tween vào node seaSprite
    this.seaSprite.runAction(repeatAction);
  }

  start() {
    // Gọi hàm tạo hiệu ứng co bóp khi start scene
    // this.createRippleEffect();
  }

  // update (dt) {}
}
