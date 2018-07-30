import React, { Component } from 'react'
import { connect } from 'dva';

// 链接redux和使用dva-loading
@connect(({testCycle, loading}) => ({
  testCycle,
  loading: loading.effects['testCycle/fetch'],
}))
export default class testCycle extends Component {
  // mounting
  constructor(props) {
    super(props)
    this.state = {
      init: 1
    }
  }

  // 覆盖传统componentWillReceiveProps
  // 该生命周期在mouting和updating阶段都会触发
  // 如果需要更新state来响应props的更改， 
  // 则可以进行this.props和nextProps的比较， 并在此方法中使用this.setState()。
  // @return {null} 表示对该当前组件state不做更新
  // @return {object} 表示用该值作为组件的state
  static getDerivedStateFromProps(nextProps, prevState) { 
    console.log('getDerivedStateFromProps') 
    console.dir(nextProps)
    console.dir(prevState)
    return null
  }

  // 非法
  // componentWillMount() { console.log('componentWillMount') }

  componentDidMount() { console.log('componentDidMount') }

  // updating
  // @return {boolean}
  shouldComponentUpdate(nextProps, nextState) { console.log('shouldComponentUpdate'); return true}

  // 非法
  // componentWillReceiveProps(nextProps, b) { 
  //   console.log('componentWillReceiveProps:', nextProps, b)
  //   // console.log(nextProps)
  //   // console.log(b)
  // }

  // 覆盖旧版componentWillUpdateS
  // @return 该返回值会作为componentDidUpdate的第三个参数传入
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    console.dir(prevProps)
    console.dir(prevState)
    return null
  }

  // 非法
  // componentWillUpdate(nextProps, nextState) { console.log('componentWillUpdate') }

  componentDidUpdate(prevProps, prevState, snapshot) { console.log('componentDidUpdate') }

  // unmounting
  componentWillUnmount() { console.log('componentWillUnmount') }

  // Error Handling
  componentDidCatch(error, info) { console.log('error get') }

  testProps = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'testCycle/fetch',
    }).then(() => {
      console.log(`getRes:`, this.props)
    });
  }

  render() {
    console.log('render')
    return (
      <div>
        testCycle
        <div>
          <button onClick={this.testProps}>getNewProps</button>
        </div>
      </div>
    )
  }
}