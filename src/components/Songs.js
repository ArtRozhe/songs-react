import React, { Component } from 'react';

export default class Songs extends Component {
  onDownloadBtnClick(currentList) {
    this.props.getSongs();
    var screenHeight,
        element = document.getElementById('root'),
        toTop,
        scrollTop,
        divHeight,
        totalHeight,
        left,
        self = this;
    window.onscroll = function() {
      screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      toTop = window.pageYOffset + element.getBoundingClientRect().top;
      scrollTop = window.pageYOffset - toTop;
      divHeight = element.offsetHeight;
      totalHeight = screenHeight + scrollTop;
      left = divHeight - totalHeight;

      if (left < 10) {
        self.props.NextSongs(self.props.pagination + 100, currentList)
      }
    }
  }


  render() {
    const fetching = this.props.fetching;
    const list = this.props.list;
    const pagination = this.props.pagination;
    const tmpList = this.props.currentList;

    var listTemplate, i;

    if (list.length) {
      for (i = pagination; i < pagination + 100; i++) {
        tmpList[i] = list[i];
      }

      listTemplate = tmpList.map(function(item, index) {
        return(
          <li key={index}>{index+1} . {item.name} - {item.author} - {item.length} - {item.genre} - {item.rate} - {item.year} - {item.reward} - {item.format} - {item.country} - {item.album}</li>
        )
      })
    }
    return (
      <div>
        <button onClick={this.onDownloadBtnClick.bind(this, tmpList)}>Загрузить список песен</button>
        {
          fetching ?
          <p>Загрузка</p>
          :
          <p>У тебя {list.length} песен</p>
        }
        {listTemplate}

      </div>
    )
  }
}
