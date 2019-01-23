import React, { Component } from 'react';
import { Button, Col, Input, Row } from 'reactstrap';
import { rowStyle, pStyle } from './mainStyle';
import rot13 from './rot13/rot13';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ClippyIcon } from 'react-octicons';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const input = e.target.value.toUpperCase();
    let output;
    if (input.length === 0) {
      output = '';
    } else {
      output = rot13(input);
    }
    this.setState({ input, output });
  }
  render() {
    return (
      <Row style={rowStyle}>
        <Col lg={{ size: 4, offset: 4 }} md={{ size: 6, offset: 3 }} sm="12">
          <Input
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="enter the message you want to encode or decode"
          />
          <p style={pStyle}>and then...</p>
          <Input
            value={this.state.output}
            placeholder="your encoded or decoded message will appear here"
            readOnly={true}
          />
          <br />
          {this.state.output && (
            <CopyToClipboard
              className="animated fadeIn"
              text={this.state.output}
            >
              <Button color="link">
                <ClippyIcon />
              </Button>
            </CopyToClipboard>
          )}
        </Col>
      </Row>
    );
  }
}

export default Main;
