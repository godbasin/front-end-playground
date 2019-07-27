---
title: 5. 操作 operation
---

第五章主要介绍操作(operation)。

<!--more-->

## 鼠标获取刚体

### 鼠标获取刚体--对刚体进行操作的前提

Box2D 中，只要提供一个 AABB 的坐标，b2World 就可以返回一个数组，用于保存所有相交于此 AABB 的形状。

所以，为了利用鼠标获取刚体，首先要画出一个小区域，这个区域小到近似于一个点，然后遍历整个世界的形状，判断鼠标点击位置所画出的小区域是否与某个形状重合，如果有重合，再由这个形状得到这个形状所属的刚体。

```javascript
function GetBodyAtMouse() {
  //首先创建一个近似于点的小区域
  var mousePVec = new b2Vec2(mousedwX, mousedwY);
  //利用b2Vec2定义一个矢量，用来保存鼠标点击的点
  var aabb = new b2AABB();
  //利用b2AABB创建一个环境
  aabb.minVertex.Set(mousePVec.x - 0.001, mousePVec.y - 0.001);
  aabb.maxVertex.Set(mousePVec.x + 0.001, mousePVec.y + 0.001);
  //设置aabb的左上角及右下角坐标，这里是以鼠标点击位置为中心创建了一个长、宽均为0.002的矩形区域

  //然后查询与指定区域有重叠的刚体
  var k_maxCount = 10; //设定所要查找形状的数量，注意合理设置其大小，过大会影响运行速度
  var shapes = new Array(); //保存查找到的与已知边界盒相交的形状
  var count = world.Query(aabb, shapes, k_maxCount); //在世界中查找与边界盒相交的maxCount个形状，并返回边界盒区域内实际包含的形状的个数

  var findBody = null; //首先设定没有找到物体
  for (var i = 0; i < count; ++i) {
    if (shapes[i].GetBody().IsStatic() == false) {
      //条件假定查找到的形状不是静态刚体，比如墙
      var tShape = shapes[i]; //将查找到的形状赋给tShape变量
      var inside = tShape.GetBody(); //将tShape对应的刚体赋给inside
      if (inside) {
        //如果inside这个刚体存在
        //那么返回这个刚体，并跳出遍历
        findBody = tShape.GetBody();
        break;
      }
    }
  }
  return findBody;
}
```

## 获取参与碰撞的刚体

### m_contactList

m_contactList 的类型是 b2ContactNode，取得附加在该物体上的碰撞表，所有碰撞都保存在这个列表里。
同 ShapeList 相比，ShapeList 保存的是世界中所有的形状，而 contactlist 保存的是参与碰撞的形状。

```javascript
function getContactInf() {
  for (
    var b = world.m_contactList;
    b;
    b = b.m_next // 遍历contactlist所有世界，直到b不存在，跳出循环
  ) {
    // 将b里的两个刚体分别定义为b1和b2
    var b1 = b.m_shape1.m_body;
    var b2 = b.m_shape2.m_body;

    // 向下执行的条件是b1和b2不同，且不是三面挡板（BodyTop/BodyLeft/BodyRight）
    if (
      b1 != Body2 &&
      b1 != BodyTop &&
      b1 != BodyLeft &&
      b1 != BodyRight &&
      b2 != Body2 &&
      b2 != BodyTop &&
      b2 != BodyLeft &&
      b2 != BodyRight
    ) {
    }
    // 备注：得到了参与碰撞的刚体，则可以对其中的所有刚体的操作，这个发挥的空间留给游戏开发过程
  }
}
```

### GetContactList

GetContactList 其实与上面的作用效果一样，而且其判断接触的逻辑思路也是一致的。

```javascript
for (var cn = world.GetContactList(); cn != null; cn = cn.GetNext()) {
  var body1 = cn.GetShape1().GetBody();
  var body2 = cn.GetShape2().GetBody();

  // 处理判断发生碰撞的两个刚体是不是分别为箱子和墙壁
  if ((body1 == box && body2 == wall) || (body2 == box && body1 == wall)) {
    // 进行逻辑处理
  }
}
```

## 获取刚体的各属性

### `Body.Get属性名()`

在实际编程中，往往需要得到一些关于刚体的信息、数据等，以便下一步对刚体进行一系列操作。
下面代码中给出了获取某些数据的方法，还有一些设置刚体属性的语句。语法格式一般为 Body.Get 属性名()。

```javascript
function showAllFuc() {
  //获得刚体位置
  var OriginPosition = new b2Vec2(); //利用b2Vec2定义一个起始位置的二维矢量
  OriginPosition = slectBody.GetOriginPosition(); //获取刚体坐标原点，对称图形的原点即中心点
  alert(OriginPosition.x + "," + OriginPosition.y); //显示该坐标

  var mass;
  mass = slectBody.GetMass(); //获取刚体质量

  var inertia;
  inertia = slectBody.GetInertia(); //获取惯性，类似力的大小
  alert(inertia);

  var worldPoint;
  var localPoint = new b2Vec2(100, 100);
  worldPoint = slectBody.GetWorldPoint(localPoint); //由局部坐标得到世界坐标
  alert(
    slectBody.GetCenterPosition().x + "," + slectBody.GetCenterPosition().y
  ); //世界坐标=局部坐标+刚体中心点坐标
  alert(localPoint.x + "," + localPoint.y);
  alert(worldPoint.x + "," + worldPoint.y);

  var localVector;
  var worldVector = new b2Vec2(
    slectBody.GetCenterPosition().x,
    slectBody.GetCenterPosition().y
  );
  localVector = slectBody.GetLocalVector(worldVector);
  alert(worldVector.x + "," + worldVector.y);
  alert(localVector.x + "," + localVector.y);

  var staticFlage; //定义一个静态标志
  staticFlage = slectBody.IsStatic(); //判断选中物体是否为静止不可移动的刚体，并将结果反馈给静态标志
  alert(staticFlage);

  var frozenFlage;
  frozenFlage = slectBody.IsFrozen();
  alert(frozenFlage);

  var sleepingFlage; //定义一个睡眠标志
  sleepingFlage = slectBody.IsSleeping(); //判断选中物体是否已进入睡眠状态，并将结果反 馈给静态标志
  alert(sleepingFlage);

  var allowSleepingFlage = 1; //定义一个允许睡眠的标志，并设定初值为1，即允许睡眠
  slectBody.AllowSleeping(allowSleepingFlage); //根据标志判断是否允许睡眠，是则可进入睡眠状态，否则唤醒
  slectBody.WakeUp(); //唤醒睡眠刚体，对于非静止刚体，只有碰撞才能自动唤醒，对其赋予速度、力等值时，需要先行唤醒才有效果

  var shapeList = new Array();
  shapeList = slectBody.GetShapeList(); //数组内保存选中刚体的shapelist；直接用m_shapeList效果一样,列表里是一个个的shape，shape是一个类，其表面形状类型的属性为shape.m_type
  slectBody.Destroy(); //在世界里销毁该刚体
  slectBody.GetNext(); //获取下一刚体，在world里刚体储存在m_BodyList里

  var otherBody = Body4;
  var conectJuge;
  conectJuge = slectBody.IsConnected(otherBody); //判定选定的刚体是否与另一刚体相连，相连则不碰撞
  alert(conectJuge);
}
```

## 为刚体设置属性

### 设置刚体的属性

创建一个刚体之后，还可以对它进行许多操作，比如设置质量，访问其位置和速度，施加力，以及转换点和向量等。

```javascript
// 设置刚体的属性
var position = new b2Vec2(200, 100); //定义一个点坐标（200，100）
var rotation = 0.3 * Math.PI; //定义一个弧度值
spclBodyDef.position.Set(basicX, basicY); //设置物体的初始位置置，括号内是矢量坐标
slectBody.SetCenterPosition(position, rotation); //设置选中的刚体的中心位置及其旋转弧度

var CenterPosition = new b2Vec2();
CenterPosition = slectBody.GetCenterPosition();
alert(CenterPosition.x + "," + CenterPosition.y);

var RotationMatrix = new b2Mat22();
RotationMatrix = slectBody.GetRotationMatrix(); //获取一个2X2的刚体旋转矩阵
alert(RotationMatrix);

var LinearVelocity = new b2Vec2(500, -500); //定义一个线速度
slectBody.WakeUp(); //唤醒选中物体，刷新数据
slectBody.SetLinearVelocity(LinearVelocity); //设定选中物体的线速度

var LinearVelocity = new b2Vec2();
LinearVelocity = slectBody.GetLinearVelocity(); //获取选中刚体的线速度向量
alert(LinearVelocity.x + "," + LinearVelocity.y);

var AngularVelocity = 100; //定义一个角速度
slectBody.WakeUp();
slectBody.SetAngularVelocity(AngularVelocity); //设定选中物体的角速度

var AngularVelocity;
AngularVelocity = slectBody.GetAngularVelocity(); //获取选中刚体的角速度向量
alert(AngularVelocity);

var force = new b2Vec2(10000, 1000000000); //定义一个力的大小及方向
var point = new b2Vec2(
  slectBody.GetCenterPosition().x,
  slectBody.GetCenterPosition().y
);
slectBody.WakeUp();
//在指定点给物体施加一个已知大小与方向的力
//施加一个力,需要很大才有效果，不如直接给定线速度，一般给力据F=ma给定
slectBody.ApplyForce(force, point);
alert(slectBody.m_linearVelocity);

var torque = 100000000000; //定义一个力矩
slectBody.WakeUp();
slectBody.ApplyTorque(torque); //设定选定物体的力矩，数值较大，可以通过设定角速度大小实现相同功能

var impulse = new b2Vec2(0, 100000000); //定义一个物体的冲量
var point = new b2Vec2(
  slectBody.GetCenterPosition().x,
  slectBody.GetCenterPosition().y
);
slectBody.WakeUp();
//在指定点给物体施加一个已知大小与方向的冲量，一般在初始的时候给定，以便决定初始运动
slectBody.ApplyImpulse(impulse, point);
```

## 绘制刚体

---

### 绘制刚体图片

1. 在页面中加入图片，并捆绑 id

```html
<img id="box" src="images/box.png" />
```

2. 设置形状定义的 userData 为图片 id

```javascript
boxSd.userData = document.getElementById("box");
```

3. 在绘制世界时，将图片信息绘制进去

```javascript
// 绘画世界
function drawWorld(world, context) {
  for (var b = world.m_bodyList; b != null; b = b.m_next) {
    for (var s = b.GetShapeList(); s != null; s = s.GetNext()) {
      if (s.GetUserData() != undefined) {
        // 使用数据包括图片
        var img = s.GetUserData();

        // 图片的长和宽
        var x = s.GetPosition().x;
        var y = s.GetPosition().y;
        var topleftX = -$(img).width() / 2;
        var topleftY = -$(img).height() / 2;

        context.save();
        context.translate(x, y);
        context.rotate(s.GetBody().GetRotation());
        context.drawImage(img, topleftX, topleftY);
        context.restore();
      }
      drawShape(s, context);
    }
  }
}
```

注意，以上的方法只试用于圆形和矩形，多边形待验证。

### 绘制刚体形状

有时候我们需要将刚体和关节的形状绘制出来：

```javascript
// 从draw_world.js里面引用的绘画功能
function drawShape(shape, context) {
  context.strokeStyle = "#003300";
  context.beginPath();
  switch (shape.m_type) {
    // 绘制圆
    case b2Shape.e_circleShape:
      var circle = shape;
      var pos = circle.m_position;
      var r = circle.m_radius;
      var segments = 16.0;
      var theta = 0.0;
      var dtheta = (2.0 * Math.PI) / segments;
      // 画圆圈
      context.moveTo(pos.x + r, pos.y);
      for (var i = 0; i < segments; i++) {
        var d = new b2Vec2(r * Math.cos(theta), r * Math.sin(theta));
        var v = b2Math.AddVV(pos, d);
        context.lineTo(v.x, v.y);
        theta += dtheta;
      }
      context.lineTo(pos.x + r, pos.y);

      // 画半径
      context.moveTo(pos.x, pos.y);
      var ax = circle.m_R.col1;
      var pos2 = new b2Vec2(pos.x + r * ax.x, pos.y + r * ax.y);
      context.lineTo(pos2.x, pos2.y);
      break;
    // 绘制多边形
    case b2Shape.e_polyShape:
      var poly = shape;
      var tV = b2Math.AddVV(
        poly.m_position,
        b2Math.b2MulMV(poly.m_R, poly.m_vertices[0])
      );
      context.moveTo(tV.x, tV.y);
      for (var i = 0; i < poly.m_vertexCount; i++) {
        var v = b2Math.AddVV(
          poly.m_position,
          b2Math.b2MulMV(poly.m_R, poly.m_vertices[i])
        );
        context.lineTo(v.x, v.y);
      }
      context.lineTo(tV.x, tV.y);
      break;
  }
  context.stroke();
}
```

## 绘制关节

### 绘制关节

- 在绘制世界时加入关节的判断和绘制调用

```javascript
function drawWorld(world, context) {
  for (var j = world.m_jointList; j; j = j.m_next) {
    // 绘制关节
    drawJoint(j, context);
  }
  for (var b = world.m_bodyList; b; b = b.m_next) {
    for (var s = b.GetShapeList(); s != null; s = s.GetNext()) {
      // 绘制刚体形状
      drawShape(s, context);
    }
  }
}
```

- 绘制关节

```javascript
function drawJoint(joint, context) {
  var b1 = joint.m_body1;
  var b2 = joint.m_body2;
  var x1 = b1.m_position;
  var x2 = b2.m_position;
  var p1 = joint.GetAnchor1();
  var p2 = joint.GetAnchor2();
  context.strokeStyle = "#00eeee";
  context.beginPath();
  switch (joint.m_type) {
    // 绘制距离关节
    case b2Joint.e_distanceJoint:
      context.moveTo(p1.x, p1.y);
      context.lineTo(p2.x, p2.y);
      break;

    case b2Joint.e_pulleyJoint:
      // TODO
      break;

    default:
      if (b1 == world.m_groundBody) {
        context.moveTo(p1.x, p1.y);
        context.lineTo(x2.x, x2.y);
      } else if (b2 == world.m_groundBody) {
        context.moveTo(p1.x, p1.y);
        context.lineTo(x1.x, x1.y);
      } else {
        context.moveTo(x1.x, x1.y);
        context.lineTo(p1.x, p1.y);
        context.lineTo(x2.x, x2.y);
        context.lineTo(p2.x, p2.y);
      }
      break;
  }
  context.stroke();
}
```
