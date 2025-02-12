---
title: 前端性能优化--FPS页面流畅度
---

之前分享过不少关于前端卡顿检测的内容，实际上在前端应用里，FPS 也是我们常用的一个页面流畅度的指标。

除了前面介绍的卡顿检测之外，我们还可以使用 FPS 来辅助定义用户体验。

## 前端页面 FPS

我们都知道，帧率（英语：frame rate）是用于测量显示帧数的度量。

FPS 则是帧率的测量单位，为“每秒显示帧数”（frame per second，FPS）或“赫兹”，一般来说 FPS 用于描述影片、电子绘图或游戏每秒播放多少帧。

前面[《前端性能优化--任务管理和调度》](./front-end-performance-task-schedule.md)一文介绍过，浏览器的“一帧”流程为：

![](https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/life-of-a-frame.jpg)

1. 用户事件。
2. 一个宏任务。
3. 队列中全部微任务。
4. `requestAnimationFrame`。
5. 浏览器重排/重绘。
6. `requestIdleCallback`。

因此，在前端开发中，我们常常会使用`requestAnimationFrame`来计算前端页面的 FPS。

### 每秒帧数计算 FPS

既然知道浏览器中每“一帧”里都会执行`requestAnimationFrame`，那么 FPS 的计算也很简单：计算一秒内`requestAnimationFrame`的执行次数 n，则 FPS 为 n。

```ts
let frameCount = 0;
let lastTime = performance.now();

function loop() {
  let now = performance.now();
  frameCount++;

  // 超过 1s，重置计算下一秒
  if (now > lastTime + 1000) {
    let fps = Math.round((frameCount * 1000) / (now - lastTime));
    console.log(`${now} 1S 内 FPS：`, fps);
    frameCount = 0;
    lastTime = now;
  }

  window.requestAnimationFrame(loop);
}

loop();
```

通过这种方式，我们可以获取每秒平均的 FPS，但对于 1s 内的一些卡顿可能检测的不算灵敏，这种情况我们可以考虑用另外一种计算方式。

### rAF 间隔计算 FPS

除了计算每秒的渲染次数，我们还有另外一种计算方式：假设两次`requestAnimationFrame`间的执行间隔为 t 毫秒，那么 FPS 可以为 1000 / t。

这种方式的好处是，我们可以更准确获取到整个监测过程中的页面流畅度。

```ts
let lastTime = performance.now();

function loop() {
  let now = performance.now();

  let fps = Math.round(1000 / (now - lastTime));
  console.log(`${now} FPS：`, fps);

  window.requestAnimationFrame(loop);
}

loop();
```

一般来说，由于`requestAnimationFrame`的执行次数实在太多了，如果逻辑太多则反而会导致性能问题。

因此，很多时候我们并不会在整个页面打开过程中都启动 FPS 检测，会在某些场景下才启动 FPS 监测。

## FPS 监测模块

由于用户并不是时时刻刻都在操作页面，不进行操作时，页面的流畅度便有些无从谈起。

所以，我们可以局部监测用户行为和页面行为，在需要的时候启动 FPS 监控：

- 页面滚动
- 用户编辑输入
- 页面渲染过程

为此，我们需要提供一个 FPS 监测模块，包括启动和结束统计某阶段 FPS 的能力：

```ts
class Fps {
  private running = false;
  private last = 0;
  private timer = 0;
  private record: number[] = [];

  /**
   * 启动 fps 监听
   */
  public start = () => {
    if (this.running) {
      console.warn("已经启动 fps 监听");
      return;
    }
    this.running = true;
    this.last = performance.now();
    this.timer = requestAnimationFrame(this.run);
  };

  /**
   * 结束 fps 监听
   */
  public end = () => {
    window.cancelAnimationFrame(this.timer);
    this.running = false;
    if (this.record.length > 0) {
      this.calculateFPS();
      this.record.length = 0;
    }
  };

  private run = () => {
    const now = performance.now();
    const diff = now - this.last;
    this.record.push(diff);
    this.last = now;
    this.timer = requestAnimationFrame(this.run);
  };

  /**
   * 结算该阶段 FPS
   */
  private calculateFPS = () => {
    const record = this.record;
    const avageFPS = record.reduce((a, b) => a + b, 0) / record.length;

    console.log(`该阶段平均 FPS：${avageFPS}`);
  };
}
```

前面也说过，我们希望更准确获取到整个监测过程中的页面流畅度，而不只是一个简单的平均值。因此，我们可以统计该阶段中 FPS 整体情况：

```ts
export function getIntervalFPS(recore: number[]) {
  const internalMap = {
    "0-10": 0,
    "11-20": 0,
    "21-30": 0,
    "31-40": 0,
    "41-50": 0,
    "51-60": 0,
    ">60": 0,
  };
  let maxFps = 0;

  recore.forEach((interval) => {
    const value = Math.round(1000 / interval);
    maxFps = Math.max(value, maxFps);
    switch (true) {
      case value <= 10:
        internalMap["0-10"] += 1;
        break;
      case value <= 20:
        internalMap["11-20"] += 1;
        break;
      case value <= 30:
        internalMap["21-30"] += 1;
        break;
      case value <= 40:
        internalMap["31-40"] += 1;
        break;
      case value <= 50:
        internalMap["41-50"] += 1;
        break;
      case value <= 60:
        internalMap["51-60"] += 1;
        break;
      default:
        internalMap[">60"] += 1;
        break;
    }
  });

  return {
    internalMap,
    maxFps,
  };
}
```

通过这样的方式，我们可以获得某个监控阶段期间，是否存在交互不流畅的情况，而不仅是一个总的平均值。

## 结束语

FPS 检测和卡顿检测其实原理都很相似，卡顿可能会监测整个页面生命周期，而 FPS 则用来监控页面滚动、用户交互、页面渲染等流程。

两者相辅相成，可以从不同的维度共同搭建前端页面的流畅度。
