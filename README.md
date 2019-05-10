<p align="center">
    <a href="https://www.nervo-js.org" rel="nofollow"><img src="https://raw.githubusercontent.com/SlimMarten/nervo/development/logo.svg?sanitize=true" align="center" width="300"></a>
</p>
<p align="center">
Solid JavaScript Animation Library
</p>
<p align="center">
<a href="https://www.npmjs.com/package/nervo" rel="nofollow"><img src="https://img.shields.io/npm/v/nervo.svg" alt="Slack" data-canonical-src="https://img.shields.io/npm/v/nervo.svg" style="max-width:100%;"></a>
<a href="https://www.npmjs.com/package/nervo" rel="nofollow"><img src="https://img.shields.io/npm/dt/nervo.svg" alt="Slack" data-canonical-src="https://img.shields.io/npm/dt/nervo.svg" style="max-width:100%;"></a>
</p>
</p>

- [About Nervo](#about-nervo)
  - [Installation](#installation)
  - [Import](#import)
- [Tween](#tween)
- [Timeline](#timeline)
- [Spring](#spring)

## About Nervo
Nervo is a solid JavaScript animation library providing basic tweening functionality. It is designed to be flexible, intuitive and easy to learn. Nervo allows you to create single [Tweens](#tween), makes controlling multiple Tweens within [Timelines](#timeline) easy, and provides Springs.

### Installation
```
npm i nervo
```

### Import
```js
import * as Nervo from 'nervo';
```
___

## Tween
A Tween interpolates any numeric value of an object over time. Multiple Tweens can be controlled by [Timelines](#timeline).

### Constructor <!-- omit in toc -->
```js
new Nervo.Tween(from : {}, to : {}, options : {});
```
#### Options <!-- omit in toc -->
autoStart · duration · easing · loop · onComplete · onProgress · scale

> **_Note:_**  For the easing option you can either pass a function or a valid [eases](https://www.npmjs.com/package/eases) string. E.g. »sineOut«.

### Properties <!-- omit in toc -->
- .autoStart
- .currentTime
- .delay
- .duration
- .easing
- .isActive
- .isTween
- .loop
- .object
- .onComplete
- .onProgress
- .options
- .parent
- .scale
- .target
- .type
- .uuid

### Methods <!-- omit in toc -->
- .clone()
- .pause()
- .play()
- .setDelay(delay : number)
- .setDuration(duration : number)
- .setScale(scale : number)
- .start()
- .stop()

___

## Timeline
Timelines control multiple [Tweens](#tween) or Timelines. If you want to add a Tween to a Timeline use the .add() method. As long as there are no options provided, this will add the Tween at the end of the Timeline. See the example below and play with some properties to better understand how Timelines and Tweens work together.

> **_Pro Tip:_**  For even more flexibility in space and time start nesting Timelines!

### Constructor <!-- omit in toc -->
```js
new Nervo.Timeline(children : [], options : {});
```

#### Children <!-- omit in toc -->
An array of Tweens and Timelines that will be added to the Timeline.

#### Options <!-- omit in toc -->
autoStart · easing · loop · onComplete · onProgress · scale

### Properties <!-- omit in toc -->
- .autoStart
- .children
- .currentTime
- .delay
- .duration
- .easing
- .isActive
- .isTimeline
- .loop
- .onComplete
- .onProgress
- .options
- .parent
- .scale
- .type
- .uuid

### Methods <!-- omit in toc -->
- .add()
- .clone()
- .pause()
- .play()
- .remove(object : any)
- .setDelay(delay : number)
- .setScale(scale : number)
- .start()
- .stop()
___

## Spring
Springs animate in a more physical and natural way. They are durationless and accumulative calculated. As soon as a Spring has completed it will become inactive. To update a Spring use .setTarget(). Click and drag somewhere on the canvas below and play with properties like .stiffness or .damping.

> **_Note:_**  Negative and too high values can lead to undesired results. Undamped or overdamped Springs won't complete or complete after a long time.

### Constructor <!-- omit in toc -->
```js
new Nervo.Spring(object : {}, target : {}, options : {});
```

#### Options <!-- omit in toc -->
autoStart · damping · stiffness

### Properties <!-- omit in toc -->
- .autoStart
- .damping
- .isActive
- .isSpring
- .object
- .onComplete
- .onProgress
- .options
- .stiffness
- .target
- .type
- .uuid

### Methods <!-- omit in toc -->
- .disable()
- .enable()
- .setTarget(target : any)