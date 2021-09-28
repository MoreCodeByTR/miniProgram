Page({
  data: {
    hasUrl:false,
    url: '',
  },
  scanCode() {
    wx.scanCode({
      success:(res)=>{
        console.log(res)
        let { result } = res;
        console.log(result)
        this.setData({
          url:result,
          hasUrl:true
        })
       
      }
    })
  },
}

)
