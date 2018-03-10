'use strict';

// GET请求
function GET(requestHandler) {
  if (typeof requestHandler === 'string') {
    requestHandler = {
      url: String(requestHandler),
      params: {}
    };
  }
  return request('GET', requestHandler);
}
// POST请求
function POST(requestHandler) {
  return request('POST', requestHandler);
}
// request
function request(method, requestHandler) {
  // 加密
  var params = requestHandler.params;
  wx.showLoading && wx.showLoading({ title: 'Loading...' });
  return new Promise(function (resolve, reject) {
    wx.request({
      url: requestHandler.url,
      data: params,
      method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function success(res) {
        //解密
        resolve(res.data);
      },
      fail: function fail() {
        reject('Network request failed');
      },
      complete: function complete() {
        wx.hideLoading && wx.hideLoading();
      }
    });
  });
}

module.exports = {
  get: GET,
  post: POST
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuanMiXSwibmFtZXMiOlsiR0VUIiwicmVxdWVzdEhhbmRsZXIiLCJ1cmwiLCJTdHJpbmciLCJwYXJhbXMiLCJyZXF1ZXN0IiwiUE9TVCIsIm1ldGhvZCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiY29tcGxldGUiLCJoaWRlTG9hZGluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsU0FBU0EsR0FBVCxDQUFjQyxjQUFkLEVBQThCO0FBQzVCLE1BQUksT0FBT0EsY0FBUCxLQUEwQixRQUE5QixFQUF3QztBQUN0Q0EscUJBQWlCO0FBQ2ZDLFdBQUtDLE9BQU9GLGNBQVAsQ0FEVTtBQUVmRyxjQUFRO0FBRk8sS0FBakI7QUFJRDtBQUNELFNBQU9DLFFBQVEsS0FBUixFQUFlSixjQUFmLENBQVA7QUFDRDtBQUNEO0FBQ0EsU0FBU0ssSUFBVCxDQUFlTCxjQUFmLEVBQStCO0FBQzdCLFNBQU9JLFFBQVEsTUFBUixFQUFnQkosY0FBaEIsQ0FBUDtBQUNEO0FBQ0Q7QUFDQSxTQUFTSSxPQUFULENBQWtCRSxNQUFsQixFQUEwQk4sY0FBMUIsRUFBMEM7QUFDeEM7QUFDQSxNQUFJRyxTQUFTSCxlQUFlRyxNQUE1QjtBQUNBSSxLQUFHQyxXQUFILElBQWtCRCxHQUFHQyxXQUFILENBQWUsRUFBQ0MsT0FBTyxZQUFSLEVBQWYsQ0FBbEI7QUFDQSxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENMLE9BQUdILE9BQUgsQ0FBVztBQUNUSCxXQUFLRCxlQUFlQyxHQURYO0FBRVRZLFlBQU1WLE1BRkc7QUFHVEcsY0FBUUEsTUFIQyxFQUdPO0FBQ2hCO0FBQ0FRLGVBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QjtBQUNBSixnQkFBUUksSUFBSUYsSUFBWjtBQUNELE9BUlE7QUFTVEcsWUFBTSxnQkFBWTtBQUNoQkosZUFBTyx3QkFBUDtBQUNELE9BWFE7QUFZVEssZ0JBQVUsb0JBQVk7QUFDcEJWLFdBQUdXLFdBQUgsSUFBa0JYLEdBQUdXLFdBQUgsRUFBbEI7QUFDRDtBQWRRLEtBQVg7QUFnQkQsR0FqQk0sQ0FBUDtBQWtCRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxPQUFLdEIsR0FEVTtBQUVmdUIsUUFBTWpCO0FBRlMsQ0FBakIiLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdFVOivt+axglxuZnVuY3Rpb24gR0VUIChyZXF1ZXN0SGFuZGxlcikge1xuICBpZiAodHlwZW9mIHJlcXVlc3RIYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgIHJlcXVlc3RIYW5kbGVyID0ge1xuICAgICAgdXJsOiBTdHJpbmcocmVxdWVzdEhhbmRsZXIpLFxuICAgICAgcGFyYW1zOiB7fVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVxdWVzdCgnR0VUJywgcmVxdWVzdEhhbmRsZXIpXG59XG4vLyBQT1NU6K+35rGCXG5mdW5jdGlvbiBQT1NUIChyZXF1ZXN0SGFuZGxlcikge1xuICByZXR1cm4gcmVxdWVzdCgnUE9TVCcsIHJlcXVlc3RIYW5kbGVyKVxufVxuLy8gcmVxdWVzdFxuZnVuY3Rpb24gcmVxdWVzdCAobWV0aG9kLCByZXF1ZXN0SGFuZGxlcikge1xuICAvLyDliqDlr4ZcbiAgbGV0IHBhcmFtcyA9IHJlcXVlc3RIYW5kbGVyLnBhcmFtc1xuICB3eC5zaG93TG9hZGluZyAmJiB3eC5zaG93TG9hZGluZyh7dGl0bGU6ICdMb2FkaW5nLi4uJ30pXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IHJlcXVlc3RIYW5kbGVyLnVybCxcbiAgICAgIGRhdGE6IHBhcmFtcyxcbiAgICAgIG1ldGhvZDogbWV0aG9kLCAvLyBPUFRJT05TLCBHRVQsIEhFQUQsIFBPU1QsIFBVVCwgREVMRVRFLCBUUkFDRSwgQ09OTkVDVFxuICAgICAgLy8gaGVhZGVyOiB7fSwgLy8g6K6+572u6K+35rGC55qEIGhlYWRlclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAvL+ino+WvhlxuICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVqZWN0KCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJylcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB3eC5oaWRlTG9hZGluZyAmJiB3eC5oaWRlTG9hZGluZygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldDogR0VULFxuICBwb3N0OiBQT1NUXG59Il19