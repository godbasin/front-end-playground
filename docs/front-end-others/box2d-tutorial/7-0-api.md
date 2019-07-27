---
title: 7. api
---

第七章主要介绍 api。

<!--more-->

## Box2D api

### Box2D 分类

Box2D 所有的 api 可参照[Box2D_api](http://www.kyucon.com/doc/box2d/)。

可发现，Box2D 具体分为三大类：

- 碰撞类(collision)：碰撞模块定义了形状，broad-phase 算法，碰撞的功能/查询
- 基础类(common)：包括基础系统配置、数据类型、基础数学运算
- 动力学类(dynamics)：包括模拟物理世界，刚体(body)，接触管理(contacts)，以及关节(joint)

具体的说明是个人整理的，有些参照网上资源，可能不完整且有偏差。

## common

### math

- `b2Vec2`：二维向量
- `b2Mat22`：一个由两个 b2Vec2 组成的 2\*2 方阵，可直接由两个 b2Vec2（col1、col2）构造或者由一个角度值构造
- `b2Math`：基本数学运算，如向量和矩阵的计算、产生随机数等

### bsSettings

- `bsSettings`：基础系统配置，如 pi 的值、每秒的时间、每米的大小、睡眠时间等等

## collisions

### shapes 形状定义

- `b2ShapeDef`：形状定义

  - b2ShapeDef 为形状定义
  - type 来表示形状类型
  - localPosition 来表示当前位置
  - localRotation 来表示当前角度
  - friction、density、restitution 来表示摩擦力、密度、弹性系数
  - categoryBits 和 maskBits 来表示碰撞位及位标识（可以用来过滤一些碰撞）
  - groupIndex 来表示组号，这个组号可以用来过滤还比位标识优先

- `b2CircleDef`：圆形

  - 继承于 b2ShapeDef
  - type 为 e_circleShape
  - 带有一个类型为 float32 的量 radius 来表示半径值

- `b2BoxDef`：矩形

  - 继承于 b2ShapeDef
  - type 为 e\_ boxShape
  - 带有一个类型为 b2Vec2 的量 extents 来表示区域值

- `b2PolyDef`：凸多边形
  - 继承于 b2ShapeDef
  - type 为 e\_ polyShape
  - 带有一个类型为 b2Vec2 的数组 vertices 来表示顶点
  - 带有一个 int32 型的量 vertexCount 来表示顶点数，目前顶点数最多支持 8 个

### 碰撞的功能/查询

- `b2AABB`：AABB 坐标

  - 盒子，由两个向量组成，一个为 minVertex 是最小顶点，另一个为 maxVertex 是最大顶点，通过这两个顶点来表示最为普通的 AABB 框

- `b2OBB`：OBB 坐标
- `b2ContactID`：接触 ID
- `b2ContactPoint`：接触点

### broad-phase 算法

- `b2BroadPhase`：通过使用动态树降低了管理数据方面的开销，极大的降低了调用 narrow-phase 算法的次数

## dynamics

### 刚体

- `b2BodyDef`：

  - 刚体定义结构
  - userData 来表示用户数据
  - shapes 来表示形状队列，目前形状数最大支持 64 个
  - position 来表示当前位置
  - rotation 来表示当前角度
  - linearVelocity 表示线速度
  - angularVelocity 来表示角速度
  - linearDamping 来表示线性阻尼
  - angularDamping 来表示角阻抗
  - allowSleep 来表示是否可以允许休眠
  - isSleeping 来表示是否正在休眠
  - preventRotation 来表示是否防止旋转
  - 支持方法：AddShape(b2ShapeDef\* shape)

- `b2CollisionFilters`：

  - 碰撞过滤是用来防止形状与形状之间进行碰撞的，可以用碰撞种类和组名来区别
  - Box2D 总共提供 16 种碰撞种类，每个形状都可以提定属于什么种类，那么它就可以和其他不同种类的形状碰撞

### 结点(joints)

- `b2DistanceJoint`：距离连接
- `b2DistanceJointDef`：距离连接定义
- `b2GearJoint`：齿轮连接
- `b2GearJointDef`：齿轮连接定义
- `b2Joint`：连接基类
- `b2JointDef`：连接定义基类
- `b2JointEdge`：用于组合刚体或连接到一起.刚体相当于节点,而连接相当于边
- `b2MouseJoint`：鼠标连接
- `b2MouseJointDef`：鼠标连接定义
- `b2PrismaticJoint`：移动连接
- `b2PrismaticJointDef`：移动连接定义
- `b2PulleyJoint`：滑轮连接
- `b2PulleyJointDef`：滑轮连接定义
- `b2RevoluteJoint`：旋转连接
- `b2RevoluteJointDef`：旋转连接定义

### 接触管理(contacts)

- `b2Contact`：管理两个外形接触
- `b2ContactEdge`：接触边用来连接多个物体和接触到一个接触表(物体是一个节点而接触相当于一个接触边)
- `b2ContactResult`：记录接触结果
