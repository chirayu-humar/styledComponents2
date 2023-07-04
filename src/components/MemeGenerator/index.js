import {Component} from 'react'
import {
  OuterDiv,
  ChildDiv,
  Form,
  SpecialDiv,
  SpecialPara,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {url: '', bottomText: '', topText: '', fontSize: 8, isVisible: false}

  changeTheUrl = event => {
    const {value} = event.target
    this.setState({
      url: value,
    })
  }

  changeTheBottomText = event => {
    const {value} = event.target
    this.setState({
      bottomText: value,
    })
  }

  changeTheTopText = event => {
    const {value} = event.target
    this.setState({
      topText: value,
    })
  }

  changeTheFontSize = event => {
    const {value} = event.target
    console.log(value)
    this.setState({
      fontSize: value,
    })
  }

  SubmitTheForm = event => {
    event.preventDefault()
    this.setState({
      isVisible: true,
    })
  }

  render() {
    const {url, bottomText, topText, fontSize, isVisible} = this.state

    return (
      <OuterDiv>
        {/* first div */}
        <ChildDiv>
          <h1>Meme Generator</h1>
          <Form onSubmit={this.SubmitTheForm}>
            <label htmlFor="url">Image URL</label>
            <input
              value={url}
              onChange={this.changeTheUrl}
              id="url"
              type="url"
            />
            <label htmlFor="topText">Top Text</label>
            <input
              value={topText}
              onChange={this.changeTheTopText}
              id="topText"
              type="text"
            />
            <label htmlFor="bottomText">Bottom Text</label>
            <input
              value={bottomText}
              onChange={this.changeTheBottomText}
              id="bottomText"
              type="text"
            />
            <label htmlFor="fontSize">Font Size</label>
            <select
              value={fontSize}
              onChange={this.changeTheFontSize}
              id="fontSize"
            >
              {fontSizesOptionsList.map(eachItem => (
                <option key={eachItem.optionId}>{eachItem.displayText}</option>
              ))}
            </select>
            <button type="submit">Generate</button>
          </Form>
        </ChildDiv>
        {/* second div */}
        <ChildDiv>
          {isVisible && (
            <SpecialDiv data-testid="meme" url={url} fontSize={fontSize}>
              <SpecialPara fontSize={fontSize}>{topText}</SpecialPara>
              <SpecialPara fontSize={fontSize}>{bottomText}</SpecialPara>
            </SpecialDiv>
          )}
        </ChildDiv>
        {/* second div ended */}
      </OuterDiv>
    )
  }
}

export default MemeGenerator
