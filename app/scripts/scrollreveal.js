'use strict'
/**
 * 页面加载自动播放动画
 *
 * @param {number} autop 顺序播放， 如果不顺序播放{null}
 * @param {number} execution_time 播放时间, 默认{1500}
 * @param {string} position 播放位置，默认{right}
 */
function scrollrevealDEMO(autop, execution_time, position) {
  // 是否自动播放动画
  this.autoplay = autop || 30;
  this.execution_time = execution_time || 1500;
  this.position = position || 'right';

  this.sr = ScrollReveal({ reset: true });
}

scrollrevealDEMO.prototype.auto = function () {
  this.sr.reveal('.anm-default', {
    origin: this.position,
    duration: this.execution_time,
    reset: true
  }, this.autoplay);
}

scrollrevealDEMO.prototype.hand = function () {

}
