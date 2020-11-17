import React from 'react';
import {
    Grid,
    Icon,
    Button
} from 'tabler-react';

import './index.scss'

export default class PromoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activated: props.bonus.activated
        }
    }

    activate = () => {
        this.setState({
            activated: true
        })

        this.props.onActivated()
    }

    fallbackCopyTextToClipboard = (text) => {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
      
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
      
        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }
      
        document.body.removeChild(textArea);
      }

      copyTextToClipboard = (text) => {
        if (!navigator.clipboard) {
          this.fallbackCopyTextToClipboard(text);
          return;
        }
        navigator.clipboard.writeText(text).then(function() {
          console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
          console.error('Async: Could not copy text: ', err);
        });
    }

    render() {
        
        return (
            <div className="promo-item">
                <Grid>
                    <Grid.Row>
                        <Grid.Col width="6">
                            <div className="title">{this.props.bonus.title}</div>
                            <div className="description">{this.props.bonus.description}</div>
                        </Grid.Col>
                        <Grid.Col width="6">
                            <label>PROMOCODE</label>
                            <div className="promocode">
                                <div>
                                    <span>{this.props.bonus.promocode}</span>
                                    <a onClick={() => this.copyTextToClipboard(this.props.bonus.promocode)}><Icon name="copy" /></a>
                                </div>
                                <Button color="primary" onClick={this.activate}>
                                    { this.state.activated?"Activated":"Activate Bonus" }
                                </Button>
                            </div>
                        </Grid.Col>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}