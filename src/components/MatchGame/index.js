import React, {Component} from 'react'
import NavBar from '../NavBar'
import Tabs from '../Tabs'
import Thumbnails from '../Thumbnails'
import ScoreCard from '../ScoreCard'
import './index.css'

class MatchGame extends Component {
  state = {
    activeTabId: 'FRUIT',
    score: 0,
    timeLeft: 60,
    isGameOver: false,
    matchImage: imagesList[0].imageUrl,
    clickedImages: [],
  }

  componentDidMount() {
    this.intervalId = setInterval(this.decrementTime, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  decrementTime = () => {
    const {timeLeft} = this.state
    if (timeLeft === 0) {
      this.setState({isGameOver: true})
      clearInterval(this.intervalId)
    } else {
      this.setState(prevState => ({timeLeft: prevState.timeLeft - 1}))
    }
  }

  onClickTab = tabId => {
    this.setState({activeTabId: tabId})
  }

  onClickThumbnail = id => {
    const {matchImage, score, clickedImages} = this.state
    const selectedImage = imagesList.find(image => image.id === id)
    if (selectedImage.imageUrl === matchImage) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        matchImage:
          imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl,
        clickedImages: [...prevState.clickedImages, id],
      }))
    } else {
      this.setState({isGameOver: true})
      clearInterval(this.intervalId)
    }
  }

  onPlayAgain = () => {
    this.setState({
      activeTabId: 'FRUIT',
      score: 0,
      timeLeft: 60,
      isGameOver: false,
      matchImage: imagesList[0].imageUrl,
      clickedImages: [],
    })
    this.intervalId = setInterval(this.decrementTime, 1000)
  }

  render() {
    const {activeTabId, score, timeLeft, isGameOver, matchImage} = this.state
    const {tabsList, imagesList} = this.props

    const filteredImages = imagesList.filter(
      image => image.category === activeTabId,
    )

    return (
      <div className="match-game">
        <NavBar score={score} timeLeft={timeLeft} />
        {isGameOver ? (
          <ScoreCard score={score} onPlayAgain={this.onPlayAgain} />
        ) : (
          <>
            <img src={matchImage} alt="match" className="match-image" />
            <Tabs
              tabsList={tabsList}
              activeTabId={activeTabId}
              onClickTab={this.onClickTab}
            />
            <Thumbnails
              imagesList={filteredImages}
              onClickThumbnail={this.onClickThumbnail}
            />
          </>
        )}
      </div>
    )
  }
}

export default MatchGame
