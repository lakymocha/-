// pages/addlist/addlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: false,
    text: "",
    list:[]
  },
  //输入框输入时触发的事件
  getvalue: function (e) {
    //储存输入框的值在data中
    this.setData({
      text: e.detail.value
    })
    //判断输入框是否有值，如果有就显示可点按钮，反之显示禁点按钮
    if(e.detail.value){
      this.setData({
        flag:true
      })
    }else{
      this.setData({
        flag:false
      })
    } 
  },
  submit:function () {
    let newitem={
      text:this.data.text,
      boo:false
    }
    this.data.list.push(newitem)
   wx.setStorage({
     data: this.data.list,
     key: 'newlist',
   })
   this.setData({
     text:""
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})